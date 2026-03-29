import { SectionTabs } from '@/components/section-tabs';
import { StatusPill } from '@/components/status-pill';
import { requireViewer } from '@/lib/vitalquest';

export default async function DashboardTodayPage() {
    const viewer = await requireViewer();
    const focusQuest = viewer.quests[0];

    const schedule = [
        {
            label: 'Morning',
            title: 'Recovery check-in',
            copy: 'Review sleep and hydration so the day starts with a stable baseline.',
        },
        {
            label: 'Afternoon',
            title: focusQuest?.title ?? 'Active quest block',
            copy: focusQuest?.criteria ?? 'Close one movement-focused objective before evening.',
        },
        {
            label: 'Evening',
            title: 'Mindfulness reset',
            copy: 'Use the final loop of the day to restore mana and protect the streak.',
        },
    ];

    return (
        <div className="space-y-5">
            <SectionTabs
                items={[
                    { href: '/dashboard', label: 'Overview' },
                    { href: '/dashboard/today', label: 'Today view' },
                ]}
            />

            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Today view</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    A calmer breakdown of what matters today
                </h2>
            </section>

            <section className="grid gap-5 lg:grid-cols-3">
                {schedule.map((item) => (
                    <article key={item.label} className="panel p-5 sm:p-6">
                        <StatusPill tone="accent">{item.label}</StatusPill>
                        <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground">
                            {item.copy}
                        </p>
                    </article>
                ))}
            </section>
        </div>
    );
}
