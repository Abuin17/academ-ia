import { NextResponse } from "next/server";
import { ensureWaitlistTable, sql } from "@/lib/db";
import { isValidEmail, normalizeSegment } from "@/lib/validate";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { email, segment } = (body ?? {}) as { email?: unknown; segment?: unknown };

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: "Servicio no disponible" }, { status: 503 });
  }

  try {
    await ensureWaitlistTable();
    await sql`
      INSERT INTO waitlist (email, segment)
      VALUES (${email.toLowerCase()}, ${normalizeSegment(segment)})
      ON CONFLICT (email) DO NOTHING
    `;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("waitlist insert failed", err);
    return NextResponse.json({ error: "No se pudo registrar" }, { status: 500 });
  }
}
