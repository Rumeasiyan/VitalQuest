import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../app/generated/prisma/client';

type PrismaGlobal = {
    prisma?: PrismaClient;
};

const globalForPrisma = global as unknown as PrismaGlobal;

function createPrismaClient() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        throw new Error(
            'DATABASE_URL is required to use VitalQuest data features.',
        );
    }

    const adapter = new PrismaPg({
        connectionString,
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
