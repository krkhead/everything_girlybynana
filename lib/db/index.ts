import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

type DrizzleDB = ReturnType<typeof drizzle<typeof schema>>;

let _db: DrizzleDB | null = null;

function getDb(): DrizzleDB {
  if (!_db) {
    const sql = neon(process.env.DATABASE_URL!);
    _db = drizzle(sql, { schema });
  }
  return _db;
}

// Proxy so call sites use `db.select()` etc — connection is created lazily at request time
export const db = new Proxy({} as DrizzleDB, {
  get(_, prop: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (getDb() as any)[prop];
  },
});
