import { NextResponse, type NextRequest } from "next/server";

import { ACCESS_COOKIE, PROTECTED_ROUTES } from "@/lib/por-que";

/**
 * Proxy (antes "middleware" en Next.js < 16).
 *
 * Hace dos cosas:
 *
 * 1. Basic Auth global del sitio usando `BASIC_AUTH_PASS`. Sirve para
 *    mantener todo el dominio cerrado mientras está en pre-lanzamiento.
 *    Acepta cualquier usuario; solo valida que la contraseña coincida con la
 *    env var. Si la env var no está definida, se desactiva el gating para
 *    no romper el sitio.
 *
 * 2. Gating narrativo de /por-que/inversor y /por-que/operador con la cookie
 *    `ai-sapiens-access`. No es seguridad real: la cookie se pone en la
 *    server action de /por-que/acceso si la contraseña coincide con la env
 *    var correspondiente (INVESTOR_PASSWORD / OPERATOR_PASSWORD).
 */

const BASIC_AUTH_REALM = "Academia IA";

/**
 * Escape hatch para abrir el sitio temporalmente a crawlers / fetch externo
 * (p. ej. revisión por Claude). En condiciones normales debe estar `false`;
 * para abrirlo desde Vercel sin tocar código, definir
 * `TEMP_CRAWLER_ACCESS=true` en las env vars del proyecto.
 */
const SKIP_BASIC_AUTH = process.env.TEMP_CRAWLER_ACCESS === "true";

function basicAuthChallenge(): NextResponse {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${BASIC_AUTH_REALM}", charset="UTF-8"`,
    },
  });
}

function isBasicAuthOk(req: NextRequest): boolean {
  if (SKIP_BASIC_AUTH) return true;

  const expected = process.env.BASIC_AUTH_PASS;
  if (!expected) return true;

  const header = req.headers.get("authorization") ?? "";
  if (!header.toLowerCase().startsWith("basic ")) return false;

  try {
    const decoded = atob(header.slice(6).trim());
    const idx = decoded.indexOf(":");
    if (idx === -1) return false;
    const password = decoded.slice(idx + 1);
    return password === expected;
  } catch {
    return false;
  }
}

export function proxy(req: NextRequest) {
  if (!isBasicAuthOk(req)) return basicAuthChallenge();

  const { pathname } = req.nextUrl;
  const canonical = pathname.replace(/\/+$/, "") || "/";
  const required = PROTECTED_ROUTES[canonical];

  if (required) {
    const cookie = req.cookies.get(ACCESS_COOKIE)?.value;
    if (cookie !== required) {
      const url = req.nextUrl.clone();
      url.pathname = "/por-que/acceso";
      url.searchParams.set("ruta", required);
      url.searchParams.set("from", canonical);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Aplica a todo excepto a los assets estáticos de Next.js, robots.txt
  // y ficheros públicos comunes. Si añades nuevos tipos de asset en /public,
  // amplía esta lista.
  matcher: [
    "/((?!_next/static|_next/image|_next/data|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|mjs|map|woff|woff2|ttf|otf|eot|txt|xml|mp4|webm|mp3)$).*)",
  ],
};
