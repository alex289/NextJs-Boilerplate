import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_REDIRECT_PROXY_URL: z.string(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    POSTGRES_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_VERCEL_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  },
  onValidationError: (errors) => {
    console.error('Invalid environment variables:', errors);
    process.exit(1);
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
