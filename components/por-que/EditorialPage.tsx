import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Layout editorial para las dos rutas privadas: tipografía y ritmo de
 * lectura cómodos, sin cinemáticas. Aquí el lector ya entró — toca
 * argumentar, no seducir.
 */

export function EditorialHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <header
      style={{
        paddingBlock: "clamp(8rem, 18vh, 12rem) clamp(3rem, 6vh, 4rem)",
      }}
    >
      <Container>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <Reveal y={16}>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal y={22} delay={0.08}>
            <h1
              style={{
                marginTop: "1.5rem",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                color: "var(--text)",
              }}
            >
              {title}
            </h1>
          </Reveal>
        </div>
      </Container>
    </header>
  );
}

export function EditorialSection({
  subtitle,
  children,
  index,
}: {
  subtitle: string;
  children: ReactNode;
  index: number;
}) {
  return (
    <section
      style={{
        paddingBlock: "clamp(3.5rem, 8vh, 6rem)",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <Container>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <Reveal y={14}>
            <p
              className="eyebrow"
              style={{ color: "var(--text-mute)" }}
            >
              {String(index).padStart(2, "0")}
            </p>
          </Reveal>
          <Reveal y={18} delay={0.05}>
            <h2
              style={{
                marginTop: "1rem",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.015em",
                color: "var(--text)",
              }}
            >
              {subtitle}
            </h2>
          </Reveal>

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
              color: "var(--text-soft)",
            }}
          >
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function EditorialParagraph({ children }: { children: ReactNode }) {
  return (
    <Reveal y={14}>
      <p className="lede" style={{ fontSize: "1.075rem" }}>
        {children}
      </p>
    </Reveal>
  );
}

export function EditorialClosing({
  children,
  cta,
}: {
  children: ReactNode;
  cta: { href: string; label: string };
}) {
  return (
    <section
      style={{
        paddingBlock: "clamp(5rem, 12vh, 8rem)",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <Container>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <Reveal y={18}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.5rem, 2.6vw, 2.05rem)",
                lineHeight: 1.35,
                letterSpacing: "-0.015em",
                color: "var(--text)",
              }}
            >
              {children}
            </p>
          </Reveal>
          <Reveal y={14} delay={0.15}>
            <div style={{ marginTop: "2.4rem" }}>
              <a
                href={cta.href}
                className="btn-outline"
                style={{ display: "inline-flex", padding: "0.85rem 1.4rem", fontSize: "0.85rem" }}
              >
                {cta.label}
                <span aria-hidden style={{ marginLeft: 8 }}>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function EditorialList({
  items,
}: {
  items: ReactNode[];
}) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {items.map((it, i) => (
        <li
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "0.85rem",
            alignItems: "baseline",
            color: "var(--text-soft)",
          }}
        >
          <span
            aria-hidden
            style={{
              color: "var(--color-accent)",
              fontFamily: "var(--font-serif)",
              fontSize: "1.2rem",
              lineHeight: 1,
            }}
          >
            —
          </span>
          <span className="lede" style={{ fontSize: "1.025rem" }}>
            {it}
          </span>
        </li>
      ))}
    </ul>
  );
}
