import { db } from '@/db';
import { users } from '@/db/schema/users';
import { count } from 'drizzle-orm';

import { PageClient } from './page.client';

export default async function Page() {
  const usersCount = await db.select({ count: count() }).from(users);
  return <PageClient usersCount={usersCount[0]!.count} />;
}
