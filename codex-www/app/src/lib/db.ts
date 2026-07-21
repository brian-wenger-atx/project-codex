/**
 * Hard rule 3: global Postgres client singleton.
 * Live Postgres / PgBouncer arrive in P3 — this module is the pattern only.
 */

export type DbClient = {
  kind: "stub";
  query: (sql: string) => Promise<{ rows: unknown[] }>;
};

const globalForDb = globalThis as unknown as { __projectCodexDb?: DbClient };

function createStubClient(): DbClient {
  return {
    kind: "stub",
    async query() {
      throw new Error("Postgres not wired until P3 — singleton stub only");
    },
  };
}

export function getDb(): DbClient {
  if (!globalForDb.__projectCodexDb) {
    globalForDb.__projectCodexDb = createStubClient();
  }
  return globalForDb.__projectCodexDb;
}
