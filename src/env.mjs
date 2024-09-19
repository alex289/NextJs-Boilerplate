import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    NEXTAUTH_SECRET: z.string(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  },
  client: {
    NEXT_PUBLIC_VERCEL_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  },
  onValidationError: (error) => {
    console.error(
      'Invalid environment variables:',
      error.flatten().fieldErrors,
    );
    process.exit(1);
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
