import config from '@/../drizzle.config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

import { client, db } from './index';

await migrate(db, { migrationsFolder: config.out! });
await client.end();
