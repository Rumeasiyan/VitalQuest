import { joinGuildAction } from '@/app/(app)/actions';
import { SectionTabs } from '@/components/section-tabs';
import { StatusPill } from '@/components/status-pill';
import { SubmitButton } from '@/components/submit-button';
import { getCommunityOverview, requireViewer } from '@/lib/vitalquest';

export default async function CommunityGuildsPage() {
    const viewer = await requireViewer();
    type ViewerMembership = (typeof viewer.guildMemberships)[number];
    const { guilds } = await getCommunityOverview();
    type CommunityGuild = (typeof guilds)[number];

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
                <p className="eyebrow">Guild directory</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Pick the accountability style that fits your routine
                </h2>
            </section>

            <section className="grid gap-5 lg:grid-cols-3">
                {guilds.map((guild: CommunityGuild) => {
                    const joined = viewer.guildMemberships.some(
                        (membership: ViewerMembership) =>
                            membership.guildId === guild.id,
                    );

                    return (
                        <article key={guild.id} className="panel p-5 sm:p-6">
                            <div className="flex items-center justify-between">
                                <StatusPill tone="accent">{guild.memberCount} members</StatusPill>
                                {joined ? <StatusPill tone="success">Joined</StatusPill> : null}
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold">{guild.name}</h3>
                            <p className="mt-3 text-sm font-medium text-primary">{guild.tagline}</p>
                            <p className="mt-4 text-sm leading-7 text-muted-foreground">
                                {guild.description}
                            </p>
                            <form action={joinGuildAction} className="mt-5">
                                <input type="hidden" name="guildId" value={guild.id} />
                                <SubmitButton
                                    idleLabel={joined ? 'Already joined' : 'Join this guild'}
                                    pendingLabel="Joining..."
                                    disabled={joined}
                                    className="w-full"
                                />
                            </form>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}
