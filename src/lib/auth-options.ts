import GithubProvider from 'next-auth/providers/github';

import type { NextAuthOptions } from 'next-auth';
import { env } from '@/env.mjs';

export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: 'auto',
    brandColor: '',
    logo: 'https://next-js-boilerplate-sable.vercel.app/static/icon/favicon.ico',
  },
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
};
