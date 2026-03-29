import { SectionTabs } from '@/components/section-tabs';
import { StatusPill } from '@/components/status-pill';

export default function SettingsNotificationsPage() {
    const reminders = [
        'Morning reminder to review recovery and hydration.',
        'Afternoon prompt to close a movement or nutrition quest.',
        'Evening reminder to protect mindfulness and sleep targets.',
    ];

    return (
        <div className="space-y-5">
            <SectionTabs
                items={[
                    { href: '/settings', label: 'Overview' },
                    { href: '/settings/privacy', label: 'Privacy' },
                    { href: '/settings/notifications', label: 'Notifications' },
                ]}
            />

            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Notification design</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Reminders should support consistency without nagging
                </h2>
            </section>

            <section className="space-y-4">
                {reminders.map((item, index) => (
                    <article key={item} className="panel p-5 sm:p-6">
                        <div className="flex flex-wrap items-center gap-2">
                            <StatusPill tone="success">Enabled by design</StatusPill>
                            <StatusPill tone="neutral">Window {index + 1}</StatusPill>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground">{item}</p>
                    </article>
                ))}
            </section>
        </div>
    );
}
