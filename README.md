# Academ-IA — web del proyecto

Next.js 16 + Tailwind v4 + TypeScript. Desplegado en Vercel.

## Rutas

- `/` — landing pública con captura de waitlist.
- `/pitch` — presentación para cofundador. Sin link visible en la landing. `robots: noindex`.
- `/api/waitlist` — endpoint `POST` que persiste `{ email, segment }` en Postgres (Neon).

## Setup local

```bash
npm install
vercel link            # solo la primera vez
vercel env pull .env.local
npm run dev
```

## Storage

Tabla `waitlist` creada automáticamente al primer insert:

```sql
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  segment TEXT NOT NULL,           -- padre | profesional | empresa
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS v4 (tokens en `app/globals.css`)
- `@neondatabase/serverless` para Postgres
- Fuentes via `next/font/google`: Fraunces (serif) + Inter (sans)

## /por-que — microsite propuesta de valor AI Sapiens

Site `/por-que` — propuesta de valor AI Sapiens. No indexable. Acceso a rutas privadas por contraseña. Variables de entorno requeridas: `INVESTOR_PASSWORD`, `OPERATOR_PASSWORD`.

Rutas:

- `/por-que` — cuerpo común público (siete secciones: apertura, oportunidad histórica, columna pedagógica, ejemplos narrados, diferenciación, ruta, bifurcación).
- `/por-que/acceso` — formulario de contraseña con selector de ruta.
- `/por-que/inversor` — ruta privada (cookie `ai-sapiens-access=inversor`).
- `/por-que/operador` — ruta privada (cookie `ai-sapiens-access=operador`).

Bloqueo de indexación: `public/robots.txt` bloquea `/por-que` y `app/por-que/layout.tsx` añade `noindex, nofollow, noarchive, nosnippet, noimageindex`. El resto del site (`/`, `/pitch`) mantiene su comportamiento de indexación previo.

Gating: comparación directa contra `INVESTOR_PASSWORD` / `OPERATOR_PASSWORD` desde `app/por-que/acceso/actions.ts`. Cookie httpOnly de 30 días. Middleware en `middleware.ts` redirige a `/por-que/acceso` si la cookie no coincide.
