import { mysqlTable } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", (t) => ({
  id: t.int().primaryKey().autoincrement(),
  name: t.varchar({ length: 256 }).notNull(),
  email: t.varchar({ length: 256 }).notNull().unique(),
  age: t.int().notNull(),
}));
