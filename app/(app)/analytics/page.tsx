import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import { SectionTabs } from '@/components/section-tabs';
import { Sparkline } from '@/components/sparkline';
import { StatusPill } from '@/components/status-pill';
import { Button } from '@/components/ui/button';
import { requireViewer } from '@/lib/vitalquest';

export default async function AnalyticsPage() {
    const viewer = await requireViewer();
    type ViewerMetric = (typeof viewer.metrics)[number];
    type ViewerExport = (typeof viewer.exports)[number];
    const xpTrend = viewer.metrics.map((metric: ViewerMetric) => metric.xpEarned);
    const sleep = viewer.metrics.map((metric: ViewerMetric) =>
        Number(metric.sleepHours.toFixed(1)),
    );
    const mood = viewer.metrics.map((metric: ViewerMetric) => metric.moodScore);
    const totalXp = viewer.metrics.reduce(
        (sum: number, metric: ViewerMetric) => sum + metric.xpEarned,
        0,
    );

    return (
        <div className="space-y-5">
            <SectionTabs
                items={[
                    { href: '/analytics', label: 'Dashboard' },
                    { href: '/analytics/reports', label: 'Reports' },
                ]}
            />

            <section className="panel p-5 sm:p-7">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="eyebrow">Progress and analytics</p>
                        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Clear signals across performance, recovery, and mood
                        </h2>
                        <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                            This dashboard translates synced and manual progress
                            into simple charts, milestone forecasts, and export
                            links suitable for coaching or portfolio review.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button asChild variant="outline">
                            <Link href="/api/export?format=csv&timeframe=7d">
                                <Download className="size-4" />
                                Export CSV
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href="/api/export?format=pdf&timeframe=30d">
                                <Download className="size-4" />
                                Export PDF summary
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="grid gap-5 lg:grid-cols-3">
                <article className="panel p-5 sm:p-6">
                    <p className="eyebrow">Weekly XP</p>
                    <p className="mt-4 text-4xl font-semibold">{totalXp}</p>
                    <Sparkline values={xpTrend} className="mt-4" />
                </article>
                <article className="panel p-5 sm:p-6">
                    <p className="eyebrow">Sleep stability</p>
                    <p className="mt-4 text-4xl font-semibold">
                        {sleep.at(-1)}h
                    </p>
                    <Sparkline values={sleep} className="mt-4" />
                </article>
                <article className="panel p-5 sm:p-6">
                    <p className="eyebrow">Mood score</p>
                    <p className="mt-4 text-4xl font-semibold">
                        {mood.at(-1)}
                    </p>
                    <Sparkline values={mood} className="mt-4" />
                </article>
            </section>

            <section className="grid gap-5 xl:grid-cols-[1fr_320px]">
                <div className="panel p-5 sm:p-6">
                    <p className="eyebrow">Recent snapshots</p>
                    <h3 className="mt-3 text-2xl font-semibold">
                        Last seven recorded entries
                    </h3>

                    <div className="mt-5 overflow-x-auto">
                        <table className="min-w-full text-left text-sm">
                            <thead className="text-muted-foreground">
                                <tr>
                                    <th className="pb-3 pr-6 font-medium">Date</th>
                                    <th className="pb-3 pr-6 font-medium">Steps</th>
                                    <th className="pb-3 pr-6 font-medium">Sleep</th>
                                    <th className="pb-3 pr-6 font-medium">Mindfulness</th>
                                    <th className="pb-3 pr-6 font-medium">XP</th>
                                </tr>
                            </thead>
                            <tbody>
                                {viewer.metrics.map((metric: ViewerMetric) => (
                                    <tr key={metric.id} className="border-t">
                                        <td className="py-4 pr-6">
                                            {new Intl.DateTimeFormat('en', {
                                                month: 'short',
                                                day: 'numeric',
                                            }).format(metric.capturedOn)}
                                        </td>
                                        <td className="py-4 pr-6">{metric.steps}</td>
                                        <td className="py-4 pr-6">
                                            {metric.sleepHours.toFixed(1)}h
                                        </td>
                                        <td className="py-4 pr-6">
                                            {metric.mindfulnessMinutes} min
                                        </td>
                                        <td className="py-4 pr-6">+{metric.xpEarned}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <aside className="space-y-5">
                    <section className="panel p-5 sm:p-6">
                        <p className="eyebrow">Forecast</p>
                        <h3 className="mt-3 text-2xl font-semibold">
                            Milestone guidance
                        </h3>
                        <div className="mt-5 space-y-3">
                            {[
                                'Maintain current pace to reach the next level in roughly 4 days.',
                                'Recovery signals suggest you should protect tonight’s sleep window.',
                                'One more verified walk closes the Forest Guardian quest.',
                            ].map((line) => (
                                <div
                                    key={line}
                                    className="rounded-2xl bg-muted/45 px-4 py-3 text-sm leading-6"
                                >
                                    {line}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="panel p-5 sm:p-6">
                        <p className="eyebrow">Recent exports</p>
                        <div className="mt-5 space-y-3">
                            {viewer.exports.length > 0 ? (
                                viewer.exports.map((record: ViewerExport) => (
                                    <div
                                        key={record.id}
                                        className="flex items-center justify-between rounded-2xl bg-muted/45 px-4 py-3"
                                    >
                                        <div>
                                            <p className="text-sm font-semibold uppercase">
                                                {record.format}
                                            </p>
                                            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                                {record.timeframe}
                                            </p>
                                        </div>
                                        <StatusPill tone="neutral">
                                            <ArrowUpRight className="size-3.5" />
                                        </StatusPill>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-muted-foreground">
                                    No exports yet.
                                </p>
                            )}
                        </div>
                    </section>
                </aside>
            </section>
        </div>
    );
}
