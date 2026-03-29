import Link from 'next/link';
import { HeartPulse, ShieldCheck, Sparkles } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

type AuthShellProps = {
    children: React.ReactNode;
    mode: 'sign-in' | 'sign-up';
};

const points = [
    {
        icon: ShieldCheck,
        title: 'Trusted progress',
        copy: 'Wearable-backed loops reduce false progress and make rewards more credible.',
    },
    {
        icon: HeartPulse,
        title: 'Balanced wellbeing',
        copy: 'Fitness, sleep, nutrition, and mindfulness work together instead of competing.',
    },
    {
        icon: Sparkles,
        title: 'Narrative motivation',
        copy: 'Story chapters and guild quests create a stronger return reason than streak counters alone.',
    },
];

export function AuthShell({ children, mode }: AuthShellProps) {
    const isSignIn = mode === 'sign-in';

    return (
        <main className="min-h-screen bg-background">
            <div className="page-shell py-5 sm:py-6">
                <div className="flex items-center justify-between rounded-[30px] border bg-card px-4 py-4 shadow-sm sm:px-6">
                    <BrandLogo />
                    <ThemeToggle />
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                    <section className="rounded-[34px] bg-primary px-5 py-7 text-primary-foreground shadow-lg sm:px-8 sm:py-10">
                        <p className="eyebrow text-white/72">
                            {isSignIn ? 'Welcome back' : 'Account setup'}
                        </p>
                        <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                            {isSignIn
                                ? 'Return to your command deck and pick up the next quest.'
                                : 'Create your account and step into the VitalQuest progression loop.'}
                        </h1>
                        <p className="mt-5 max-w-xl text-base leading-7 text-white/74">
                            {isSignIn
                                ? 'Your Bio-Sync status, guild feed, analytics, and story state will be waiting once you sign in.'
                                : 'Baseline goals and avatar identity are captured after sign up so daily quests can feel personalized from the start.'}
                        </p>

                        <div className="mt-8 grid gap-4">
                            {points.map(({ icon: Icon, title, copy }) => (
                                <article
                                    key={title}
                                    className="rounded-[26px] border border-white/10 bg-white/8 px-5 py-4"
                                >
                                    <Icon className="size-5 text-accent" />
                                    <h2 className="mt-4 text-lg font-semibold">
                                        {title}
                                    </h2>
                                    <p className="mt-2 text-sm leading-6 text-white/72">
                                        {copy}
                                    </p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button
                                asChild
                                variant="outline"
                                className="border-white/18 bg-transparent text-white hover:bg-white/8"
                            >
                                <Link href="/">Back home</Link>
                            </Button>
                            <Button
                                asChild
                                variant="secondary"
                                className="border-0"
                            >
                                <Link href={isSignIn ? '/sign-up' : '/sign-in'}>
                                    {isSignIn
                                        ? 'Need an account? Sign up'
                                        : 'Already registered? Sign in'}
                                </Link>
                            </Button>
                        </div>
                    </section>

                    <section className="panel flex items-center justify-center p-5 sm:p-8">
                        <div className="clerk-direct w-full max-w-[440px]">
                            {children}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
