/**
 * Hard rule 3: global Postgres client singleton via PgBouncer (DATABASE_URL).
 * Better Auth and app queries share one pg.Pool — no second pool.
 */
import { Pool, type QueryResult, type QueryResultRow } from "pg";

export type DbClient = {
  kind: "pg";
  query: <T extends QueryResultRow = QueryResultRow>(
    sql: string,
    params?: unknown[],
  ) => Promise<QueryResult<T>>;
};

const globalForDb = globalThis as unknown as {
  __bookfellowPool?: Pool;
  __bookfellowDb?: DbClient;
};

function createPool(): Pool {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is required (PgBouncer URL)");
  }
  // Transaction-mode PgBouncer: keep queries simple (unnamed); max modest.
  return new Pool({
    connectionString: url,
    max: 10,
  });
}

/** Shared Pool for Better Auth (`database: getPool()`) and getDb(). */
export function getPool(): Pool {
  if (!globalForDb.__bookfellowPool) {
    globalForDb.__bookfellowPool = createPool();
  }
  return globalForDb.__bookfellowPool;
}

export function getDb(): DbClient {
  if (!globalForDb.__bookfellowDb) {
    const pool = getPool();
    globalForDb.__bookfellowDb = {
      kind: "pg",
      query: (sql, params) => pool.query(sql, params),
    };
  }
  return globalForDb.__bookfellowDb;
}

export async function pingDb(): Promise<boolean> {
  const db = getDb();
  const res = await db.query<{ ok: number }>("SELECT 1 AS ok");
  return res.rows[0]?.ok === 1;
}
