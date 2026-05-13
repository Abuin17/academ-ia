import { Container } from "@/components/Container";

const layers = [
  {
    label: "Capa 1",
    title: "Lo que no cambia",
    body: "Pensamiento crítico. Evaluación de fuentes. Ética aplicada.",
    cadence: "Permanente",
  },
  {
    label: "Capa 2",
    title: "Lo que evoluciona",
    body: "Cómo funciona la IA, qué puede hacer y qué limitaciones tiene.",
    cadence: "Revisión anual",
  },
  {
    label: "Capa 3",
    title: "Lo que se actualiza",
    body: "Herramientas concretas, flujos y técnicas vigentes.",
    cadence: "Cada trimestre",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-6">Cómo funciona</p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Un currículo en tres capas.
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {layers.map((l) => (
            <li key={l.label} className="glass-card flex flex-col rounded-2xl p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
                {l.label}
              </p>
              <h3 className="mt-4 font-serif text-3xl">{l.title}</h3>
              <p className="mt-5 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                {l.body}
              </p>
              <p className="mt-10 eyebrow">{l.cadence}</p>
            </li>
          ))}
        </ol>

        <p className="mt-20 max-w-3xl font-serif text-3xl leading-snug sm:text-4xl">
          Las herramientas cambian cada tres meses. La capacidad de pensar bien, no.
        </p>
      </Container>
    </section>
  );
}
