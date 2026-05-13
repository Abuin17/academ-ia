"use client";

import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

const stats = [
  {
    big: (
      <span>
        feb. <CountUp to={2025} duration={1.5} format={(n) => Math.round(n).toString()} />
      </span>
    ),
    caption: "Obligación legal desde esta fecha.",
  },
  {
    big: (
      <span>
        <CountUp to={7} duration={1.5} />%
      </span>
    ),
    caption: "Sanciones hasta esta cifra de facturación.",
  },
  {
    big: (
      <span>
        ago. <CountUp to={2026} duration={1.5} format={(n) => Math.round(n).toString()} />
      </span>
    ),
    caption: "AESIA supervisa desde entonces.",
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
          <Reveal y={50} duration={0.75}>
            <article
              className="glass-secondary flex h-full flex-col"
              style={{ padding: "2.5rem" }}
            >
              <span className="pill pill-accent self-start">B2C · Profesionales</span>
              <h3
                className="mt-7 font-serif"
                style={{ fontSize: "clamp(1.6rem, 2vw, 1.95rem)", lineHeight: 1.15 }}
              >
                En la primera sesión aplicas algo a tu trabajo real. No en tres meses. Esta
                semana.
              </h3>
              <p
                className="mt-auto pt-12 text-sm"
                style={{ color: "var(--text-soft)" }}
              >
                Módulos de 6–8 semanas · Sin prerequisitos · Presencial
              </p>
            </article>
          </Reveal>

          <Reveal y={50} duration={0.75} delay={0.18}>
            <article
              className="glass-secondary flex h-full flex-col"
              style={{ padding: "2.5rem" }}
            >
              <span className="pill pill-accent self-start">B2B · Empresas</span>
              <h3
                className="mt-7 font-serif"
                style={{ fontSize: "clamp(1.6rem, 2vw, 1.95rem)", lineHeight: 1.15 }}
              >
                Desde agosto 2026, la AESIA puede sancionarte por no haber formado a tu equipo
                en IA.
              </h3>
              <p
                className="mt-6 leading-relaxed"
                style={{ color: "var(--text-soft)", fontSize: "1.05rem" }}
              >
                Nosotros documentamos el cumplimiento. Tu equipo sale formado de verdad.
              </p>
              <p
                className="mt-auto pt-12 text-sm"
                style={{ color: "var(--text-soft)" }}
              >
                Bonificable FUNDAE · Certificado de conformidad · Por departamento
              </p>
            </article>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {stats.map((s, i) => (
            <Reveal key={i} delay={0.1 + i * 0.12} y={30} duration={0.6}>
              <div
                className="glass-secondary flex h-full flex-col"
                style={{ padding: "1.75rem" }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: "clamp(1.4rem, 2vw, 1.65rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.015em",
                    color: "var(--text)",
                  }}
                >
                  {s.big}
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-soft)" }}
                >
                  {s.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
