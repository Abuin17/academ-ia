import { Container } from "@/components/Container";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40 md:py-48">
      <div className="hero-glow" aria-hidden />
      <Container className="relative">
        <div className="max-w-3xl fade-in">
          <p className="eyebrow mb-8">Academia IA · España · 2026</p>
          <h1 className="font-serif text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Aprende a razonar con IA.
            <br />
            <span className="text-[color:var(--color-accent)]">No a seguir tutoriales.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-[color:var(--color-ink-soft)] sm:text-xl">
            La primera red de academias de IA en España. Presencial. Para niños, jóvenes y
            profesionales.
          </p>
          <div className="mt-12 max-w-xl">
            <WaitlistForm variant="compact" />
          </div>
        </div>
      </Container>
    </section>
  );
}
