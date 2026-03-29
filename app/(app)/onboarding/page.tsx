import Link from 'next/link';
import { CheckCircle2, CircleDashed, ShieldCheck, Target, UserRound } from 'lucide-react';
import { SectionTabs } from '@/components/section-tabs';
import { Button } from '@/components/ui/button';
import { requireViewer } from '@/lib/vitalquest';

export default async function OnboardingPage() {
    const viewer = await requireViewer();
    type ViewerConnection = (typeof viewer.connections)[number];
    const profileReady = Boolean(viewer.profile?.primaryGoal);
    const connectedProviders = viewer.connections.filter(
        (connection: ViewerConnection) => connection.status === 'CONNECTED',
    ).length;
    const questReady = viewer.quests.length > 0;

    const steps = [
        {
            title: 'Profile setup',
            description:
                'Baseline wellbeing data, avatar identity, and goals personalize the experience.',
            ready: profileReady,
            href: '/onboarding/profile',
            icon: UserRound,
        },
        {
            title: 'Bio-Sync setup',
            description:
                'Connect at least one provider so XP and leaderboards reflect trusted health signals.',
            ready: connectedProviders > 0,
            href: '/onboarding/bio-sync',
            icon: ShieldCheck,
        },
        {
            title: 'Quest readiness',
            description:
                'Daily and weekly quests are generated from your goals and current progress history.',
            ready: questReady,
            href: '/quests/daily',
            icon: Target,
        },
    ];

    return (
        <div className="space-y-5">
            <SectionTabs
                items={[
                    { href: '/onboarding', label: 'Overview' },
                    { href: '/onboarding/profile', label: 'Profile step' },
                    { href: '/onboarding/bio-sync', label: 'Bio-Sync step' },
                ]}
            />

            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Onboarding flow</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    A guided setup built around trust and low friction
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                    The onboarding sequence mirrors the coursework requirements:
                    account creation, baseline profile setup, wearable
                    connection, and quest readiness.
                </p>
            </section>

            <section className="grid gap-5 lg:grid-cols-3">
                {steps.map(({ title, description, ready, href, icon: Icon }) => (
                    <article key={title} className="panel p-5 sm:p-6">
                        <div className="flex items-center justify-between">
                            <Icon className="size-5 text-primary" />
                            {ready ? (
                                <CheckCircle2 className="size-5 text-primary" />
                            ) : (
                                <CircleDashed className="size-5 text-muted-foreground" />
                            )}
                        </div>
                        <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground">
                            {description}
                        </p>
                        <Button asChild className="mt-6 w-full">
                            <Link href={href}>{ready ? 'Review step' : 'Complete step'}</Link>
                        </Button>
                    </article>
                ))}
            </section>
        </div>
    );
}
