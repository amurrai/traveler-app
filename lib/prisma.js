import { PrismaClient } from "@prisma/client";

// single global instance of PrismaClient to prevent multiple instances 
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma; 
}

export default prisma;