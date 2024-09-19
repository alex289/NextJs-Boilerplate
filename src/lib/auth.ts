import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { env } from '@/env.mjs';

export const { auth, handlers, signIn, signOut } = NextAuth({
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
});
