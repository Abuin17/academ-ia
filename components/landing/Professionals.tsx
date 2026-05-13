"use client";

import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

const stats = [
  {
    big: <CountUp to={2025} format={(n) => Math.round(n).toString()} />,
    label: "Obligación legal desde feb. 2025",
  },
  {
    big: (
      <>
        <CountUp to={7} />%
      </>
    ),
    label: "Sanciones hasta el 7% de facturación",
  },
  {
    big: <CountUp to={2026} format={(n) => Math.round(n).toString()} />,
    label: "AESIA supervisa desde ago. 2026",
  },
];

export function Professionals() {
  return (
    <section data-section-theme="light" className="theme-light section">
      <div className="container-prose">
        <Reveal>
          <p className="eyebrow">Para profesionales y empresas</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h2 mt-6 max-w-3xl">
            Llevar IA al trabajo real no es un proyecto de fin de semana.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal y={40} duration={0.7}>
            <article className="card flex h-full flex-col" style={{ padding: "2.5rem" }}>
              <span
                className="pill self-start"
                style={{
                  background: "rgba(45, 90, 61, 0.08)",
                  borderColor: "rgba(45, 90, 61, 0.3)",
                  color: "var(--color-accent)",
                }}
              >
                B2C · Profesionales
              </span>
              <h3 className="mt-7 font-serif" style={{ fontSize: "1.85rem", lineHeight: 1.15 }}>
                En la primera sesión aplicas algo a tu trabajo real. No en tres meses. Esta semana.
              </h3>
              <p className="mt-auto pt-10 text-sm" style={{ color: "var(--text-soft)" }}>
                Módulos de 6–8 semanas · Sin prerequisitos · Presencial
              </p>
            </article>
          </Reveal>

          <Reveal y={40} duration={0.7} delay={0.15}>
            <article className="card flex h-full flex-col" style={{ padding: "2.5rem" }}>
              <span
                className="pill self-start"
                style={{
                  background: "rgba(45, 90, 61, 0.08)",
                  borderColor: "rgba(45, 90, 61, 0.3)",
                  color: "var(--color-accent)",
                }}
              >
                B2B · Empresas
              </span>
              <h3 className="mt-7 font-serif" style={{ fontSize: "1.85rem", lineHeight: 1.15 }}>
                Desde agosto 2026, la AESIA puede sancionarte por no haber formado a tu equipo en IA.
              </h3>
              <p className="lede mt-6" style={{ color: "var(--text-soft)" }}>
                Nosotros documentamos el cumplimiento. Tu equipo sale formado de verdad.
              </p>
              <p className="mt-auto pt-10 text-sm" style={{ color: "var(--text-soft)" }}>
                Bonificable FUNDAE · Certificado de conformidad · Por departamento
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div
            className="mt-20 grid grid-cols-1 gap-y-10 md:grid-cols-3"
            style={{ borderTop: "1px solid var(--rule)", paddingTop: "3rem" }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="md:px-10"
                style={{
                  borderLeft: i === 0 ? "none" : undefined,
                  textAlign: i === 0 ? "left" : i === 1 ? "center" : "right",
                }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: "var(--color-accent)",
                  }}
                >
                  {s.big}
                </p>
                <p className="mt-3 text-sm" style={{ color: "var(--text-soft)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
