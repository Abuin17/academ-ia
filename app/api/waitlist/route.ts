import { NextResponse } from "next/server";
import { ensureWaitlistTable, sql } from "@/lib/db";
import { isValidEmail, normalizeCity, normalizeSegment } from "@/lib/validate";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { email, segment, city } = (body ?? {}) as {
    email?: unknown;
    segment?: unknown;
    city?: unknown;
  };

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  const cleanCity = normalizeCity(city);
  if (!cleanCity) {
    return NextResponse.json({ error: "Indica tu ciudad" }, { status: 400 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: "Servicio no disponible" }, { status: 503 });
  }

  try {
    await ensureWaitlistTable();
    await sql`
      INSERT INTO waitlist (email, segment, city)
      VALUES (${email.toLowerCase()}, ${normalizeSegment(segment)}, ${cleanCity})
      ON CONFLICT (email) DO UPDATE SET
        segment = EXCLUDED.segment,
        city = EXCLUDED.city
    `;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("waitlist insert failed", err);
    return NextResponse.json({ error: "No se pudo registrar" }, { status: 500 });
  }
}
