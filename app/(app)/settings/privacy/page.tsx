import { SectionTabs } from '@/components/section-tabs';
import { StatusPill } from '@/components/status-pill';

export default function SettingsPrivacyPage() {
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
                <p className="eyebrow">Privacy and trust</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Clear posture around sensitive wellness information
                </h2>
            </section>

            <section className="grid gap-5 lg:grid-cols-3">
                {[
                    ['Shared publicly', 'Guild contribution summaries only'],
                    ['Protected', 'Sleep, heart rate, and raw imports stay account-scoped'],
                    ['Export control', 'Reports are generated explicitly by the user'],
                ].map(([label, value]) => (
                    <article key={label} className="panel p-5 sm:p-6">
                        <StatusPill tone="accent">{label}</StatusPill>
                        <p className="mt-4 text-lg font-semibold">{value}</p>
                    </article>
                ))}
            </section>
        </div>
    );
}
