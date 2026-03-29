import { updateProfileAction } from '@/app/(app)/actions';
import { SectionTabs } from '@/components/section-tabs';
import { SubmitButton } from '@/components/submit-button';
import { requireViewer } from '@/lib/vitalquest';

export default async function OnboardingProfilePage() {
    const viewer = await requireViewer();
    const profile = viewer.profile!;

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
                <p className="eyebrow">Step 1</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Define the avatar, goal, and baseline routine
                </h2>
            </section>

            <form action={updateProfileAction} className="panel p-5 sm:p-6">
                <div className="grid gap-5 md:grid-cols-2">
                    <label className="space-y-2">
                        <span className="text-sm font-medium">Avatar name</span>
                        <input
                            name="avatarName"
                            defaultValue={profile.avatarName}
                            className="w-full rounded-2xl border bg-card px-4 py-3 text-sm"
                        />
                    </label>
                    <label className="space-y-2">
                        <span className="text-sm font-medium">Archetype</span>
                        <input
                            name="archetype"
                            defaultValue={profile.archetype}
                            className="w-full rounded-2xl border bg-card px-4 py-3 text-sm"
                        />
                    </label>
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
                    <label className="space-y-2 md:col-span-2">
                        <span className="text-sm font-medium">Motivation</span>
                        <textarea
                            name="motivation"
                            defaultValue={profile.motivation}
                            rows={4}
                            className="w-full rounded-2xl border bg-card px-4 py-3 text-sm"
                        />
                    </label>
                </div>
                <div className="mt-6">
                    <SubmitButton idleLabel="Save and continue" pendingLabel="Saving..." />
                </div>
            </form>
        </div>
    );
}
