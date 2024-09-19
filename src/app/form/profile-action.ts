'use server';

import { actionClient } from '@/lib/safe-action';
import userSchema from './schema';

export const loginUser = actionClient
  .schema(userSchema)
  // eslint-disable-next-line @typescript-eslint/require-await
  .action(async ({ parsedInput: { username } }) => {
    if (username === 'johndoe') {
      return {
        success: 'Successfully logged in',
      };
    }

    return { failure: 'Incorrect credentials' };
  });
