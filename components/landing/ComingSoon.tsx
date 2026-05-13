import { Container } from "@/components/Container";
import { WaitlistForm } from "./WaitlistForm";

export function ComingSoon() {
  return (
    <section id="waitlist" className="border-b border-[color:var(--color-line)] py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            Próximamente
          </p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Estamos preparando la apertura en Granada.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-ink-soft)] sm:text-xl">
            Déjanos tu email y te avisamos cuando abramos inscripciones.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <WaitlistForm variant="full" />
        </div>
      </Container>
    </section>
  );
}
