import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2/promise";

import { env } from "@/env";
import * as schema from "./schema";

const connection = await createConnection({
  host: env.DATABASE_HOST,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
});

export const db = drizzle({ client: connection, schema, mode: "default" });
