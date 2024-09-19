import GithubProvider from 'next-auth/providers/github';

import { env } from '@/env.mjs';

import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: 'auto',
    brandColor: '',
    logo: 'https://alex-boilerplate.vercel.app/static/icon/favicon.ico',
  },
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
};
