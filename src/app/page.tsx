import { db } from '@/db';
import { user } from '@/db/schema';
import { count } from 'drizzle-orm';

import { PageClient } from './page.client';

export default async function Page() {
  const usersCount = await db.select({ count: count() }).from(user);
  return <PageClient usersCount={usersCount[0]?.count ?? 0} />;
}
