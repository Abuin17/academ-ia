import type { ReactNode } from "react";
import { Container } from "@/components/Container";

export function Section({
  id,
  number,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  number: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <header className="md:col-span-4">
            <p className="eyebrow">{number} · {eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              {title}
            </h2>
          </header>
          <div className="md:col-span-8">{children}</div>
        </div>
      </Container>
    </section>
  );
}
