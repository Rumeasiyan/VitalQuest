import { SectionTabs } from '@/components/section-tabs';
import { formatProvider, requireViewer } from '@/lib/vitalquest';

export default async function BioSyncHistoryPage() {
    const viewer = await requireViewer();

    return (
        <div className="space-y-5">
            <SectionTabs
                items={[
                    { href: '/bio-sync', label: 'Connections' },
                    { href: '/bio-sync/history', label: 'Sync history' },
                ]}
            />

            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Sync history</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Audit trail of imported progress
                </h2>
            </section>

            <section className="panel p-5 sm:p-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                        <thead className="text-muted-foreground">
                            <tr>
                                <th className="pb-3 pr-6 font-medium">Provider</th>
                                <th className="pb-3 pr-6 font-medium">Status</th>
                                <th className="pb-3 pr-6 font-medium">Last synced</th>
                                <th className="pb-3 pr-6 font-medium">Steps</th>
                                <th className="pb-3 pr-6 font-medium">Sleep</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewer.connections.map((connection) => (
                                <tr key={connection.id} className="border-t">
                                    <td className="py-4 pr-6">{formatProvider(connection.provider)}</td>
                                    <td className="py-4 pr-6">{connection.status}</td>
                                    <td className="py-4 pr-6">
                                        {connection.lastSyncedAt
                                            ? new Intl.DateTimeFormat('en', {
                                                  dateStyle: 'medium',
                                                  timeStyle: 'short',
                                              }).format(connection.lastSyncedAt)
                                            : 'Not yet'}
                                    </td>
                                    <td className="py-4 pr-6">{connection.steps}</td>
                                    <td className="py-4 pr-6">{connection.sleepHours}h</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
