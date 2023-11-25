import { PrismaClient } from "@prisma/client";

const prisma = global.prismadb || new PrismaClient();
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

// Add logging for the Prisma connection
(async () => {
    try {
        console.log("Connecting to the database...");

        // This line ensures that PrismaClient is connected to the database
        await prisma.$connect();

        console.log("Connected to the database!");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit the process if the connection fails
    }
})();

async function waitForConnection() {
    await prisma.$connect();
  }

if (process.env.NODE_ENV === "production") global.prismadb = prisma;

export { prisma, waitForConnection };
