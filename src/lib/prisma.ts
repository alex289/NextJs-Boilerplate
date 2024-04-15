import { env } from '@/env.mjs';
import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma ?? new PrismaClient();

if (env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
