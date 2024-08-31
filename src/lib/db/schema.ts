import {
  boolean,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export const someModel = pgTable('someModel', {
  id: serial('id'),
  name: text('name'),
  uniqueId: uuid('unique_id'),
  isActive: boolean('is_active'),
  number: numeric('number'),
  createdAt: timestamp('created_at'),
});
