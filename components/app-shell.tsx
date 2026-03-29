import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Crown, Flame, Sparkles } from 'lucide-react';
import { AppNavigation } from '@/components/app-navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { StatusPill } from '@/components/status-pill';
import { Button } from '@/components/ui/button';

type AppShellProps = {
    children: React.ReactNode;
    avatarName: string;
    tierLabel: string;
    level: number;
    streakDays: number;
    guildName?: string;
};

const userButtonAppearance = {
    elements: {
        userButtonTrigger:
            'size-10 rounded-full border border-border bg-card shadow-xs transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50',
        avatarBox: 'size-8',
    },
} as const;

export function AppShell({
    children,
    avatarName,
    tierLabel,
    level,
    streakDays,
    guildName,
}: AppShellProps) {
    return (
        <div className="min-h-screen bg-background">
            <div className="page-shell py-4 sm:py-6">
                <div className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
                    <aside className="rounded-[32px] border border-sidebar-border bg-sidebar px-4 py-5 text-sidebar-foreground shadow-md sm:px-5 lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto">
                        <div className="flex items-center justify-between gap-3">
                            <Link href="/" className="flex items-center gap-3">
                                <span className="flex size-11 items-center justify-center rounded-2xl bg-sidebar-primary text-sm font-bold text-sidebar-primary-foreground">
                                    VQ
                                </span>
                                <span>
                                    <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sidebar-foreground/60">
                                        VitalQuest
                                    </span>
                                    <span className="block text-lg font-semibold">
                                        Command Deck
                                    </span>
                                </span>
                            </Link>
                            <div className="hidden lg:block">
                                <ThemeToggle />
                            </div>
                        </div>

                        <div className="mt-6 rounded-[26px] border border-sidebar-border bg-sidebar-accent px-4 py-4">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sidebar-foreground/55">
                                        Avatar
                                    </p>
                                    <h2 className="mt-2 text-2xl font-semibold">
                                        {avatarName}
                                    </h2>
                                </div>
                                <StatusPill tone="warning" className="border-0">
                                    {tierLabel}
                                </StatusPill>
                            </div>
                            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                <div className="rounded-2xl bg-sidebar px-3 py-3">
                                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sidebar-foreground/55">
                                        <Crown className="size-3.5" />
                                        Level
                                    </div>
                                    <p className="mt-2 text-2xl font-semibold">
                                        {level}
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-sidebar px-3 py-3">
                                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sidebar-foreground/55">
                                        <Flame className="size-3.5" />
                                        Streak
                                    </div>
                                    <p className="mt-2 text-2xl font-semibold">
                                        {streakDays}d
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-sidebar px-3 py-3">
                                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sidebar-foreground/55">
                                        <Sparkles className="size-3.5" />
                                        Guild
                                    </div>
                                    <p className="mt-2 text-sm font-semibold">
                                        {guildName ?? 'Unassigned'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <AppNavigation />
                        </div>

                        <div className="mt-6 rounded-[26px] border border-sidebar-border px-4 py-4 text-sm text-sidebar-foreground/72">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sidebar-foreground/55">
                                Readiness
                            </p>
                            <p className="mt-3 leading-6">
                                Your current setup is optimized for daily quests,
                                guided recovery, and exportable progress reports.
                            </p>
                            <Button
                                asChild
                                variant="secondary"
                                className="mt-4 w-full border-0"
                            >
                                <Link href="/bio-sync">Run Bio-Sync</Link>
                            </Button>
                        </div>
                    </aside>

                    <main className="min-w-0">
                        <header className="mb-4 flex flex-col gap-4 rounded-[32px] border bg-card px-4 py-4 shadow-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <p className="eyebrow">Balanced progression</p>
                                <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                                    Verified wellness, visible momentum.
                                </h1>
                            </div>
                            <div className="flex items-center gap-3 self-start lg:self-auto">
                                <div className="lg:hidden">
                                    <ThemeToggle />
                                </div>
                                <UserButton appearance={userButtonAppearance} />
                            </div>
                        </header>

                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
