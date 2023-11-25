import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function waitForConnection() {
  await prisma.$connect();
}

export { prisma, waitForConnection };