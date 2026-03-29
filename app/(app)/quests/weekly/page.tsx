import { completeQuestAction } from '@/app/(app)/actions';
import { SectionTabs } from '@/components/section-tabs';
import { StatusPill } from '@/components/status-pill';
import { SubmitButton } from '@/components/submit-button';
import { requireViewer } from '@/lib/vitalquest';

export default async function WeeklyQuestsPage() {
    const viewer = await requireViewer();
    const weeklyQuests = viewer.quests.filter((quest) => quest.frequency === 'WEEKLY');

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
                <p className="eyebrow">Weekly quests</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Longer arcs that reinforce sustainable behaviour
                </h2>
            </section>

            <section className="space-y-4">
                {weeklyQuests.map((quest) => (
                    <article key={quest.id} className="panel p-5 sm:p-6">
                        <div className="flex flex-wrap gap-2">
                            <StatusPill tone="accent">{quest.frequency}</StatusPill>
                            <StatusPill tone="neutral">{quest.status}</StatusPill>
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold">{quest.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground">{quest.narrative}</p>
                        <p className="mt-3 text-sm font-medium">{quest.criteria}</p>
                        <form action={completeQuestAction} className="mt-5">
                            <input type="hidden" name="questId" value={quest.id} />
                            <SubmitButton
                                idleLabel={quest.status === 'COMPLETED' ? 'Completed' : 'Complete weekly quest'}
                                pendingLabel="Saving..."
                                disabled={quest.status === 'COMPLETED'}
                            />
                        </form>
                    </article>
                ))}
            </section>
        </div>
    );
}
