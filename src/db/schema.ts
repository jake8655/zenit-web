import {
  int,
  mysqlTable,
  smallint,
  timestamp,
  tinytext,
  varchar,
} from 'drizzle-orm/mysql-core';

export const pricelist = mysqlTable('pricelist', {
  id: int('id').autoincrement().primaryKey().notNull(),
  title: tinytext('title').notNull(),
  imagePath: tinytext('image_path').notNull(),
  price: smallint('price').notNull(),
  benefits: varchar('benefits', { length: 256 }).notNull(),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
});
