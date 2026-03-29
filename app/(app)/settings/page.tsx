import Link from 'next/link';
import { Bell, LockKeyhole, Shield } from 'lucide-react';
import { SectionTabs } from '@/components/section-tabs';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
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
                <p className="eyebrow">Settings</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Operational controls around trust, privacy, and reminders
                </h2>
            </section>

            <section className="grid gap-5 lg:grid-cols-3">
                {[
                    {
                        icon: Shield,
                        title: 'Privacy posture',
                        copy: 'Review what is shared publicly and how sensitive wellness data is framed in the product.',
                        href: '/settings/privacy',
                    },
                    {
                        icon: Bell,
                        title: 'Notification rhythm',
                        copy: 'Shape when reminders should nudge quests, syncs, and recovery prompts.',
                        href: '/settings/notifications',
                    },
                    {
                        icon: LockKeyhole,
                        title: 'Security summary',
                        copy: 'Clerk handles authentication, while the product keeps health-facing copy transparent and minimal.',
                        href: '/settings/privacy',
                    },
                ].map(({ icon: Icon, title, copy, href }) => (
                    <article key={title} className="panel p-5 sm:p-6">
                        <Icon className="size-5 text-primary" />
                        <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p>
                        <Button asChild className="mt-6 w-full">
                            <Link href={href}>Open</Link>
                        </Button>
                    </article>
                ))}
            </section>
        </div>
    );
}
