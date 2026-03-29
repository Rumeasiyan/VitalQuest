import Link from 'next/link';
import { ArrowRight, Flame, MoonStar, ShieldCheck, Swords, UsersRound } from 'lucide-react';
import { completeQuestAction } from '@/app/(app)/actions';
import { Sparkline } from '@/components/sparkline';
import { StatusPill } from '@/components/status-pill';
import { SubmitButton } from '@/components/submit-button';
import { Button } from '@/components/ui/button';
import {
    calculateLevelProgress,
    formatProvider,
    getCategoryLabel,
    requireViewer,
} from '@/lib/vitalquest';

export default async function DashboardPage() {
    const viewer = await requireViewer();
    const profile = viewer.profile!;
    const latestConnection = viewer.connections.find(
        (connection) => connection.lastSyncedAt,
    );
    const activeGuild = viewer.guildMemberships[0]?.guild;
    const activeQuests = viewer.quests.slice(0, 3);
    const wellnessTrend = viewer.metrics.map((metric) => metric.xpEarned);
    const levelProgress = calculateLevelProgress(profile.xp);

    return (
        <div className="space-y-5">
            <section className="panel overflow-hidden p-5 sm:p-7">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <div>
                        <p className="eyebrow">Today&apos;s command view</p>
                        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                            {profile.avatarName} is one strong sync away from
                            the next story unlock.
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                            Your current momentum is driven by a verified step
                            streak, improving sleep recovery, and two active
                            quests that are close to completion.
                        </p>

                        <div className="mt-6 max-w-xl">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-muted-foreground">
                                    Level {profile.level} progression
                                </span>
                                <span className="font-semibold">
                                    {Math.round(levelProgress)}%
                                </span>
                            </div>
                            <div className="mt-3 h-3 rounded-full bg-muted">
                                <div
                                    className="h-full rounded-full bg-primary"
                                    style={{ width: `${Math.max(levelProgress, 8)}%` }}
                                />
                            </div>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="panel-muted px-4 py-4">
                                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                    Wellbeing score
                                </p>
                                <p className="mt-3 text-3xl font-semibold">
                                    {profile.wellbeingScore}
                                </p>
                            </div>
                            <div className="panel-muted px-4 py-4">
                                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                    Current streak
                                </p>
                                <p className="mt-3 text-3xl font-semibold">
                                    {profile.streakDays} days
                                </p>
                            </div>
                            <div className="panel-muted px-4 py-4">
                                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                    Reward balance
                                </p>
                                <p className="mt-3 text-3xl font-semibold">
                                    {profile.coins} coins
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[30px] bg-primary p-5 text-primary-foreground sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/65">
                                    Bio-Sync
                                </p>
                                <h3 className="mt-3 text-3xl font-semibold">
                                    {latestConnection
                                        ? formatProvider(latestConnection.provider)
                                        : 'Ready to connect'}
                                </h3>
                            </div>
                            <ShieldCheck className="size-8 text-accent" />
                        </div>

                        <p className="mt-5 text-sm leading-7 text-white/76">
                            {latestConnection?.lastSyncSummary ??
                                'Connect a wearable provider to turn verified activity into avatar stats and quest progress.'}
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                            <div className="rounded-2xl bg-white/8 px-4 py-4">
                                <p className="text-xs uppercase tracking-[0.22em] text-white/58">
                                    Strength
                                </p>
                                <p className="mt-2 text-2xl font-semibold">
                                    {profile.strength}
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/8 px-4 py-4">
                                <p className="text-xs uppercase tracking-[0.22em] text-white/58">
                                    Mana
                                </p>
                                <p className="mt-2 text-2xl font-semibold">
                                    {profile.mana}
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/8 px-4 py-4">
                                <p className="text-xs uppercase tracking-[0.22em] text-white/58">
                                    Resilience
                                </p>
                                <p className="mt-2 text-2xl font-semibold">
                                    {profile.resilience}
                                </p>
                            </div>
                        </div>

                        <Button
                            asChild
                            variant="secondary"
                            className="mt-6 border-0"
                        >
                            <Link href="/bio-sync">Manage connections</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                <div className="panel p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="eyebrow">Quest board</p>
                            <h3 className="mt-3 text-2xl font-semibold">
                                Active missions
                            </h3>
                        </div>
                        <Button asChild variant="outline">
                            <Link href="/quests">View all quests</Link>
                        </Button>
                    </div>

                    <div className="mt-6 space-y-4">
                        {activeQuests.map((quest) => (
                            <article
                                key={quest.id}
                                className="rounded-[26px] border bg-muted/50 p-5"
                            >
                                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <StatusPill tone="accent">
                                                {getCategoryLabel(quest.category)}
                                            </StatusPill>
                                            <StatusPill tone="neutral">
                                                {quest.frequency}
                                            </StatusPill>
                                        </div>
                                        <h4 className="mt-4 text-xl font-semibold">
                                            {quest.title}
                                        </h4>
                                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                            {quest.narrative}
                                        </p>
                                        <p className="mt-3 text-sm font-medium">
                                            {quest.criteria}
                                        </p>
                                    </div>

                                    <div className="w-full max-w-sm rounded-[22px] bg-card p-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">
                                                Progress
                                            </span>
                                            <span className="font-semibold">
                                                {Math.min(
                                                    100,
                                                    Math.round(
                                                        (quest.currentValue /
                                                            quest.targetValue) *
                                                            100,
                                                    ),
                                                )}
                                                %
                                            </span>
                                        </div>
                                        <div className="mt-3 h-2.5 rounded-full bg-muted">
                                            <div
                                                className="h-full rounded-full bg-primary"
                                                style={{
                                                    width: `${Math.max(
                                                        8,
                                                        Math.min(
                                                            100,
                                                            (quest.currentValue /
                                                                quest.targetValue) *
                                                                100,
                                                        ),
                                                    )}%`,
                                                }}
                                            />
                                        </div>
                                        <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                                            <span>
                                                {quest.currentValue} /{' '}
                                                {quest.targetValue}
                                            </span>
                                            <span>+{quest.rewardXp} XP</span>
                                        </div>

                                        <form
                                            action={completeQuestAction}
                                            className="mt-4"
                                        >
                                            <input
                                                type="hidden"
                                                name="questId"
                                                value={quest.id}
                                            />
                                            <SubmitButton
                                                idleLabel="Complete quest"
                                                pendingLabel="Saving..."
                                                className="w-full"
                                                disabled={
                                                    quest.status === 'COMPLETED'
                                                }
                                            />
                                        </form>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="space-y-5">
                    <section className="panel p-5 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="eyebrow">Weekly signal</p>
                                <h3 className="mt-3 text-2xl font-semibold">
                                    XP trend
                                </h3>
                            </div>
                            <Flame className="size-5 text-primary" />
                        </div>
                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                            Your last seven days show stable improvement driven
                            by better recovery and one verified walk loop.
                        </p>
                        <div className="mt-5">
                            <Sparkline values={wellnessTrend} />
                        </div>
                    </section>

                    <section className="panel p-5 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="eyebrow">Storyline</p>
                                <h3 className="mt-3 text-2xl font-semibold">
                                    Current chapter
                                </h3>
                            </div>
                            <MoonStar className="size-5 text-primary" />
                        </div>
                        <div className="mt-5 rounded-[24px] bg-muted/55 p-5">
                            <p className="text-sm font-semibold text-muted-foreground">
                                {
                                    viewer.storyChapters.find(
                                        (chapter) =>
                                            chapter.status === 'AVAILABLE',
                                    )?.sceneLabel
                                }
                            </p>
                            <h4 className="mt-2 text-xl font-semibold">
                                {
                                    viewer.storyChapters.find(
                                        (chapter) =>
                                            chapter.status === 'AVAILABLE',
                                    )?.title
                                }
                            </h4>
                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                {
                                    viewer.storyChapters.find(
                                        (chapter) =>
                                            chapter.status === 'AVAILABLE',
                                    )?.summary
                                }
                            </p>
                            <Button asChild variant="ghost" className="mt-4 px-0">
                                <Link href="/story">
                                    Open story map
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                        </div>
                    </section>

                    <section className="panel p-5 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="eyebrow">Guild focus</p>
                                <h3 className="mt-3 text-2xl font-semibold">
                                    {activeGuild?.name ?? 'No guild yet'}
                                </h3>
                            </div>
                            <UsersRound className="size-5 text-primary" />
                        </div>
                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                            {activeGuild?.description ??
                                'Join a guild to unlock weekly challenges and community accountability.'}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <StatusPill tone="success">
                                {activeGuild?.memberCount ?? 0} members
                            </StatusPill>
                            <StatusPill tone="neutral">
                                {activeGuild?.weeklyTargetXp ?? 0} XP target
                            </StatusPill>
                        </div>
                    </section>
                </div>
            </section>

            <section className="grid gap-5 md:grid-cols-3">
                <article className="panel p-5">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="size-5 text-primary" />
                        <h3 className="text-lg font-semibold">Connections</h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {viewer.connections.filter((connection) => connection.status === 'CONNECTED').length}{' '}
                        providers configured, with the latest sync logged{' '}
                        {latestConnection?.lastSyncedAt
                            ? 'within the last day.'
                            : 'after your first verification.'}
                    </p>
                </article>

                <article className="panel p-5">
                    <div className="flex items-center gap-3">
                        <Swords className="size-5 text-primary" />
                        <h3 className="text-lg font-semibold">Quest mix</h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {
                            viewer.quests.filter((quest) => quest.status === 'COMPLETED').length
                        }{' '}
                        completed quests across fitness, nutrition, mindfulness,
                        and recovery loops.
                    </p>
                </article>

                <article className="panel p-5">
                    <div className="flex items-center gap-3">
                        <Flame className="size-5 text-primary" />
                        <h3 className="text-lg font-semibold">Forecast</h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        At the current pace, you are projected to reach Level{' '}
                        {profile.level + 1} in approximately 4 days.
                    </p>
                </article>
            </section>
        </div>
    );
}
