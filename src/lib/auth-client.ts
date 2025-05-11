import { createAuthClient } from 'better-auth/react';

import { env } from '@/env.mjs';

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_VERCEL_URL,
});
