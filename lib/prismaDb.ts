import { PrismaClient } from "@prisma/client";

const prisma = global.prismadb || new PrismaClient();

global.prismadb = prisma

export default prisma