import type { ReactNode } from "react";
import { Container } from "@/components/Container";

export function Section({
  id,
  number,
  eyebrow,
  title,
  children,
  tone = "paper",
}: {
  id?: string;
  number: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  tone?: "paper" | "white" | "ink";
}) {
  const bg =
    tone === "ink"
      ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
      : tone === "white"
        ? "bg-white"
        : "bg-[color:var(--color-paper)]";
  const titleColor = tone === "ink" ? "text-[color:var(--color-paper)]" : "text-[color:var(--color-ink)]";
  const eyebrowColor = tone === "ink" ? "text-[color:var(--color-accent-soft)]" : "text-[color:var(--color-muted)]";

  return (
    <section id={id} className={`border-b border-[color:var(--color-line)] py-24 sm:py-32 ${bg}`}>
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <header className="md:col-span-4">
            <p className={`text-xs uppercase tracking-[0.25em] ${eyebrowColor}`}>
              {number} · {eyebrow}
            </p>
            <h2
              className={`mt-3 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl ${titleColor}`}
            >
              {title}
            </h2>
          </header>
          <div className="md:col-span-8">{children}</div>
        </div>
      </Container>
    </section>
  );
}
