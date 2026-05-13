import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let client: NeonQueryFunction<false, false> | null = null;
let initialized = false;

function getClient() {
  if (client) return client;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }
  client = neon(url);
  return client;
}

export async function ensureWaitlistTable() {
  if (initialized) return;
  const sql = getClient();
  await sql`
    CREATE TABLE IF NOT EXISTS waitlist (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      segment TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await sql`ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS city TEXT`;
  initialized = true;
}

export function sql<T = unknown>(strings: TemplateStringsArray, ...values: unknown[]) {
  return getClient()(strings, ...values) as Promise<T[]>;
}
