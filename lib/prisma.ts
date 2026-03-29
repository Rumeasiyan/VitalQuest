import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../app/generated/prisma/client';

type PrismaGlobal = {
    prisma?: PrismaClient;
};

const globalForPrisma = global as unknown as PrismaGlobal;

function normalizeConnectionString(connectionString: string) {
    try {
        const url = new URL(connectionString);
        const sslMode = url.searchParams.get('sslmode');
        const useLibpqCompat = url.searchParams.get('uselibpqcompat');

        if (
            sslMode &&
            ['prefer', 'require', 'verify-ca'].includes(sslMode) &&
            !useLibpqCompat
        ) {
            // Preserve the stricter behavior pg currently applies and silence the
            // deprecation warning emitted for ambiguous sslmode aliases.
            url.searchParams.set('sslmode', 'verify-full');
        }

        return url.toString();
    } catch {
        return connectionString;
    }
}

function createPrismaClient() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        throw new Error(
            'DATABASE_URL is required to use VitalQuest data features.',
        );
    }

    const adapter = new PrismaPg({
        connectionString: normalizeConnectionString(connectionString),
    });

    return new PrismaClient({
        adapter,
    });
}

export function getPrisma() {
    if (!globalForPrisma.prisma) {
        globalForPrisma.prisma = createPrismaClient();
    }

    return globalForPrisma.prisma;
}
