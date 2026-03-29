import { SectionTabs } from '@/components/section-tabs';
import { StatusPill } from '@/components/status-pill';
import { requireViewer } from '@/lib/vitalquest';

export default async function ProfileAvatarPage() {
    const viewer = await requireViewer();
    const profile = viewer.profile!;

    return (
        <div className="space-y-5">
            <SectionTabs
                items={[
                    { href: '/profile', label: 'Profile setup' },
                    { href: '/profile/avatar', label: 'Avatar' },
                    { href: '/profile/goals', label: 'Goals' },
                ]}
            />

            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Avatar identity</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Character framing for the wellness journey
                </h2>
            </section>

            <section className="grid gap-5 lg:grid-cols-[320px_1fr]">
                <article className="panel p-5 sm:p-6">
                    <div className="rounded-[28px] bg-primary px-6 py-8 text-center text-primary-foreground">
                        <p className="text-xs uppercase tracking-[0.24em] text-white/62">
                            Avatar
                        </p>
                        <p className="mt-4 text-3xl font-semibold">{profile.avatarName}</p>
                        <p className="mt-2 text-sm text-white/72">{profile.archetype}</p>
                    </div>
                </article>

                <article className="panel p-5 sm:p-6">
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="panel-muted px-4 py-4">
                            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                Strength
                            </p>
                            <p className="mt-3 text-3xl font-semibold">{profile.strength}</p>
                        </div>
                        <div className="panel-muted px-4 py-4">
                            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                Mana
                            </p>
                            <p className="mt-3 text-3xl font-semibold">{profile.mana}</p>
                        </div>
                        <div className="panel-muted px-4 py-4">
                            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                Resilience
                            </p>
                            <p className="mt-3 text-3xl font-semibold">{profile.resilience}</p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <StatusPill tone="success">Level {profile.level}</StatusPill>
                        <StatusPill tone="accent">{profile.xp} XP</StatusPill>
                    </div>
                </article>
            </section>
        </div>
    );
}
