"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { submitAccess } from "./actions";

type Ruta = "inversor" | "operador" | "";

type State = { ok: true } | { ok: false; message: string };

const INITIAL: State = { ok: true };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn" disabled={pending} aria-busy={pending}>
      {pending ? "Comprobando…" : "Entrar"}
    </button>
  );
}

export function AccessForm({ defaultRuta }: { defaultRuta: Ruta }) {
  const [ruta, setRuta] = useState<Ruta>(defaultRuta);
  const [state, formAction] = useActionState(submitAccess, INITIAL);
  const hasError = state.ok === false;

  return (
    <form
      action={formAction}
      style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}
      noValidate
    >
      <fieldset
        style={{
          border: 0,
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        <legend
          className="eyebrow"
          style={{ marginBottom: "0.6rem", color: "var(--text-soft)" }}
        >
          Elige tu ruta
        </legend>

        {[
          {
            value: "inversor" as const,
            label: "Soy inversor / emprendedor / partner estratégico",
          },
          {
            value: "operador" as const,
            label: "Dirijo un centro educativo",
          },
        ].map((opt) => {
          const active = ruta === opt.value;
          return (
            <label
              key={opt.value}
              style={{
                display: "flex",
                gap: "0.85rem",
                alignItems: "flex-start",
                padding: "0.85rem 1rem",
                border: `1px solid ${
                  active ? "var(--color-accent-border)" : "var(--rule)"
                }`,
                borderRadius: 10,
                background: active
                  ? "var(--accent-bg-pill)"
                  : "var(--glass-bg-secondary)",
                cursor: "pointer",
                transition: "border-color 0.25s ease, background-color 0.25s ease",
              }}
            >
              <input
                type="radio"
                name="ruta"
                value={opt.value}
                checked={active}
                onChange={() => setRuta(opt.value)}
                required
                style={{
                  marginTop: 4,
                  accentColor: "var(--color-accent)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  color: active ? "var(--text)" : "var(--text-soft)",
                  lineHeight: 1.5,
                }}
              >
                {opt.label}
              </span>
            </label>
          );
        })}
      </fieldset>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
        <label
          htmlFor="password"
          className="eyebrow"
          style={{ color: "var(--text-soft)" }}
        >
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="input"
          aria-invalid={hasError}
          aria-describedby={hasError ? "access-error" : undefined}
        />
      </div>

      {hasError && (
        <p
          id="access-error"
          role="alert"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.88rem",
            color: "#E07A6A",
            lineHeight: 1.55,
          }}
        >
          {state.message}
        </p>
      )}

      <div style={{ marginTop: "0.4rem" }}>
        <SubmitButton />
      </div>
    </form>
  );
}
