"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type Variant = "compact" | "full";
type Segment = "padre" | "profesional" | "empresa";

const segmentOptions: { value: Segment; label: string }[] = [
  { value: "padre", label: "Soy padre / madre" },
  { value: "profesional", label: "Soy profesional" },
  { value: "empresa", label: "Represento a una empresa" },
];

export function WaitlistForm({
  variant = "compact",
  submitText = "Apuntarme",
  source = "default",
  wrap = true,
}: {
  variant?: Variant;
  submitText?: string;
  source?: string;
  wrap?: boolean;
}) {
  const reduced = useReducedMotion();
  const [email, setEmail] = useState("");
  const [segment, setSegment] = useState<Segment>("padre");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const compact = variant === "compact";

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
          segment: compact ? source : segment,
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

  const wrapperClass = wrap ? "glass-primary breathe" : "";
  const wrapperPad = wrap ? "p-6 sm:p-8" : "";

  if (status === "ok") {
    return (
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 8 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`${wrapperClass} ${wrapperPad}`}
      >
        <p className="font-serif text-2xl">Te avisaremos.</p>
        <p className="lede mt-2 text-sm">
          Cuando abramos inscripciones recibirás un correo. No te escribiremos por nada más.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`${wrapperClass} ${wrapperPad} space-y-4`} noValidate>
      {!compact && (
        <fieldset className="flex flex-wrap gap-2">
          <legend className="sr-only">Soy</legend>
          {segmentOptions.map((opt) => {
            const active = segment === opt.value;
            return (
              <label key={opt.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="segment"
                  value={opt.value}
                  checked={active}
                  onChange={() => setSegment(opt.value)}
                  className="sr-only"
                />
                <span className="pill" data-active={active}>
                  {opt.label}
                </span>
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
          className="input flex-1"
        />
        <button type="submit" disabled={status === "loading"} className="btn">
          {status === "loading" ? "Enviando…" : submitText}
        </button>
      </div>

      {status === "error" && (
        <p style={{ color: "var(--color-accent)" }} className="text-sm" role="alert">
          {errorMessage ?? "No se pudo enviar."}
        </p>
      )}
      <p className="text-xs" style={{ color: "var(--text-mute)" }}>
        Sin spam. Solo te escribiremos para avisar de la apertura.
      </p>
    </form>
  );
}
