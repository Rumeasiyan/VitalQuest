import Link from 'next/link';
import { Download } from 'lucide-react';
import { SectionTabs } from '@/components/section-tabs';
import { Button } from '@/components/ui/button';
import { requireViewer } from '@/lib/vitalquest';

export default async function AnalyticsReportsPage() {
    const viewer = await requireViewer();
    type ViewerExport = (typeof viewer.exports)[number];

    return (
        <div className="space-y-5">
            <SectionTabs
                items={[
                    { href: '/analytics', label: 'Dashboard' },
                    { href: '/analytics/reports', label: 'Reports' },
                ]}
            />

            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Report center</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Exportable summaries for accountability and review
                </h2>
            </section>

            <section className="grid gap-5 lg:grid-cols-3">
                {[
                    {
                        title: '7-day operational snapshot',
                        href: '/api/export?format=csv&timeframe=7d',
                        copy: 'Raw metric export suited for spreadsheet analysis.',
                    },
                    {
                        title: '30-day progress summary',
                        href: '/api/export?format=pdf&timeframe=30d',
                        copy: 'Narrative-friendly summary for mentors or coaches.',
                    },
                    {
                        title: 'Current portfolio proof',
                        href: '/api/export?format=pdf&timeframe=portfolio',
                        copy: 'Compact summary of level, score, streak, and completed quests.',
                    },
                ].map((report) => (
                    <article key={report.title} className="panel p-5 sm:p-6">
                        <h3 className="text-2xl font-semibold">{report.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground">
                            {report.copy}
                        </p>
                        <Button asChild className="mt-6 w-full">
                            <Link href={report.href}>
                                <Download className="size-4" />
                                Download
                            </Link>
                        </Button>
                    </article>
                ))}
            </section>

            <section className="panel p-5 sm:p-6">
                <p className="eyebrow">Recent activity</p>
                <div className="mt-5 space-y-3">
                    {viewer.exports.length > 0 ? (
                        viewer.exports.map((record: ViewerExport) => (
                            <div
                                key={record.id}
                                className="rounded-2xl bg-muted/45 px-4 py-3 text-sm"
                            >
                                {record.format} export generated for {record.timeframe}
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-muted-foreground">
                            No reports exported yet.
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
}
