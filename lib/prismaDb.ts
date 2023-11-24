import { PrismaClient } from "@prisma/client";

const prisma = global.prismadb || new PrismaClient();
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('prisma', prisma)
if (process.env.NODE_ENV === "production") global.prismadb = prisma

export default prisma