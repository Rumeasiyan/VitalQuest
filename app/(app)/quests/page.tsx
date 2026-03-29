import { completeQuestAction } from '@/app/(app)/actions';
import { SectionTabs } from '@/components/section-tabs';
import { StatusPill } from '@/components/status-pill';
import { SubmitButton } from '@/components/submit-button';
import { getCategoryLabel, requireViewer } from '@/lib/vitalquest';

const toneMap = {
    AVAILABLE: 'neutral',
    IN_PROGRESS: 'accent',
    COMPLETED: 'success',
    PARTIAL: 'warning',
} as const;

export default async function QuestsPage() {
    const viewer = await requireViewer();
    type ViewerQuest = (typeof viewer.quests)[number];
    const sections = [
        {
            label: 'Daily quests',
            quests: viewer.quests.filter(
                (quest: ViewerQuest) => quest.frequency === 'DAILY',
            ),
        },
        {
            label: 'Weekly quests',
            quests: viewer.quests.filter(
                (quest: ViewerQuest) => quest.frequency === 'WEEKLY',
            ),
        },
        {
            label: 'Seasonal quests',
            quests: viewer.quests.filter(
                (quest: ViewerQuest) => quest.frequency === 'SEASONAL',
            ),
        },
    ];

    return (
        <div className="space-y-5">
            <SectionTabs
                items={[
                    { href: '/quests', label: 'All quests' },
                    { href: '/quests/daily', label: 'Daily' },
                    { href: '/quests/weekly', label: 'Weekly' },
                ]}
            />

            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Quest system</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Daily structure with room for long-term arcs
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                    Each quest combines a narrative prompt, clear completion
                    criteria, and a specific reward payload so the system feels
                    like a product loop rather than a checklist.
                </p>
            </section>

            {sections.map(({ label, quests }) =>
                quests.length > 0 ? (
                    <section key={label} className="panel p-5 sm:p-6">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="eyebrow">{label}</p>
                                <h3 className="mt-3 text-2xl font-semibold">
                                    {quests.length} active missions
                                </h3>
                            </div>
                            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                                Rewards are distributed directly into level,
                                coins, and stat progression once the quest is
                                marked complete.
                            </p>
                        </div>

                        <div className="mt-6 space-y-4">
                            {quests.map((quest: ViewerQuest) => {
                                const progress = Math.min(
                                    100,
                                    Math.round(
                                        (quest.currentValue / quest.targetValue) * 100,
                                    ),
                                );

                                return (
                                    <article
                                        key={quest.id}
                                        className="rounded-[28px] border bg-muted/45 p-5 sm:p-6"
                                    >
                                        <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
                                            <div>
                                                <div className="flex flex-wrap gap-2">
                                                    <StatusPill tone="accent">
                                                        {getCategoryLabel(
                                                            quest.category,
                                                        )}
                                                    </StatusPill>
                                                    <StatusPill
                                                        tone={
                                                            toneMap[
                                                                quest.status as keyof typeof toneMap
                                                            ]
                                                        }
                                                    >
                                                        {quest.status}
                                                    </StatusPill>
                                                </div>
                                                <h4 className="mt-4 text-2xl font-semibold">
                                                    {quest.title}
                                                </h4>
                                                <p className="mt-3 text-base leading-7 text-muted-foreground">
                                                    {quest.narrative}
                                                </p>
                                                <div className="mt-4 rounded-[22px] bg-card p-4">
                                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                                                        Success criteria
                                                    </p>
                                                    <p className="mt-3 text-sm leading-6">
                                                        {quest.criteria}
                                                    </p>
                                                    <p className="mt-2 text-sm text-muted-foreground">
                                                        Verification: {quest.verificationMode}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="rounded-3xl bg-card p-5">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-muted-foreground">
                                                        Progress
                                                    </span>
                                                    <span className="font-semibold">
                                                        {progress}%
                                                    </span>
                                                </div>
                                                <div className="mt-3 h-3 rounded-full bg-muted">
                                                    <div
                                                        className="h-full rounded-full bg-primary"
                                                        style={{
                                                            width: `${Math.max(
                                                                6,
                                                                progress,
                                                            )}%`,
                                                        }}
                                                    />
                                                </div>
                                                <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                                                    <span>
                                                        {quest.currentValue} /{' '}
                                                        {quest.targetValue}
                                                    </span>
                                                    <span>
                                                        +{quest.rewardXp} XP /{' '}
                                                        {quest.rewardCoins} coins
                                                    </span>
                                                </div>

                                                <form
                                                    action={completeQuestAction}
                                                    className="mt-5"
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="questId"
                                                        value={quest.id}
                                                    />
                                                    <SubmitButton
                                                        idleLabel={
                                                            quest.status === 'COMPLETED'
                                                                ? 'Completed'
                                                                : 'Mark as complete'
                                                        }
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
                                );
                            })}
                        </div>
                    </section>
                ) : null,
            )}
        </div>
    );
}
