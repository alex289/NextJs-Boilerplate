import { db } from '@/db';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import { env } from '@/env.mjs';

export const auth = betterAuth({
  baseURL: env.NEXT_PUBLIC_VERCEL_URL,
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      redirectURI: env.BETTER_AUTH_REDIRECT_PROXY_URL,
    },
  },
  // plugins: [oAuthProxy()],
});
