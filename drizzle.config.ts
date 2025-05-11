import dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config({ path: '.env.local' });

export default defineConfig({
  schema: './src/db/schema/index.ts',
  dialect: 'postgresql',
  out: './src/db/migrations',
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
  migrations: {
    schema: 'public',
  },
  tablesFilter: ['boilerplate_*'],
});
