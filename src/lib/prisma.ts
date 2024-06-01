import { PrismaClient } from '@prisma/client';

import { env } from '@/env.mjs';

declare global {
  // eslint-disable-next-line no-var, @typescript-eslint/no-redundant-type-constituents
  var prisma: PrismaClient | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const prisma = global.prisma ?? new PrismaClient();

if (env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  global.prisma = prisma;
}

export default prisma;
