/**
 * Hard rule 3: global Postgres client singleton via PgBouncer (DATABASE_URL).
 */
import { Pool, type QueryResult, type QueryResultRow } from "pg";

export type DbClient = {
  kind: "pg";
  query: <T extends QueryResultRow = QueryResultRow>(
    sql: string,
    params?: unknown[],
  ) => Promise<QueryResult<T>>;
};

const globalForDb = globalThis as unknown as { __projectCodexDb?: DbClient };

function createPoolClient(): DbClient {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is required (PgBouncer URL)");
  }
  // Transaction-mode PgBouncer: keep queries simple (unnamed); max modest.
  const pool = new Pool({
    connectionString: url,
    max: 10,
  });
  return {
    kind: "pg",
    query: (sql, params) => pool.query(sql, params),
  };
}

export function getDb(): DbClient {
  if (!globalForDb.__projectCodexDb) {
    globalForDb.__projectCodexDb = createPoolClient();
  }
  return globalForDb.__projectCodexDb;
}

export async function pingDb(): Promise<boolean> {
  const db = getDb();
  const res = await db.query<{ ok: number }>("SELECT 1 AS ok");
  return res.rows[0]?.ok === 1;
}
