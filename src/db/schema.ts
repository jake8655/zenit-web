import {
  mysqlTable,
  smallint,
  timestamp,
  tinytext,
  varchar,
} from 'drizzle-orm/mysql-core';

export const newsletter = mysqlTable('newsletter', {
  id: smallint('id').notNull().autoincrement().primaryKey(),
  name: tinytext('name').notNull(),
  mail: varchar('mail', { length: 256 }).notNull(),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
});

export const location = mysqlTable('location', {
  id: smallint('id').notNull().autoincrement().primaryKey(),
  name: tinytext('name').notNull(),
  imagePath: varchar('imagePath', { length: 256 }).notNull(),
  price: smallint('price').notNull(),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
});
