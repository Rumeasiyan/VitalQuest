import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import {
    ConnectionProvider,
    ConnectionStatus,
    GuildRole,
    QuestFrequency,
    QuestStatus,
    StoryStatus,
    SubscriptionTier,
    WellbeingCategory,
} from '@/app/generated/prisma/enums';
import { getPrisma } from '@/lib/prisma';

const guildSeeds = [
    {
        slug: 'dawn-striders',
        name: 'Dawn Striders',
        tagline: 'Morning resets and sharp starts',
        description:
            'Students and early risers building calm, consistent momentum before the day gets noisy.',
        weeklyTargetXp: 1200,
    },
    {
        slug: 'pulse-forge',
        name: 'Pulse Forge',
        tagline: 'Cardio-first, pressure-free',
        description:
            'A guild for beginners chasing endurance, better sleep, and steady stamina instead of extremes.',
        weeklyTargetXp: 1480,
    },
    {
        slug: 'quiet-circuit',
        name: 'Quiet Circuit',
        tagline: 'Mindfulness, sleep, and focus',
        description:
            'Recovery-minded members who treat rest, reflection, and nutrition as real progression.',
        weeklyTargetXp: 980,
    },
];

const storySeeds = [
    {
        chapterKey: 'ember-harbor',
        title: 'Chapter I: Ember Harbor',
        sceneLabel: 'Warm-up arc',
        summary:
            'You arrive at a city powered by the daily rituals of its residents. Consistency restores the harbor lights.',
        unlockHint: 'Complete any two daily quests',
        rewardLabel: 'Unlocks the Harbor Quarter map',
        position: 1,
        status: StoryStatus.COMPLETED,
    },
    {
        chapterKey: 'glass-forest',
        title: 'Chapter II: The Glass Forest',
        sceneLabel: 'Balance arc',
        summary:
            'The forest responds to physical effort and rest in equal measure. Overtraining clouds the path.',
        unlockHint: 'Sync one wearable session and maintain a 3-day streak',
        rewardLabel: 'Wisdom Path side quest',
        position: 2,
        status: StoryStatus.AVAILABLE,
    },
    {
        chapterKey: 'moon-vault',
        title: 'Chapter III: Moon Vault',
        sceneLabel: 'Recovery arc',
        summary:
            'A vault beneath the city opens only when sleep, hydration, and calm are treated as strategic resources.',
        unlockHint: 'Reach wellbeing score 82',
        rewardLabel: 'Rare avatar mantle',
        position: 3,
        status: StoryStatus.LOCKED,
    },
];

const achievementSeeds = [
    {
        title: 'Daily Cadence',
        description: 'Complete 5 daily quests.',
        icon: 'Flame',
        progress: 3,
        target: 5,
        unlocked: false,
        unlockedAt: null,
    },
    {
        title: 'Verified Momentum',
        description: 'Sync Bio-Sync data 3 times in one week.',
        icon: 'ShieldCheck',
        progress: 1,
        target: 3,
        unlocked: false,
        unlockedAt: null,
    },
    {
        title: 'Guild Ready',
        description: 'Join your first guild challenge.',
        icon: 'Users',
        progress: 1,
        target: 1,
        unlocked: true,
        unlockedAt: new Date(Date.now() - 1000 * 60 * 60 * 18),
    },
];

function startOfToday() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
}

function daysFromNow(days: number) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}

function buildQuestSeeds(today = startOfToday()) {
    return [
        {
            title: 'Forest Guardian Walk',
            category: WellbeingCategory.FITNESS,
            frequency: QuestFrequency.DAILY,
            narrative:
                'Push through the lower ridge to relight the trail lanterns.',
            criteria: 'Reach 8,000 verified steps today.',
            verificationMode: 'Bio-Sync steps',
            targetValue: 8000,
            currentValue: 5200,
            rewardXp: 120,
            rewardCoins: 35,
            recommended: true,
            status: QuestStatus.IN_PROGRESS,
            dueAt: new Date(today.getTime() + 1000 * 60 * 60 * 22),
        },
        {
            title: 'Mana Refill',
            category: WellbeingCategory.MINDFULNESS,
            frequency: QuestFrequency.DAILY,
            narrative:
                'Pause at the observatory and reclaim focus before sunset.',
            criteria: 'Complete 12 minutes of mindfulness.',
            verificationMode: 'Guided check-in',
            targetValue: 12,
            currentValue: 6,
            rewardXp: 80,
            rewardCoins: 25,
            recommended: true,
            status: QuestStatus.IN_PROGRESS,
            dueAt: new Date(today.getTime() + 1000 * 60 * 60 * 22),
        },
        {
            title: 'Balanced Plate Protocol',
            category: WellbeingCategory.NUTRITION,
            frequency: QuestFrequency.DAILY,
            narrative:
                'Stabilize the camp kitchen with one well-balanced meal log.',
            criteria: 'Log 1 protein-forward, vegetable-rich meal.',
            verificationMode: 'Manual nutrition check-in',
            targetValue: 1,
            currentValue: 0,
            rewardXp: 70,
            rewardCoins: 20,
            recommended: false,
            status: QuestStatus.AVAILABLE,
            dueAt: new Date(today.getTime() + 1000 * 60 * 60 * 22),
        },
        {
            title: 'Seven-Day Harbor Run',
            category: WellbeingCategory.RECOVERY,
            frequency: QuestFrequency.WEEKLY,
            narrative:
                'Keep the harbor stable for a full week through sleep and hydration discipline.',
            criteria: 'Average 7.5 hours sleep and 2.3L hydration this week.',
            verificationMode: 'Bio-Sync + manual check-in',
            targetValue: 7,
            currentValue: 4,
            rewardXp: 260,
            rewardCoins: 90,
            recommended: false,
            status: QuestStatus.IN_PROGRESS,
            dueAt: daysFromNow(5),
        },
    ];
}

function buildMetricSeeds() {
    const base = startOfToday();
    return Array.from({ length: 7 }, (_, index) => {
        const capturedOn = new Date(base);
        capturedOn.setDate(base.getDate() - (6 - index));

        return {
            capturedOn,
            category:
                index % 3 === 0
                    ? WellbeingCategory.MINDFULNESS
                    : index % 2 === 0
                      ? WellbeingCategory.FITNESS
                      : WellbeingCategory.RECOVERY,
            steps: 5800 + index * 950,
            activeMinutes: 26 + index * 4,
            mindfulnessMinutes: 8 + (index % 4) * 3,
            sleepHours: 6.7 + index * 0.18,
            hydrationLiters: 1.6 + index * 0.14,
            nutritionScore: 64 + index * 3,
            moodScore: 68 + index * 2,
            xpEarned: 64 + index * 18,
        };
    });
}

const providerNames: Record<ConnectionProvider, string> = {
    [ConnectionProvider.APPLE_HEALTH]: 'Apple Health',
    [ConnectionProvider.GOOGLE_FIT]: 'Google Fit',
    [ConnectionProvider.FITBIT]: 'Fitbit',
    [ConnectionProvider.OURA]: 'Oura',
};

export function formatProvider(provider: ConnectionProvider) {
    return providerNames[provider];
}

export async function syncUserIdentity(input: {
    clerkId: string;
    email: string;
    name: string | null;
}) {
    const prisma = getPrisma();
    const existingByClerkId = await prisma.user.findUnique({
        where: { clerkId: input.clerkId },
    });

    if (existingByClerkId) {
        const existingByEmail = await prisma.user.findUnique({
            where: { email: input.email },
        });

        if (!existingByEmail || existingByEmail.id === existingByClerkId.id) {
            return prisma.user.update({
                where: { id: existingByClerkId.id },
                data: {
                    email: input.email,
                    name: input.name,
                },
            });
        }

        return prisma.user.update({
            where: { id: existingByClerkId.id },
            data: {
                name: input.name,
            },
        });
    }

    const existingByEmail = await prisma.user.findUnique({
        where: { email: input.email },
    });

    if (existingByEmail) {
        return prisma.user.update({
            where: { id: existingByEmail.id },
            data: {
                clerkId: input.clerkId,
                name: input.name,
            },
        });
    }

    return prisma.user.create({
        data: {
            clerkId: input.clerkId,
            email: input.email,
            name: input.name,
        },
    });
}

export async function requireViewer() {
    const clerkUser = await currentUser();

    if (!clerkUser) {
        redirect('/sign-in');
    }

    const email =
        clerkUser.primaryEmailAddress?.emailAddress ??
        clerkUser.emailAddresses[0]?.emailAddress;

    if (!email) {
        throw new Error('Authenticated Clerk user is missing an email address.');
    }

    const name =
        [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ') ||
        null;

    const user = await syncUserIdentity({
        clerkId: clerkUser.id,
        email,
        name,
    });

    await ensureWorkspace(user.id, user.name ?? undefined);

    return getPrisma().user.findUniqueOrThrow({
        where: { id: user.id },
        include: {
            profile: true,
            connections: {
                orderBy: {
                    provider: 'asc',
                },
            },
            quests: {
                orderBy: [{ recommended: 'desc' }, { dueAt: 'asc' }],
            },
            storyChapters: {
                orderBy: {
                    position: 'asc',
                },
            },
            guildMemberships: {
                include: {
                    guild: true,
                },
            },
            communityPosts: {
                include: {
                    guild: true,
                },
                orderBy: {
                    createdAt: 'desc',
                },
                take: 4,
            },
            metrics: {
                orderBy: {
                    capturedOn: 'asc',
                },
            },
            achievements: {
                orderBy: [{ unlocked: 'desc' }, { title: 'asc' }],
            },
            exports: {
                orderBy: {
                    exportedAt: 'desc',
                },
                take: 3,
            },
        },
    });
}

export async function getCommunityOverview() {
    const prisma = getPrisma();
    const [guilds, users, recentPosts] = await Promise.all([
        prisma.guild.findMany({
            include: {
                memberships: {
                    include: {
                        user: {
                            include: {
                                profile: true,
                            },
                        },
                    },
                    take: 5,
                },
            },
            orderBy: [{ memberCount: 'desc' }, { name: 'asc' }],
        }),
        prisma.user.findMany({
            include: {
                profile: true,
            },
        }),
        prisma.communityPost.findMany({
            include: {
                guild: true,
                user: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
            take: 6,
        }),
    ]);

    const leaderboard = users
        .sort((left, right) => {
            const wellbeingDelta =
                (right.profile?.wellbeingScore ?? 0) -
                (left.profile?.wellbeingScore ?? 0);

            if (wellbeingDelta !== 0) {
                return wellbeingDelta;
            }

            return (right.profile?.xp ?? 0) - (left.profile?.xp ?? 0);
        })
        .slice(0, 5);

    return { guilds, leaderboard, recentPosts };
}

export async function ensureWorkspace(userId: number, userName?: string) {
    const prisma = getPrisma();

    for (const guild of guildSeeds) {
        await prisma.guild.upsert({
            where: { slug: guild.slug },
            update: guild,
            create: guild,
        });
    }

    const [
        profile,
        connections,
        quests,
        metrics,
        chapters,
        memberships,
        achievements,
    ] = await Promise.all([
        prisma.userProfile.findUnique({ where: { userId } }),
        prisma.wearableConnection.findMany({ where: { userId } }),
        prisma.userQuest.findMany({ where: { userId } }),
        prisma.metricSnapshot.findMany({ where: { userId } }),
        prisma.storyChapterProgress.findMany({ where: { userId } }),
        prisma.guildMembership.findMany({ where: { userId } }),
        prisma.achievementProgress.findMany({ where: { userId } }),
    ]);

    if (!profile) {
        await prisma.userProfile.create({
            data: {
                userId,
                avatarName: userName?.split(' ')[0] || 'Astra',
            },
        });
    }

    if (connections.length === 0) {
        await prisma.wearableConnection.createMany({
            data: [
                {
                    userId,
                    provider: ConnectionProvider.APPLE_HEALTH,
                    status: ConnectionStatus.CONNECTED,
                    lastSyncedAt: new Date(Date.now() - 1000 * 60 * 70),
                    lastSyncSummary:
                        'Imported steps, resting heart rate, and sleep from the last 24 hours.',
                    steps: 8420,
                    heartRate: 68,
                    sleepHours: 7.6,
                    syncAccuracy: 99,
                },
                {
                    userId,
                    provider: ConnectionProvider.GOOGLE_FIT,
                    status: ConnectionStatus.DISCONNECTED,
                    syncAccuracy: 98,
                },
                {
                    userId,
                    provider: ConnectionProvider.FITBIT,
                    status: ConnectionStatus.DISCONNECTED,
                    syncAccuracy: 98,
                },
                {
                    userId,
                    provider: ConnectionProvider.OURA,
                    status: ConnectionStatus.DISCONNECTED,
                    syncAccuracy: 99,
                },
            ],
        });
    }

    if (metrics.length === 0) {
        await prisma.metricSnapshot.createMany({
            data: buildMetricSeeds().map((metric) => ({
                userId,
                ...metric,
            })),
        });
    }

    if (quests.length === 0) {
        await prisma.userQuest.createMany({
            data: buildQuestSeeds().map((quest) => ({
                userId,
                ...quest,
            })),
        });
    }

    if (chapters.length === 0) {
        await prisma.storyChapterProgress.createMany({
            data: storySeeds.map((chapter) => ({
                userId,
                ...chapter,
                completedAt:
                    chapter.status === StoryStatus.COMPLETED
                        ? new Date(Date.now() - 1000 * 60 * 60 * 24 * 2)
                        : null,
            })),
        });
    }

    if (memberships.length === 0) {
        const defaultGuild = await prisma.guild.findUniqueOrThrow({
            where: { slug: guildSeeds[0].slug },
        });

        await prisma.guildMembership.create({
            data: {
                userId,
                guildId: defaultGuild.id,
                role: GuildRole.MEMBER,
                contributionXp: 240,
            },
        });

        await prisma.guild.update({
            where: { id: defaultGuild.id },
            data: {
                memberCount: {
                    increment: 1,
                },
            },
        });

        const existingPosts = await prisma.communityPost.count({
            where: { userId },
        });

        if (existingPosts === 0) {
            await prisma.communityPost.createMany({
                data: [
                    {
                        userId,
                        guildId: defaultGuild.id,
                        content:
                            'Joined Dawn Striders. Target for this week: keep my sleep above 7.5h and close the Forest Guardian walk.',
                        likes: 7,
                    },
                    {
                        userId,
                        guildId: defaultGuild.id,
                        content:
                            'Bio-Sync finally stopped feeling like admin work. Seeing verified XP land instantly is a much better loop.',
                        likes: 12,
                    },
                ],
            });
        }
    }

    if (achievements.length === 0) {
        await prisma.achievementProgress.createMany({
            data: achievementSeeds.map((achievement) => ({
                userId,
                ...achievement,
            })),
        });
    }
}

export async function recordExport(userId: number, format: string, timeframe: string) {
    return getPrisma().reportExport.create({
        data: {
            userId,
            format,
            timeframe,
        },
    });
}

export function calculateLevelProgress(xp: number) {
    return ((xp % 250) / 250) * 100;
}

export function getCategoryLabel(category: WellbeingCategory) {
    switch (category) {
        case WellbeingCategory.FITNESS:
            return 'Fitness';
        case WellbeingCategory.NUTRITION:
            return 'Nutrition';
        case WellbeingCategory.MINDFULNESS:
            return 'Mindfulness';
        case WellbeingCategory.RECOVERY:
            return 'Recovery';
        default:
            return 'General';
    }
}

export function getQuestStatusTone(status: QuestStatus) {
    switch (status) {
        case QuestStatus.COMPLETED:
            return 'complete';
        case QuestStatus.IN_PROGRESS:
            return 'progress';
        case QuestStatus.PARTIAL:
            return 'partial';
        default:
            return 'idle';
    }
}

export function getTierLabel(tier: SubscriptionTier) {
    return tier === SubscriptionTier.PRO ? 'Pro' : 'Free';
}
