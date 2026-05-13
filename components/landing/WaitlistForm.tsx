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
      <div className="glass-card rounded-2xl px-6 py-7 fade-in">
        <p className="font-serif text-2xl text-[color:var(--color-ink)]">Te avisaremos.</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          Cuando abramos inscripciones recibirás un correo. No te escribiremos por nada más.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {!compact && (
        <fieldset className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <legend className="sr-only">Soy</legend>
          {(
            [
              { value: "padre", label: "Soy padre / madre" },
              { value: "profesional", label: "Soy profesional" },
              { value: "empresa", label: "Represento a una empresa" },
            ] as const
          ).map((opt) => {
            const active = segment === opt.value;
            return (
              <label
                key={opt.value}
                className={`cursor-pointer rounded-xl border px-4 py-3 text-sm transition ${
                  active
                    ? "border-[color:var(--color-accent-border)] bg-[color:var(--color-accent-bg)] text-[color:var(--color-accent)]"
                    : "border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-ink-soft)] hover:border-[color:var(--color-border-strong)] hover:text-[color:var(--color-ink)]"
                }`}
              >
                <input
                  type="radio"
                  name="segment"
                  value={opt.value}
                  checked={active}
                  onChange={() => setSegment(opt.value)}
                  className="sr-only"
                />
                {opt.label}
              </label>
            );
          })}
        </fieldset>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-glass flex-1"
        />
        <button type="submit" disabled={status === "loading"} className="btn-primary">
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
