'use server';

import { revalidatePath } from 'next/cache';
import {
    ConnectionProvider,
    ConnectionStatus,
    QuestStatus,
    StoryStatus,
    SubscriptionTier,
    WellbeingCategory,
} from '@/app/generated/prisma/enums';
import { getPrisma } from '@/lib/prisma';
import { requireViewer } from '@/lib/vitalquest';

const appPaths = [
    '/dashboard',
    '/bio-sync',
    '/quests',
    '/story',
    '/community',
    '/analytics',
    '/profile',
    '/pricing',
];

function revalidateApp() {
    for (const path of appPaths) {
        revalidatePath(path);
    }
}

function parseNumber(value: FormDataEntryValue | null) {
    if (typeof value !== 'string' || value.trim() === '') {
        return null;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
}

async function unlockStoryIfNeeded(userId: number) {
    const prisma = getPrisma();
    const completedQuests = await prisma.userQuest.count({
        where: {
            userId,
            status: QuestStatus.COMPLETED,
        },
    });

    const availableChapter = await prisma.storyChapterProgress.findFirst({
        where: {
            userId,
            status: StoryStatus.AVAILABLE,
        },
        orderBy: {
            position: 'asc',
        },
    });

    if (availableChapter && completedQuests >= 3) {
        await prisma.storyChapterProgress.update({
            where: {
                id: availableChapter.id,
            },
            data: {
                status: StoryStatus.COMPLETED,
                completedAt: new Date(),
            },
        });

        const nextChapter = await prisma.storyChapterProgress.findFirst({
            where: {
                userId,
                position: {
                    gt: availableChapter.position,
                },
                status: StoryStatus.LOCKED,
            },
            orderBy: {
                position: 'asc',
            },
        });

        if (nextChapter) {
            await prisma.storyChapterProgress.update({
                where: {
                    id: nextChapter.id,
                },
                data: {
                    status: StoryStatus.AVAILABLE,
                },
            });
        }
    }
}

export async function updateProfileAction(formData: FormData) {
    const viewer = await requireViewer();
    const prisma = getPrisma();

    await prisma.userProfile.update({
        where: {
            userId: viewer.id,
        },
        data: {
            avatarName:
                (formData.get('avatarName') as string | null)?.trim() ||
                viewer.profile?.avatarName ||
                'Astra',
            archetype:
                (formData.get('archetype') as string | null)?.trim() ||
                viewer.profile?.archetype ||
                'Wayfinder',
            focusArea:
                (formData.get('focusArea') as string | null)?.trim() ||
                viewer.profile?.focusArea ||
                'Balanced wellbeing',
            primaryGoal:
                (formData.get('primaryGoal') as string | null)?.trim() ||
                viewer.profile?.primaryGoal ||
                'Build consistent daily habits',
            motivation:
                (formData.get('motivation') as string | null)?.trim() ||
                viewer.profile?.motivation ||
                'Unlock the next story chapter',
            age: parseNumber(formData.get('age')),
            weightKg: parseNumber(formData.get('weightKg')),
            sleepTarget: parseNumber(formData.get('sleepTarget')) ?? 8,
            hydrationGoal: parseNumber(formData.get('hydrationGoal')) ?? 2.5,
        },
    });

    revalidateApp();
}

export async function syncBioSyncAction(formData: FormData) {
    const provider = formData.get('provider');

    if (typeof provider !== 'string') {
        return;
    }

    const viewer = await requireViewer();
    const prisma = getPrisma();
    const providerEnum = provider as ConnectionProvider;
    const now = new Date();
    const steps = 7600 + now.getMinutes() * 8;
    const sleepHours = Number((7.1 + (now.getMinutes() % 5) * 0.18).toFixed(1));
    const heartRate = 64 + (now.getMinutes() % 8);
    const xpGain = 110;
    type ViewerQuest = (typeof viewer.quests)[number];

    const fitnessQuest = viewer.quests.find(
        (quest: ViewerQuest) =>
            quest.category === WellbeingCategory.FITNESS &&
            quest.status !== QuestStatus.COMPLETED,
    );
    const recoveryQuest = viewer.quests.find(
        (quest: ViewerQuest) =>
            quest.category === WellbeingCategory.RECOVERY &&
            quest.status !== QuestStatus.COMPLETED,
    );

    await prisma.$transaction(async (tx) => {
        await tx.wearableConnection.update({
            where: {
                userId_provider: {
                    userId: viewer.id,
                    provider: providerEnum,
                },
            },
            data: {
                status: ConnectionStatus.CONNECTED,
                lastSyncedAt: now,
                lastSyncSummary:
                    'Verified steps, recovery markers, and sleep from the latest Bio-Sync window.',
                steps,
                heartRate,
                sleepHours,
                syncAccuracy: 99,
            },
        });

        await tx.metricSnapshot.create({
            data: {
                userId: viewer.id,
                capturedOn: now,
                category: WellbeingCategory.FITNESS,
                steps,
                activeMinutes: 42,
                mindfulnessMinutes: 10,
                sleepHours,
                hydrationLiters: 2.2,
                nutritionScore: 78,
                moodScore: 81,
                xpEarned: xpGain,
            },
        });

        let bonusXp = xpGain;
        let bonusCoins = 0;

        if (fitnessQuest) {
            const isCompleted = steps >= fitnessQuest.targetValue;
            const nextValue = Math.max(fitnessQuest.currentValue, steps);

            await tx.userQuest.update({
                where: {
                    id: fitnessQuest.id,
                },
                data: {
                    currentValue: nextValue,
                    status: isCompleted
                        ? QuestStatus.COMPLETED
                        : QuestStatus.IN_PROGRESS,
                    completedAt: isCompleted ? now : null,
                },
            });

            if (isCompleted) {
                bonusXp += fitnessQuest.rewardXp;
                bonusCoins += fitnessQuest.rewardCoins;
            }
        }

        if (recoveryQuest && sleepHours >= 7.5) {
            const nextValue = Math.min(
                recoveryQuest.targetValue,
                recoveryQuest.currentValue + 1,
            );
            const isCompleted = nextValue >= recoveryQuest.targetValue;

            await tx.userQuest.update({
                where: {
                    id: recoveryQuest.id,
                },
                data: {
                    currentValue: nextValue,
                    status: isCompleted
                        ? QuestStatus.COMPLETED
                        : QuestStatus.IN_PROGRESS,
                    completedAt: isCompleted ? now : null,
                },
            });
        }

        await tx.userProfile.update({
            where: {
                userId: viewer.id,
            },
            data: {
                xp: {
                    increment: bonusXp,
                },
                coins: {
                    increment: bonusCoins + 18,
                },
                wellbeingScore: {
                    increment: 2,
                },
                strength: {
                    increment: 1,
                },
                mana: {
                    increment: 1,
                },
                streakDays: {
                    increment: 1,
                },
            },
        });

        const achievement = await tx.achievementProgress.findUnique({
            where: {
                userId_title: {
                    userId: viewer.id,
                    title: 'Verified Momentum',
                },
            },
        });

        if (achievement) {
            const nextProgress = Math.min(achievement.target, achievement.progress + 1);
            await tx.achievementProgress.update({
                where: {
                    userId_title: {
                        userId: viewer.id,
                        title: 'Verified Momentum',
                    },
                },
                data: {
                    progress: nextProgress,
                    unlocked: nextProgress >= achievement.target,
                    unlockedAt:
                        nextProgress >= achievement.target ? now : achievement.unlockedAt,
                },
            });
        }
    });

    await unlockStoryIfNeeded(viewer.id);
    revalidateApp();
}

export async function completeQuestAction(formData: FormData) {
    const questId = parseNumber(formData.get('questId'));

    if (!questId) {
        return;
    }

    const viewer = await requireViewer();
    const prisma = getPrisma();
    const quest = await prisma.userQuest.findFirst({
        where: {
            id: questId,
            userId: viewer.id,
        },
    });

    if (!quest || quest.status === QuestStatus.COMPLETED) {
        return;
    }

    await prisma.$transaction(async (tx) => {
        await tx.userQuest.update({
            where: {
                id: quest.id,
            },
            data: {
                currentValue: quest.targetValue,
                status: QuestStatus.COMPLETED,
                completedAt: new Date(),
            },
        });

        await tx.userProfile.update({
            where: {
                userId: viewer.id,
            },
            data: {
                xp: {
                    increment: quest.rewardXp,
                },
                coins: {
                    increment: quest.rewardCoins,
                },
                wellbeingScore: {
                    increment: quest.category === WellbeingCategory.NUTRITION ? 3 : 2,
                },
                mana: {
                    increment:
                        quest.category === WellbeingCategory.MINDFULNESS ? 2 : 1,
                },
                resilience: {
                    increment:
                        quest.category === WellbeingCategory.NUTRITION ? 2 : 1,
                },
            },
        });

        const cadence = await tx.achievementProgress.findUnique({
            where: {
                userId_title: {
                    userId: viewer.id,
                    title: 'Daily Cadence',
                },
            },
        });

        if (cadence) {
            const nextProgress = Math.min(cadence.target, cadence.progress + 1);
            await tx.achievementProgress.update({
                where: {
                    userId_title: {
                        userId: viewer.id,
                        title: 'Daily Cadence',
                    },
                },
                data: {
                    progress: nextProgress,
                    unlocked: nextProgress >= cadence.target,
                    unlockedAt:
                        nextProgress >= cadence.target
                            ? new Date()
                            : cadence.unlockedAt,
                },
            });
        }
    });

    await unlockStoryIfNeeded(viewer.id);
    revalidateApp();
}

export async function joinGuildAction(formData: FormData) {
    const guildId = parseNumber(formData.get('guildId'));

    if (!guildId) {
        return;
    }

    const viewer = await requireViewer();
    const prisma = getPrisma();
    const existingMembership = await prisma.guildMembership.findFirst({
        where: {
            userId: viewer.id,
            guildId,
        },
    });

    if (existingMembership) {
        return;
    }

    await prisma.$transaction(async (tx) => {
        await tx.guildMembership.create({
            data: {
                userId: viewer.id,
                guildId,
                contributionXp: 0,
            },
        });

        await tx.guild.update({
            where: {
                id: guildId,
            },
            data: {
                memberCount: {
                    increment: 1,
                },
            },
        });

        await tx.communityPost.create({
            data: {
                userId: viewer.id,
                guildId,
                content:
                    'Just joined this guild. Planning to focus on verified walks, sleep consistency, and one clean nutrition streak this week.',
                likes: 0,
            },
        });

        await tx.achievementProgress.update({
            where: {
                userId_title: {
                    userId: viewer.id,
                    title: 'Guild Ready',
                },
            },
            data: {
                progress: 1,
                unlocked: true,
                unlockedAt: new Date(),
            },
        });
    });

    revalidateApp();
}

export async function createCommunityPostAction(formData: FormData) {
    const content = (formData.get('content') as string | null)?.trim();
    const guildId = parseNumber(formData.get('guildId'));

    if (!content || !guildId) {
        return;
    }

    const viewer = await requireViewer();
    await getPrisma().communityPost.create({
        data: {
            userId: viewer.id,
            guildId,
            content,
            likes: 0,
        },
    });

    revalidateApp();
}

export async function updatePlanAction(formData: FormData) {
    const tier = formData.get('tier');

    if (typeof tier !== 'string') {
        return;
    }

    const viewer = await requireViewer();
    await getPrisma().user.update({
        where: {
            id: viewer.id,
        },
        data: {
            subscriptionTier:
                tier === SubscriptionTier.PRO
                    ? SubscriptionTier.PRO
                    : SubscriptionTier.FREE,
        },
    });

    revalidateApp();
}
