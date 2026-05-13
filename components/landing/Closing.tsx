import { Reveal } from "@/components/motion/Reveal";
import { WaitlistForm } from "./WaitlistForm";

export function Closing() {
  return (
    <section id="lista" data-section-theme="dark" className="theme-dark section">
      <div className="container-prose">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="h2">Abrimos en Granada en 2026.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mt-4 font-serif italic"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--color-accent)",
              }}
            >
              Después, en tu ciudad.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="lede mx-auto mt-10 max-w-lg">
              Déjanos tu email. Te avisamos cuando abramos cerca de ti.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.5} y={20}>
          <div className="mx-auto mt-12 max-w-xl">
            <WaitlistForm variant="full" submitText="Quiero plaza" source="closing" wrap />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
