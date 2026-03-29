import { updateProfileAction } from '@/app/(app)/actions';
import { SubmitButton } from '@/components/submit-button';
import { requireViewer } from '@/lib/vitalquest';

export default async function ProfilePage() {
    const viewer = await requireViewer();
    const profile = viewer.profile!;

    return (
        <div className="space-y-5">
            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Profile setup</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Baseline information that shapes the experience
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                    This profile personalizes avatar identity, quest tone, and
                    guidance rules. It also satisfies the coursework requirement
                    for account setup and goal capture.
                </p>
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
                    <label className="space-y-2">
                        <span className="text-sm font-medium">Age</span>
                        <input
                            type="number"
                            name="age"
                            defaultValue={profile.age ?? ''}
                            className="w-full rounded-2xl border bg-card px-4 py-3 text-sm"
                        />
                    </label>
                    <label className="space-y-2">
                        <span className="text-sm font-medium">Weight (kg)</span>
                        <input
                            type="number"
                            name="weightKg"
                            defaultValue={profile.weightKg ?? ''}
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
                        <span className="text-sm font-medium">Primary goal</span>
                        <input
                            name="primaryGoal"
                            defaultValue={profile.primaryGoal}
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
                    <label className="space-y-2">
                        <span className="text-sm font-medium">
                            Sleep target (hours)
                        </span>
                        <input
                            type="number"
                            step="0.1"
                            name="sleepTarget"
                            defaultValue={profile.sleepTarget}
                            className="w-full rounded-2xl border bg-card px-4 py-3 text-sm"
                        />
                    </label>
                    <label className="space-y-2">
                        <span className="text-sm font-medium">
                            Hydration target (liters)
                        </span>
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
                    <SubmitButton
                        idleLabel="Save profile"
                        pendingLabel="Saving..."
                    />
                </div>
            </form>
        </div>
    );
}
