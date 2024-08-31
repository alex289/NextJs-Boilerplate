'use server';

import { z } from 'zod';

import { actionClient } from '@/lib/safe-action';

const schema = z.object({
  username: z.string().min(3).max(10),
});

export const loginUser = actionClient
  .schema(schema)
  // eslint-disable-next-line @typescript-eslint/require-await
  .action(async ({ parsedInput: { username } }) => {
    if (username === 'johndoe') {
      return {
        success: 'Successfully logged in',
      };
    }

    return { failure: 'Incorrect credentials' };
  });
