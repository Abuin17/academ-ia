import { Container } from "@/components/Container";
import { WaitlistForm } from "./WaitlistForm";

export function ComingSoon() {
  return (
    <section id="waitlist" className="py-24 sm:py-32">
      <Container>
        <div className="glass rounded-3xl px-6 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-6">Próximamente</p>
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
        </div>
      </Container>
    </section>
  );
}
