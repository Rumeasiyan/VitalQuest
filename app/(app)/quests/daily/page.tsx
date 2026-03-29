import { completeQuestAction } from '@/app/(app)/actions';
import { SectionTabs } from '@/components/section-tabs';
import { StatusPill } from '@/components/status-pill';
import { SubmitButton } from '@/components/submit-button';
import { getCategoryLabel, requireViewer } from '@/lib/vitalquest';

export default async function DailyQuestsPage() {
    const viewer = await requireViewer();
    const dailyQuests = viewer.quests.filter((quest) => quest.frequency === 'DAILY');

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
                <p className="eyebrow">Daily quests</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    The repeatable loop that builds retention
                </h2>
            </section>

            <section className="space-y-4">
                {dailyQuests.map((quest) => (
                    <article key={quest.id} className="panel p-5 sm:p-6">
                        <div className="flex flex-wrap gap-2">
                            <StatusPill tone="accent">{getCategoryLabel(quest.category)}</StatusPill>
                            <StatusPill tone="neutral">{quest.status}</StatusPill>
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold">{quest.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground">{quest.criteria}</p>
                        <form action={completeQuestAction} className="mt-5">
                            <input type="hidden" name="questId" value={quest.id} />
                            <SubmitButton
                                idleLabel={quest.status === 'COMPLETED' ? 'Completed' : 'Complete daily quest'}
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
