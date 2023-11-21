import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import * as schema from './schema';

if (!process.env.DATABASE_USER || !process.env.DATABASE_PASSWORD)
  throw new Error('Please set env DATABASE_USER and DATABASE_PASSWORD');

const connection = await mysql.createConnection({
  host: 'localhost',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: 'zenitSK40',
});

export const db = drizzle(connection, { schema, mode: 'default' });
