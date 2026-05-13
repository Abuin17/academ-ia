import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-base font-light leading-relaxed text-[color:var(--color-ink-soft)] sm:text-lg">
      {children}
    </div>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="font-serif text-3xl leading-snug text-[color:var(--color-ink)] sm:text-4xl">
      {children}
    </p>
  );
}
