import { BookMarked } from 'lucide-react';
import { StatusPill } from '@/components/status-pill';
import { requireViewer } from '@/lib/vitalquest';

export default async function StoryPage() {
    const viewer = await requireViewer();
    type ViewerChapter = (typeof viewer.storyChapters)[number];

    return (
        <div className="space-y-5">
            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Narrative progression</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Health behaviour should unlock meaning, not just charts
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                    Chapters respond to progress consistency. Recovery, verified
                    activity, and balanced routines alter what becomes available
                    next inside the VitalQuest world.
                </p>
            </section>

            <section className="panel p-5 sm:p-6">
                <div className="space-y-4">
                    {viewer.storyChapters.map((chapter: ViewerChapter) => (
                        <article
                            key={chapter.id}
                            className="rounded-[28px] border bg-muted/45 p-5 sm:p-6"
                        >
                            <div className="grid gap-5 lg:grid-cols-[120px_minmax(0,1fr)_280px] lg:items-start">
                                <div className="rounded-3xl bg-card px-4 py-5 text-center">
                                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                                        Chapter
                                    </p>
                                    <p className="mt-3 text-3xl font-semibold">
                                        {chapter.position}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2">
                                        <StatusPill
                                            tone={
                                                chapter.status === 'COMPLETED'
                                                    ? 'success'
                                                    : chapter.status === 'AVAILABLE'
                                                      ? 'accent'
                                                      : 'neutral'
                                            }
                                        >
                                            {chapter.status}
                                        </StatusPill>
                                        <StatusPill tone="neutral">
                                            {chapter.sceneLabel}
                                        </StatusPill>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-semibold">
                                        {chapter.title}
                                    </h3>
                                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                                        {chapter.summary}
                                    </p>
                                </div>

                                <div className="rounded-3xl bg-card p-5">
                                    <BookMarked className="size-5 text-primary" />
                                    <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                                        Unlock condition
                                    </p>
                                    <p className="mt-3 text-sm leading-6">
                                        {chapter.unlockHint}
                                    </p>
                                    <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                                        Reward
                                    </p>
                                    <p className="mt-3 text-sm leading-6">
                                        {chapter.rewardLabel}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
