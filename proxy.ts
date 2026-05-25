import { NextResponse, type NextRequest } from "next/server";

import { ACCESS_COOKIE, PROTECTED_ROUTES } from "@/lib/por-que";

/**
 * Proxy (antes "middleware" en Next.js < 16).
 *
 * Valida la cookie `ai-sapiens-access` para las rutas privadas de /por-que.
 * No es un sistema de seguridad: es un gating narrativo. La comparación
 * real se hace en la server action que pone la cookie; aquí solo
 * comprobamos que la cookie existe y vale lo que toca.
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const canonical = pathname.replace(/\/+$/, "") || "/";
  const required = PROTECTED_ROUTES[canonical];
  if (!required) return NextResponse.next();

  const cookie = req.cookies.get(ACCESS_COOKIE)?.value;
  if (cookie === required) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/por-que/acceso";
  url.searchParams.set("ruta", required);
  url.searchParams.set("from", canonical);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/por-que/inversor", "/por-que/operador"],
};
