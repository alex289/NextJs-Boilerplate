import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { env } from '@/env.mjs';

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: env.AUTH_SECRET,
  theme: {
    colorScheme: 'auto',
    brandColor: '',
    logo: 'https://alex-boilerplate.vercel.app/static/icon/favicon.ico',
  },
  providers: [
    GithubProvider({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }),
  ],
});
