import { z } from 'zod';

const userSchema = z.object({
  username: z.string().min(3).max(10),
});

export default userSchema;
