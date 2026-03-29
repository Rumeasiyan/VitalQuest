import { createCommunityPostAction, joinGuildAction } from '@/app/(app)/actions';
import { SectionTabs } from '@/components/section-tabs';
import { StatusPill } from '@/components/status-pill';
import { SubmitButton } from '@/components/submit-button';
import { getCommunityOverview, requireViewer } from '@/lib/vitalquest';

export default async function CommunityPage() {
    const viewer = await requireViewer();
    const { guilds, leaderboard, recentPosts } = await getCommunityOverview();
    const activeGuildId = viewer.guildMemberships[0]?.guildId;

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
                <p className="eyebrow">Guilds and accountability</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Community should add momentum, not noise
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                    Guilds keep the experience social without turning it into a
                    generic feed. Members join challenges, track collective XP,
                    and post concise updates tied to real progress.
                </p>
            </section>

            <section className="grid gap-5 xl:grid-cols-[1fr_320px]">
                <div className="space-y-5">
                    <div className="grid gap-5 lg:grid-cols-3">
                        {guilds.map((guild) => {
                            const joined = viewer.guildMemberships.some(
                                (membership) => membership.guildId === guild.id,
                            );

                            return (
                                <article
                                    key={guild.id}
                                    className="panel p-5 sm:p-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <StatusPill tone="accent">
                                            {guild.memberCount} members
                                        </StatusPill>
                                        {guild.id === activeGuildId ? (
                                            <StatusPill tone="success">
                                                Active
                                            </StatusPill>
                                        ) : null}
                                    </div>
                                    <h3 className="mt-4 text-2xl font-semibold">
                                        {guild.name}
                                    </h3>
                                    <p className="mt-2 text-sm font-medium text-primary">
                                        {guild.tagline}
                                    </p>
                                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                                        {guild.description}
                                    </p>
                                    <p className="mt-4 text-sm text-muted-foreground">
                                        Weekly target: {guild.weeklyTargetXp} XP
                                    </p>

                                    <form action={joinGuildAction} className="mt-5">
                                        <input
                                            type="hidden"
                                            name="guildId"
                                            value={guild.id}
                                        />
                                        <SubmitButton
                                            idleLabel={
                                                joined ? 'Already joined' : 'Join guild'
                                            }
                                            pendingLabel="Joining..."
                                            className="w-full"
                                            disabled={joined}
                                        />
                                    </form>
                                </article>
                            );
                        })}
                    </div>

                    <section className="panel p-5 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="eyebrow">Guild feed</p>
                                <h3 className="mt-3 text-2xl font-semibold">
                                    Recent updates
                                </h3>
                            </div>
                        </div>

                        {activeGuildId ? (
                            <form
                                action={createCommunityPostAction}
                                className="mt-5 rounded-[26px] bg-muted/45 p-4"
                            >
                                <input
                                    type="hidden"
                                    name="guildId"
                                    value={activeGuildId}
                                />
                                <label
                                    htmlFor="content"
                                    className="text-sm font-medium"
                                >
                                    Share a short guild update
                                </label>
                                <textarea
                                    id="content"
                                    name="content"
                                    rows={4}
                                    className="mt-3 w-full rounded-2xl border bg-card px-4 py-3 text-sm"
                                    placeholder="Example: closed my recovery quest after a 7.8h sleep window and a calm morning walk."
                                />
                                <div className="mt-4">
                                    <SubmitButton
                                        idleLabel="Post update"
                                        pendingLabel="Posting..."
                                    />
                                </div>
                            </form>
                        ) : null}

                        <div className="mt-5 space-y-4">
                            {recentPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="rounded-[24px] border bg-card p-5"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-semibold">
                                                {post.user.name || post.user.email}
                                            </p>
                                            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                                {post.guild.name}
                                            </p>
                                        </div>
                                        <StatusPill tone="neutral">
                                            {post.likes} likes
                                        </StatusPill>
                                    </div>
                                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                                        {post.content}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>

                <aside className="panel p-5 sm:p-6">
                    <p className="eyebrow">Leaderboard</p>
                    <h3 className="mt-3 text-2xl font-semibold">
                        Current top performers
                    </h3>
                    <div className="mt-5 space-y-3">
                        {leaderboard.map((user, index) => (
                            <div
                                key={user.id}
                                className="flex items-center justify-between rounded-2xl bg-muted/45 px-4 py-3"
                            >
                                <div>
                                    <p className="text-sm font-semibold">
                                        {index + 1}. {user.name || user.email}
                                    </p>
                                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                        Level {user.profile?.level ?? 1}
                                    </p>
                                </div>
                                <StatusPill tone="success">
                                    {user.profile?.wellbeingScore ?? 0}
                                </StatusPill>
                            </div>
                        ))}
                    </div>
                </aside>
            </section>
        </div>
    );
}
