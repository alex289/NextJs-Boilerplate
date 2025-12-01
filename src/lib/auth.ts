import { db } from '@/db';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { betterAuth } from 'better-auth/minimal';
import { oAuthProxy } from 'better-auth/plugins';

import { env } from '@/env.mjs';

export const auth = betterAuth({
  telemetry: { enabled: false },
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
  plugins: [oAuthProxy()],
  experimental: {
    joins: true,
  },
});
