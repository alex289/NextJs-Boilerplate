'use server';

import { actionClient } from '@/lib/safe-action';
import userSchema from './schema';

export const loginUser = actionClient
  .schema(userSchema)
  .action(async ({ parsedInput: { username } }) => {
    if (username === 'johndoe') {
      return {
        success: 'Successfully logged in',
      };
    }

    return { failure: 'Incorrect credentials' };
  });
