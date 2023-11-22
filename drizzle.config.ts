import * as dotenv from 'dotenv';
import { type Config } from 'drizzle-kit';

dotenv.config();

if (!process.env.DATABASE_USER || !process.env.DATABASE_PASSWORD) {
  throw new Error('DATABASE_USER or DATABASE_PASSWORD not set');
}

export default {
  schema: './src/db/schema.ts',
  driver: 'mysql2',
  dbCredentials: {
    host: 'localhost',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'zenitKK40',
  },
} satisfies Config;
