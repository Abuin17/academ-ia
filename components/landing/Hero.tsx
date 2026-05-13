import { Container } from "@/components/Container";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="border-b border-[color:var(--color-line)] py-24 sm:py-32 md:py-40">
      <Container>
        <div className="max-w-3xl fade-in">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            Academia IA · España · 2026
          </p>
          <h1 className="font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Aprende a razonar con IA. <span className="text-[color:var(--color-accent)]">No a seguir tutoriales.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-[color:var(--color-ink-soft)] sm:text-xl">
            La primera red de academias de IA en España. Presencial. Para niños, jóvenes y profesionales.
          </p>
          <div className="mt-10 max-w-xl">
            <WaitlistForm variant="compact" />
          </div>
        </div>
      </Container>
    </section>
  );
}
