import { updatePlanAction } from '@/app/(app)/actions';
import { StatusPill } from '@/components/status-pill';
import { SubmitButton } from '@/components/submit-button';
import { requireViewer } from '@/lib/vitalquest';

const plans = [
    {
        title: 'Free',
        value: '$0',
        tier: 'FREE',
        features: [
            'Core dashboard and quest loop',
            'One active Bio-Sync provider',
            'Guild participation',
            'CSV export',
        ],
    },
    {
        title: 'Pro',
        value: '$14',
        tier: 'PRO',
        features: [
            'Advanced story arcs and premium quests',
            'Multiple provider connections',
            'Deeper analytics and forecast cards',
            'Coach-ready PDF summaries',
        ],
    },
];

export default async function PricingPage() {
    const viewer = await requireViewer();

    return (
        <div className="space-y-5">
            <section className="panel p-5 sm:p-7">
                <p className="eyebrow">Monetization model</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Freemium access with deeper progression on Pro
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                    The free tier stays genuinely useful, while Pro deepens
                    narrative progression, analytics, and premium quest packs
                    without breaking the core loop.
                </p>
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
                {plans.map((plan) => {
                    const active = viewer.subscriptionTier === plan.tier;

                    return (
                        <article
                            key={plan.title}
                            className={`panel p-6 sm:p-7 ${active ? 'border-primary' : ''}`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="eyebrow">{plan.title} tier</p>
                                    <h3 className="mt-3 text-3xl font-semibold">
                                        {plan.value}
                                        <span className="ml-2 text-base font-medium text-muted-foreground">
                                            / month
                                        </span>
                                    </h3>
                                </div>
                                {active ? (
                                    <StatusPill tone="success">Current plan</StatusPill>
                                ) : null}
                            </div>

                            <div className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
                                {plan.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="rounded-2xl bg-muted/45 px-4 py-3"
                                    >
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <form action={updatePlanAction} className="mt-6">
                                <input type="hidden" name="tier" value={plan.tier} />
                                <SubmitButton
                                    idleLabel={
                                        active
                                            ? 'Plan already active'
                                            : `Switch to ${plan.title}`
                                    }
                                    pendingLabel="Updating..."
                                    className="w-full"
                                    disabled={active}
                                />
                            </form>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}
