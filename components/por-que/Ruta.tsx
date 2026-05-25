"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const FASES = [
  {
    label: "Fase 1 · Ahora",
    title: "Implementación directa a alumnos",
    body:
      "El equipo fundador imparte el marco directamente, en modalidad online con trabajo guiado más sesiones en vivo. Cohortes reducidas. Validación del método con alumnos reales. Iteración del producto con feedback de cada cohorte.",
  },
  {
    label: "Fase 2 · Cuando se cumplan las condiciones",
    title: "Escalado a través de centros educativos",
    body:
      "El marco se entrega a centros educativos a través de docentes formados y certificados. La modalidad de entrega puede ser online, híbrida o presencial según el centro. El currículo se mantiene actualizado trimestralmente desde central.",
  },
];

const CONDICIONES = [
  {
    n: "01",
    text: "Al menos tres cohortes completadas por segmento, con portfolios defendidos.",
  },
  {
    n: "02",
    text: "Currículo estabilizado en sus capas permanente y semi-estable. La capa actualizable seguirá cambiando trimestralmente — eso es propio del marco.",
  },
  {
    n: "03",
    text: "Demanda probada de centros educativos: al menos cinco con interés concreto y compromiso de adopción.",
  },
];

export function Ruta() {
  const reduced = useReducedMotion();

  return (
    <section className="section" data-section-theme="dark">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal y={20}>
            <h2 className="h2" style={{ color: "var(--text)" }}>
              Primero se valida. Después se escala.
            </h2>
          </Reveal>
          <Reveal y={18} delay={0.08}>
            <p
              className="lede"
              style={{ marginTop: "1.3rem", maxWidth: "50ch" }}
            >
              Cambridge English siguió este patrón en su origen. Es el que
              respetan los sistemas educativos serios.
            </p>
          </Reveal>
        </div>

        <div
          className="mx-auto mt-16"
          style={{
            display: "grid",
            gap: "clamp(1.25rem, 2vw, 1.75rem)",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            maxWidth: 1000,
          }}
        >
          {FASES.map((f, idx) => (
            <motion.article
              key={f.label}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                ease: EASE,
                delay: idx * 0.4,
              }}
              className="glass-secondary"
              style={{
                padding: "clamp(1.75rem, 3vw, 2.5rem)",
                borderRadius: 14,
                borderLeft:
                  idx === 0
                    ? "1px solid var(--rule)"
                    : "1px solid var(--color-accent-border)",
              }}
            >
              <p
                className="eyebrow"
                style={{
                  color: idx === 1 ? "var(--color-accent)" : "var(--text-mute)",
                }}
              >
                {f.label}
              </p>
              <h3
                style={{
                  marginTop: "1rem",
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 2.4vw, 1.95rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.015em",
                  color: "var(--text)",
                }}
              >
                {f.title}
              </h3>
              <p
                className="lede"
                style={{ marginTop: "1rem", fontSize: "1rem" }}
              >
                {f.body}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Condiciones */}
        <div className="mx-auto mt-24 max-w-3xl">
          <Reveal y={18}>
            <p
              className="lede"
              style={{ color: "var(--text-soft)", maxWidth: "55ch" }}
            >
              La Fase 2 se activa solo cuando concurren tres condiciones
              medibles. No antes.
            </p>
          </Reveal>

          <ol className="mt-10" style={{ listStyle: "none", padding: 0 }}>
            {CONDICIONES.map((c, idx) => (
              <li
                key={c.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "clamp(1.25rem, 3vw, 2rem)",
                  alignItems: "baseline",
                  paddingBlock: "1.6rem",
                  borderTop: idx === 0 ? "1px solid var(--rule)" : "1px solid var(--rule)",
                }}
              >
                <Reveal y={14} delay={idx * 0.05}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)",
                      color: "var(--color-accent)",
                      lineHeight: 1,
                    }}
                  >
                    {c.n}
                  </span>
                </Reveal>
                <Reveal y={14} delay={0.06 + idx * 0.05}>
                  <p
                    className="lede"
                    style={{ margin: 0, color: "var(--text-soft)" }}
                  >
                    {c.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-20 max-w-2xl">
          <Reveal y={18}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)",
                lineHeight: 1.4,
                color: "var(--text-soft)",
              }}
            >
              Si una condición no se cumple, se sigue en Fase 1 hasta que se
              cumpla.{" "}
              <strong style={{ fontWeight: 400, color: "var(--text)" }}>
                La Fase 2 no se fuerza.
              </strong>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
