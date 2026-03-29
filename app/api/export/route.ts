import { currentUser } from '@clerk/nextjs/server';
import { getPrisma } from '@/lib/prisma';
import { ensureWorkspace, recordExport } from '@/lib/vitalquest';

function toCsv(rows: Array<Array<string | number>>) {
    return rows
        .map((row) =>
            row
                .map((cell) => `"${String(cell).replaceAll('"', '""')}"`)
                .join(','),
        )
        .join('\n');
}

function escapePdfText(value: string) {
    return value.replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');
}

function buildSimplePdf(lines: string[]) {
    const textCommands = lines
        .map((line, index) => `BT /F1 12 Tf 50 ${760 - index * 18} Td (${escapePdfText(line)}) Tj ET`)
        .join('\n');

    const content = `${textCommands}\n`;
    const objects = [
        '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj',
        '2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj',
        '3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj',
        '4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj',
        `5 0 obj << /Length ${content.length} >> stream\n${content}endstream endobj`,
    ];

    let pdf = '%PDF-1.4\n';
    const offsets: number[] = [0];

    for (const object of objects) {
        offsets.push(pdf.length);
        pdf += `${object}\n`;
    }

    const xrefStart = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n`;
    pdf += '0000000000 65535 f \n';

    for (let index = 1; index < offsets.length; index += 1) {
        pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`;
    }

    pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

    return new TextEncoder().encode(pdf);
}

export async function GET(request: Request) {
    const user = await currentUser();

    if (!user) {
        return new Response('Unauthorized', { status: 401 });
    }

    const email =
        user.primaryEmailAddress?.emailAddress ??
        user.emailAddresses[0]?.emailAddress;

    if (!email) {
        return new Response('Missing user email', { status: 400 });
    }

    const prisma = getPrisma();
    const dbUser = await prisma.user.upsert({
        where: { clerkId: user.id },
        update: { email },
        create: { clerkId: user.id, email, name: user.fullName || null },
    });

    await ensureWorkspace(dbUser.id, dbUser.name ?? undefined);

    const url = new URL(request.url);
    const format = url.searchParams.get('format') === 'pdf' ? 'pdf' : 'csv';
    const timeframe = url.searchParams.get('timeframe') || '7d';

    const viewer = await prisma.user.findUniqueOrThrow({
        where: { id: dbUser.id },
        include: {
            profile: true,
            metrics: {
                orderBy: {
                    capturedOn: 'asc',
                },
            },
            quests: {
                orderBy: {
                    dueAt: 'asc',
                },
            },
        },
    });

    await recordExport(viewer.id, format.toUpperCase(), timeframe);

    if (format === 'csv') {
        const csv = toCsv([
            ['Date', 'Steps', 'SleepHours', 'MindfulnessMinutes', 'XpEarned'],
            ...viewer.metrics.map((metric) => [
                metric.capturedOn.toISOString(),
                metric.steps,
                metric.sleepHours,
                metric.mindfulnessMinutes,
                metric.xpEarned,
            ]),
        ]);

        return new Response(csv, {
            headers: {
                'Content-Type': 'text/csv; charset=utf-8',
                'Content-Disposition': `attachment; filename="vitalquest-${timeframe}.csv"`,
            },
        });
    }

    const pdf = buildSimplePdf([
        'VitalQuest Progress Summary',
        `User: ${viewer.name || viewer.email}`,
        `Avatar: ${viewer.profile?.avatarName || 'Astra'}`,
        `Level: ${viewer.profile?.level || 1}`,
        `Wellbeing score: ${viewer.profile?.wellbeingScore || 0}`,
        `Streak days: ${viewer.profile?.streakDays || 0}`,
        `XP this period: ${viewer.metrics.reduce((sum, metric) => sum + metric.xpEarned, 0)}`,
        `Completed quests: ${viewer.quests.filter((quest) => quest.status === 'COMPLETED').length}`,
    ]);

    return new Response(pdf, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="vitalquest-${timeframe}.pdf"`,
        },
    });
}
