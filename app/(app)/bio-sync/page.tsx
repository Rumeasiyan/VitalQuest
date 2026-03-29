import { syncBioSyncAction } from '@/app/(app)/actions';
import { StatusPill } from '@/components/status-pill';
import { SubmitButton } from '@/components/submit-button';
import { formatProvider, requireViewer } from '@/lib/vitalquest';

export default async function BioSyncPage() {
    const viewer = await requireViewer();

    return (
        <div className="space-y-5">
            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Bio-Sync connections</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Trusted data is what makes the reward loop credible
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                    Wearable connections feed steps, heart rate, and sleep into
                    the progression engine so quest completion and leaderboard
                    positions reflect real effort instead of manual reporting.
                </p>
            </section>

            <section className="grid gap-5 xl:grid-cols-[1fr_320px]">
                <div className="space-y-4">
                    {viewer.connections.map((connection) => (
                        <article
                            key={connection.id}
                            className="panel p-5 sm:p-6"
                        >
                            <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
                                <div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <StatusPill
                                            tone={
                                                connection.status === 'CONNECTED'
                                                    ? 'success'
                                                    : connection.status === 'ERROR'
                                                      ? 'warning'
                                                      : 'neutral'
                                            }
                                        >
                                            {connection.status}
                                        </StatusPill>
                                        <StatusPill tone="accent">
                                            Accuracy {connection.syncAccuracy}%
                                        </StatusPill>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-semibold">
                                        {formatProvider(connection.provider)}
                                    </h3>
                                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                                        {connection.lastSyncSummary ??
                                            'Connect this provider to import sleep, heart rate, and movement data.'}
                                    </p>
                                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                        <div className="panel-muted px-4 py-4">
                                            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                                Steps
                                            </p>
                                            <p className="mt-3 text-2xl font-semibold">
                                                {connection.steps || 0}
                                            </p>
                                        </div>
                                        <div className="panel-muted px-4 py-4">
                                            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                                Heart rate
                                            </p>
                                            <p className="mt-3 text-2xl font-semibold">
                                                {connection.heartRate || '--'}
                                            </p>
                                        </div>
                                        <div className="panel-muted px-4 py-4">
                                            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                                Sleep
                                            </p>
                                            <p className="mt-3 text-2xl font-semibold">
                                                {connection.sleepHours || 0}h
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-[24px] bg-muted/55 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                                        Last sync
                                    </p>
                                    <p className="mt-3 text-sm leading-6">
                                        {connection.lastSyncedAt
                                            ? new Intl.DateTimeFormat('en', {
                                                  dateStyle: 'medium',
                                                  timeStyle: 'short',
                                              }).format(connection.lastSyncedAt)
                                            : 'No successful sync yet'}
                                    </p>
                                    <form
                                        action={syncBioSyncAction}
                                        className="mt-5"
                                    >
                                        <input
                                            type="hidden"
                                            name="provider"
                                            value={connection.provider}
                                        />
                                        <SubmitButton
                                            idleLabel={
                                                connection.status === 'CONNECTED'
                                                    ? 'Run sync now'
                                                    : 'Connect and sync'
                                            }
                                            pendingLabel="Syncing..."
                                            className="w-full"
                                        />
                                    </form>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <aside className="space-y-5">
                    <section className="panel p-5 sm:p-6">
                        <p className="eyebrow">Security posture</p>
                        <h3 className="mt-3 text-2xl font-semibold">
                            Designed for sensitive health signals
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                            <li>Encrypted transport and storage assumptions.</li>
                            <li>Clear sync summaries for transparency.</li>
                            <li>Anomaly detection mindset for anti-cheat logic.</li>
                            <li>Modular provider setup for future integrations.</li>
                        </ul>
                    </section>

                    <section className="panel p-5 sm:p-6">
                        <p className="eyebrow">Import coverage</p>
                        <div className="mt-5 space-y-4">
                            {[
                                ['Steps and movement', 'Verified'],
                                ['Sleep quality', 'Verified'],
                                ['Heart rate markers', 'Verified'],
                                ['Nutrition check-ins', 'Manual'],
                            ].map(([label, mode]) => (
                                <div
                                    key={label}
                                    className="flex items-center justify-between rounded-2xl bg-muted/55 px-4 py-3"
                                >
                                    <span className="font-medium">{label}</span>
                                    <StatusPill
                                        tone={mode === 'Verified' ? 'success' : 'neutral'}
                                    >
                                        {mode}
                                    </StatusPill>
                                </div>
                            ))}
                        </div>
                    </section>
                </aside>
            </section>
        </div>
    );
}
