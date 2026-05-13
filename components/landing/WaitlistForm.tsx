"use client";

import { useState } from "react";

type Variant = "compact" | "full";
type Segment = "padre" | "profesional" | "empresa";

export function WaitlistForm({ variant = "compact" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [segment, setSegment] = useState<Segment>("padre");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const compact = variant === "compact";
  const segmentForCompact: Segment = "padre";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          segment: compact ? segmentForCompact : segment,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "No se pudo registrar el email");
      }
      setStatus("ok");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Error desconocido");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-md border border-[color:var(--color-line)] bg-white px-5 py-6 fade-in">
        <p className="font-serif text-xl text-[color:var(--color-ink)]">Te avisaremos.</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          Cuando abramos inscripciones recibirás un correo. No te escribiremos por nada más.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      {!compact && (
        <fieldset className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <legend className="sr-only">Soy</legend>
          {(
            [
              { value: "padre", label: "Soy padre / madre" },
              { value: "profesional", label: "Soy profesional" },
              { value: "empresa", label: "Represento a una empresa" },
            ] as const
          ).map((opt) => (
            <label
              key={opt.value}
              className={`cursor-pointer rounded-md border px-4 py-3 text-sm transition ${
                segment === opt.value
                  ? "border-[color:var(--color-ink)] bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
                  : "border-[color:var(--color-line)] bg-white text-[color:var(--color-ink)] hover:border-[color:var(--color-ink)]"
              }`}
            >
              <input
                type="radio"
                name="segment"
                value={opt.value}
                checked={segment === opt.value}
                onChange={() => setSegment(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </fieldset>
      )}

      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-md border border-[color:var(--color-line)] bg-white px-4 py-3 text-base text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted)] focus:border-[color:var(--color-ink)] focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md bg-[color:var(--color-ink)] px-5 py-3 text-sm font-medium tracking-wide text-[color:var(--color-paper)] transition hover:bg-[color:var(--color-accent)] disabled:opacity-60"
        >
          {status === "loading"
            ? "Enviando…"
            : compact
              ? "Quiero saber más"
              : "Apuntarme a la lista"}
        </button>
      </div>

      {status === "error" && (
        <p className="text-sm text-[color:var(--color-accent)]" role="alert">
          {errorMessage ?? "No se pudo enviar."}
        </p>
      )}
      <p className="text-xs text-[color:var(--color-muted)]">
        Sin spam. Solo te escribiremos para avisar de la apertura.
      </p>
    </form>
  );
}
