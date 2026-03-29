import { updateProfileAction } from '@/app/(app)/actions';
import { SectionTabs } from '@/components/section-tabs';
import { SubmitButton } from '@/components/submit-button';
import { requireViewer } from '@/lib/vitalquest';

export default async function ProfileGoalsPage() {
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
                <p className="eyebrow">Goals and preferences</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Tune the targets that shape quests and recovery guidance
                </h2>
            </section>

            <form action={updateProfileAction} className="panel p-5 sm:p-6">
                <div className="grid gap-5 md:grid-cols-2">
                    <label className="space-y-2 md:col-span-2">
                        <span className="text-sm font-medium">Primary goal</span>
                        <input
                            name="primaryGoal"
                            defaultValue={profile.primaryGoal}
                            className="w-full rounded-2xl border bg-card px-4 py-3 text-sm"
                        />
                    </label>
                    <label className="space-y-2 md:col-span-2">
                        <span className="text-sm font-medium">Focus area</span>
                        <input
                            name="focusArea"
                            defaultValue={profile.focusArea}
                            className="w-full rounded-2xl border bg-card px-4 py-3 text-sm"
                        />
                    </label>
                    <label className="space-y-2">
                        <span className="text-sm font-medium">Sleep target</span>
                        <input
                            type="number"
                            step="0.1"
                            name="sleepTarget"
                            defaultValue={profile.sleepTarget}
                            className="w-full rounded-2xl border bg-card px-4 py-3 text-sm"
                        />
                    </label>
                    <label className="space-y-2">
                        <span className="text-sm font-medium">Hydration target</span>
                        <input
                            type="number"
                            step="0.1"
                            name="hydrationGoal"
                            defaultValue={profile.hydrationGoal}
                            className="w-full rounded-2xl border bg-card px-4 py-3 text-sm"
                        />
                    </label>
                </div>
                <div className="mt-6">
                    <SubmitButton idleLabel="Save goals" pendingLabel="Saving..." />
                </div>
            </form>
        </div>
    );
}
