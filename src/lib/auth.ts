import { db } from '@/db';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { oAuthProxy } from 'better-auth/plugins/oauth-proxy';

import { env } from '@/env.mjs';

export const auth = betterAuth({
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
});
