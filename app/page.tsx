import Link from 'next/link';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import {
    ArrowRight,
    ChartColumn,
    ShieldCheck,
    Sparkles,
    UsersRound,
} from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { Button } from '@/components/ui/button';

const featureCards = [
    {
        title: 'Verified quests',
        description:
            'Bio-Sync turns steps, sleep, and recovery markers into real XP instead of self-reported checkboxes.',
        metric: '99%',
    },
    {
        title: 'Holistic scoring',
        description:
            'Physical effort, nutrition, and mindfulness affect different avatar stats so progress stays balanced.',
        metric: '4 pillars',
    },
    {
        title: 'Narrative retention',
        description:
            'Daily actions unlock chapters, side paths, and story rewards that keep motivation emotionally meaningful.',
        metric: '12 arcs',
    },
];

const capabilityCards = [
    {
        icon: ShieldCheck,
        title: 'Bio-Sync integrity',
        copy: 'Encrypted wearable connections, anomaly checks, and transparent sync summaries build trust into progression.',
    },
    {
        icon: Sparkles,
        title: 'Quest design',
        copy: 'Daily and weekly quests blend exercise, nutrition, mindfulness, and recovery without overwhelming beginners.',
    },
    {
        icon: UsersRound,
        title: 'Guild accountability',
        copy: 'Leaderboards, guild challenges, and social updates create momentum without turning the product into a noisy feed.',
    },
    {
        icon: ChartColumn,
        title: 'Actionable analytics',
        copy: 'Progress histories, milestone forecasts, and exportable reports make gains visible to users and coaches.',
    },
];

const stats = [
    {
        value: '87%',
        label: 'Users who maintain momentum when activity is automatically verified.',
        tone: 'bg-primary text-primary-foreground',
    },
    {
        value: '7.5h',
        label: 'Average sleep target used to unlock recovery-focused story paths.',
        tone: 'bg-card text-card-foreground',
    },
    {
        value: '3 loops',
        label: 'Fitness, nutrition, and mindfulness tied together inside one progression model.',
        tone: 'bg-card text-card-foreground',
    },
    {
        value: 'CSV/PDF',
        label: 'Progress exports ready for coaches, accountability groups, or coursework demos.',
        tone: 'bg-card text-card-foreground',
    },
];

export default async function Home() {
    const user = await currentUser();

    if (user) {
        redirect('/dashboard');
    }

    return (
        <main className="pb-8">
            <section className="bg-primary text-primary-foreground">
                <div className="page-shell py-5">
                    <header className="flex flex-col gap-4 border-b border-white/10 py-4 lg:flex-row lg:items-center lg:justify-between">
                        <BrandLogo theme="dark" />

                        <nav className="flex flex-wrap items-center gap-3 text-sm text-white/78">
                            <a href="#platform" className="hover:text-white">
                                Platform
                            </a>
                            <a href="#features" className="hover:text-white">
                                Features
                            </a>
                            <a href="#impact" className="hover:text-white">
                                Impact
                            </a>
                        </nav>

                        <div className="flex items-center gap-3">
                            <Button
                                asChild
                                variant="outline"
                                className="border-white/20 bg-white text-primary hover:bg-white/90"
                            >
                                <Link href="/sign-in">Sign in</Link>
                            </Button>
                            <Button
                                asChild
                                className="bg-accent text-accent-foreground hover:bg-accent/90"
                            >
                                <Link href="/sign-up">Sign up</Link>
                            </Button>
                        </div>
                    </header>

                    <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_34rem] lg:items-center lg:py-16">
                        <div className="max-w-2xl">
                            <p className="eyebrow text-white/70">
                                Verified wellness for long-term retention
                            </p>
                            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                                Meet your healthier self through quests, not
                                chores.
                            </h1>
                            <p className="mt-6 max-w-xl text-lg leading-8 text-white/74">
                                VitalQuest turns wearable-backed activity,
                                nutrition, and mindfulness into avatar
                                progression, story unlocks, guild momentum, and
                                clear analytics.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                                >
                                    <Link href="/sign-up">
                                        Enter the platform
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-white/18 bg-transparent text-white hover:bg-white/8"
                                >
                                    <a href="#platform">Explore the model</a>
                                </Button>
                            </div>

                            <div className="mt-12 grid max-w-xl gap-5 sm:grid-cols-3">
                                <div>
                                    <p className="text-3xl font-semibold">
                                        +92%
                                    </p>
                                    <p className="mt-2 text-sm text-white/70">
                                        More believable progress through
                                        wearable verification.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-3xl font-semibold">
                                        24/7
                                    </p>
                                    <p className="mt-2 text-sm text-white/70">
                                        Dashboard visibility across fitness,
                                        recovery, and focus.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-3xl font-semibold">
                                        1 feed
                                    </p>
                                    <p className="mt-2 text-sm text-white/70">
                                        One place for quests, guilds, and
                                        progress analytics.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="panel overflow-hidden border-white/10 bg-white/8 text-white shadow-lg backdrop-blur">
                            <div className="grid gap-4 p-5 sm:p-6">
                                <div className="rounded-[26px] bg-white/8 p-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                                                Bio-Sync overview
                                            </p>
                                            <h2 className="mt-3 text-3xl font-semibold">
                                                8,420 verified steps
                                            </h2>
                                        </div>
                                        <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                                            +120 XP
                                        </span>
                                    </div>
                                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                        <div className="rounded-2xl bg-white/10 p-4">
                                            <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                                                Strength
                                            </p>
                                            <p className="mt-3 text-2xl font-semibold">
                                                12
                                            </p>
                                        </div>
                                        <div className="rounded-2xl bg-white/10 p-4">
                                            <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                                                Mana
                                            </p>
                                            <p className="mt-3 text-2xl font-semibold">
                                                15
                                            </p>
                                        </div>
                                        <div className="rounded-2xl bg-white/10 p-4">
                                            <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                                                Sleep
                                            </p>
                                            <p className="mt-3 text-2xl font-semibold">
                                                7.6h
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                                    <div className="rounded-[26px] bg-card p-5 text-card-foreground">
                                        <p className="text-sm font-semibold">
                                            Today&apos;s recommended quest
                                        </p>
                                        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                                            Forest Guardian Walk
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                            Reach 8,000 verified steps to relight
                                            the lower ridge trail and open the
                                            next story checkpoint.
                                        </p>
                                        <div className="mt-5 h-3 rounded-full bg-muted">
                                            <div className="h-full w-[72%] rounded-full bg-primary" />
                                        </div>
                                        <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                                            <span>5,760 / 8,000</span>
                                            <span>72%</span>
                                        </div>
                                    </div>

                                    <div className="rounded-[26px] bg-accent p-5 text-accent-foreground">
                                        <p className="text-xs font-semibold uppercase tracking-[0.26em]">
                                            Guild pulse
                                        </p>
                                        <h3 className="mt-3 text-2xl font-semibold">
                                            Dawn Striders
                                        </h3>
                                        <p className="mt-3 text-sm leading-6">
                                            18 members are currently pushing the
                                            weekly harbor reset challenge.
                                        </p>
                                        <div className="mt-5 flex -space-x-2">
                                            {[0, 1, 2, 3].map((avatar) => (
                                                <span
                                                    key={avatar}
                                                    className="flex size-10 items-center justify-center rounded-full border border-primary bg-primary text-sm font-semibold text-primary-foreground"
                                                >
                                                    {String.fromCharCode(65 + avatar)}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-shell py-8 sm:py-10">
                <div className="rounded-[28px] border bg-card px-5 py-4 text-sm text-muted-foreground shadow-sm sm:px-8">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                        {['Wearable-ready', 'Guild-led', 'Story-first', 'Coach-friendly', 'Exportable', 'Beginner-safe'].map(
                            (item) => (
                                <span
                                    key={item}
                                    className="text-center text-sm font-medium tracking-[0.18em] uppercase"
                                >
                                    {item}
                                </span>
                            ),
                        )}
                    </div>
                </div>
            </section>

            <section id="platform" className="page-shell py-14 sm:py-18">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="eyebrow">Platform model</p>
                    <h2 className="section-title mt-4">
                        Built for the future of habit-driven wellbeing
                    </h2>
                    <p className="section-copy mx-auto mt-5">
                        The system is structured around verified progress,
                        adaptive quests, narrative retention, and community
                        accountability, so motivation does not collapse after
                        the first few weeks.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {featureCards.map((card) => (
                        <article
                            key={card.title}
                            className="panel overflow-hidden p-6 sm:p-7"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="eyebrow">Core differentiator</p>
                                    <h3 className="mt-4 text-2xl font-semibold">
                                        {card.title}
                                    </h3>
                                </div>
                                <span className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                                    {card.metric}
                                </span>
                            </div>
                            <p className="mt-5 text-base leading-7 text-muted-foreground">
                                {card.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="features" className="bg-card py-16 sm:py-20">
                <div className="page-shell">
                    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                        <div>
                            <p className="eyebrow">Functional coverage</p>
                            <h2 className="section-title mt-4">
                                A full system, not a single-purpose tracker
                            </h2>
                        </div>
                        <p className="section-copy">
                            VitalQuest is structured as a real product MVP:
                            onboarding, profile setup, wearable sync, quests,
                            story progression, guild participation, analytics,
                            exports, and premium upgrades all sit inside one
                            deployable experience.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-0 overflow-hidden rounded-[32px] border sm:grid-cols-2">
                        {capabilityCards.map(({ icon: Icon, title, copy }) => (
                            <article
                                key={title}
                                className="border-b p-6 last:border-b-0 sm:border-r sm:last:border-r-0 [&:nth-last-child(-n+2)]:sm:border-b-0"
                            >
                                <Icon className="size-6 text-primary" />
                                <h3 className="mt-5 text-2xl font-semibold">
                                    {title}
                                </h3>
                                <p className="mt-4 text-base leading-7 text-muted-foreground">
                                    {copy}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="impact" className="page-shell py-16 sm:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="eyebrow">Impact in action</p>
                    <h2 className="section-title mt-4">
                        Progress is easier to trust when the loop is visible
                    </h2>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                    {stats.map((stat) => (
                        <article
                            key={stat.value}
                            className={`panel min-h-56 p-6 sm:p-8 ${stat.tone}`}
                        >
                            <p className="text-5xl font-semibold tracking-tight sm:text-6xl">
                                {stat.value}
                            </p>
                            <p className="mt-10 max-w-md text-lg leading-8 opacity-80">
                                {stat.label}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-primary py-16 text-primary-foreground sm:py-20">
                <div className="page-shell">
                    <div className="grid gap-8 rounded-[36px] border border-white/10 px-6 py-8 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <p className="eyebrow text-white/72">
                                Let&apos;s build momentum
                            </p>
                            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                                Ready to turn real-world wellbeing into visible
                                progression?
                            </h2>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-white/18 bg-transparent text-white hover:bg-white/8"
                            >
                                <Link href="/sign-in">See the dashboard</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                className="bg-accent text-accent-foreground hover:bg-accent/90"
                            >
                                <Link href="/sign-up">
                                    Get started
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <footer className="mt-10 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1fr_0.9fr]">
                        <div>
                            <p className="text-6xl font-semibold tracking-tight sm:text-8xl">
                                VitalQuest
                            </p>
                            <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                                Designed for students, professionals, and
                                beginners who want a stronger habit loop than
                                traditional wellness dashboards provide.
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-3">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                    Product
                                </p>
                                <div className="mt-4 space-y-3 text-sm text-white/72">
                                    <p>Dashboard</p>
                                    <p>Bio-Sync</p>
                                    <p>Quests</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                    Experience
                                </p>
                                <div className="mt-4 space-y-3 text-sm text-white/72">
                                    <p>Story arcs</p>
                                    <p>Guilds</p>
                                    <p>Analytics exports</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                                    Access
                                </p>
                                <div className="mt-4 space-y-3 text-sm text-white/72">
                                    <Link href="/sign-in" className="block hover:text-white">
                                        Sign in
                                    </Link>
                                    <Link href="/sign-up" className="block hover:text-white">
                                        Create account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </main>
    );
}
