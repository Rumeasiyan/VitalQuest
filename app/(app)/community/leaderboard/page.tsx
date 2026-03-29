import { SectionTabs } from '@/components/section-tabs';
import { StatusPill } from '@/components/status-pill';
import { getCommunityOverview } from '@/lib/vitalquest';

export default async function CommunityLeaderboardPage() {
    const { leaderboard } = await getCommunityOverview();
    type LeaderboardUser = (typeof leaderboard)[number];

    return (
        <div className="space-y-5">
            <SectionTabs
                items={[
                    { href: '/community', label: 'Feed' },
                    { href: '/community/guilds', label: 'Guilds' },
                    { href: '/community/leaderboard', label: 'Leaderboard' },
                ]}
            />

            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Leaderboard</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    A ranking built on verified and balanced progress
                </h2>
            </section>

            <section className="panel p-5 sm:p-6">
                <div className="space-y-4">
                    {leaderboard.map((user: LeaderboardUser, index: number) => (
                        <article
                            key={user.id}
                            className="flex flex-col gap-3 rounded-[26px] border bg-muted/45 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                                    Rank {index + 1}
                                </p>
                                <h3 className="mt-2 text-2xl font-semibold">
                                    {user.name || user.email}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <StatusPill tone="success">
                                    Level {user.profile?.level ?? 1}
                                </StatusPill>
                                <StatusPill tone="accent">
                                    Score {user.profile?.wellbeingScore ?? 0}
                                </StatusPill>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
