import Link from 'next/link';
import { SectionTabs } from '@/components/section-tabs';
import { StatusPill } from '@/components/status-pill';
import { Button } from '@/components/ui/button';
import { formatProvider, requireViewer } from '@/lib/vitalquest';

export default async function OnboardingBioSyncPage() {
    const viewer = await requireViewer();
    type ViewerConnection = (typeof viewer.connections)[number];

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
                <p className="eyebrow">Step 2</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Connect one provider and validate the trust loop
                </h2>
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
                {viewer.connections.map((connection: ViewerConnection) => (
                    <article key={connection.id} className="panel p-5 sm:p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-semibold">
                                {formatProvider(connection.provider)}
                            </h3>
                            <StatusPill
                                tone={
                                    connection.status === 'CONNECTED'
                                        ? 'success'
                                        : 'neutral'
                                }
                            >
                                {connection.status}
                            </StatusPill>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground">
                            {connection.lastSyncSummary ??
                                'This provider can be connected from the Bio-Sync area and will import verified wellness signals.'}
                        </p>
                    </article>
                ))}
            </section>

            <Button asChild>
                <Link href="/bio-sync">Open Bio-Sync manager</Link>
            </Button>
        </div>
    );
}
