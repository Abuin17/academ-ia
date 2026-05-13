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
