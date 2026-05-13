import type { ReactNode } from "react";

export function Prose({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "inverse" }) {
  const color =
    tone === "inverse"
      ? "text-[color:var(--color-paper)]/90"
      : "text-[color:var(--color-ink-soft)]";
  return (
    <div className={`space-y-5 text-base leading-relaxed sm:text-lg ${color}`}>{children}</div>
  );
}

export function Lede({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "inverse" }) {
  const color = tone === "inverse" ? "text-[color:var(--color-paper)]" : "text-[color:var(--color-ink)]";
  return (
    <p className={`font-serif text-2xl leading-snug sm:text-3xl ${color}`}>{children}</p>
  );
}
