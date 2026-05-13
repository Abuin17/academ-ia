"use client";

import { useState } from "react";

export function WaitlistForm({
  submitText = "Quiero plaza",
  source = "default",
}: {
  submitText?: string;
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
          segment: source,
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
      <div className="card px-6 py-7 fade-in">
        <p className="font-serif text-2xl text-[color:var(--color-ink)]">Te avisaremos.</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          Cuando abramos inscripciones recibirás un correo. No te escribiremos por nada más.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-clean flex-1"
        />
        <button type="submit" disabled={status === "loading"} className="btn-primary">
          {status === "loading" ? "Enviando…" : submitText}
        </button>
      </div>

      {status === "error" && (
        <p className="text-sm text-[color:var(--color-accent)]" role="alert">
          {errorMessage ?? "No se pudo enviar."}
        </p>
      )}
      <p className="text-xs text-[color:var(--color-muted)]">
        Sin spam. Solo te escribimos para avisarte de la apertura.
      </p>
    </form>
  );
}
