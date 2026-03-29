import { currentUser } from '@clerk/nextjs/server';
import { getPrisma } from '@/lib/prisma';

export async function syncClerkUser() {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    const email =
        user.primaryEmailAddress?.emailAddress ??
        user.emailAddresses[0]?.emailAddress;

    if (!email) {
        throw new Error('Authenticated Clerk user is missing an email address.');
    }

    const name =
        [user.firstName, user.lastName].filter(Boolean).join(' ') || null;

    return getPrisma().user.upsert({
        where: { clerkId: user.id },
        update: {
            email,
            name,
        },
        create: {
            clerkId: user.id,
            email,
            name,
        },
    });
}
