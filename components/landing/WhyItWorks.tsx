import { Reveal } from "@/components/motion/Reveal";

export function WhyItWorks() {
  return (
    <section data-section-theme="dark" className="theme-dark section">
      <div className="container-prose">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Las herramientas de IA cambian cada tres meses.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p
              className="mt-5 font-serif italic"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "var(--color-accent)",
              }}
            >
              La capacidad de evaluarlas, no.
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <p className="lede mx-auto mt-14 max-w-xl">
              Enseñamos a pensar con IA, no a usar herramientas concretas. Cuando cambien — y
              cambiarán — nuestros alumnos ya sabrán qué hacer.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
