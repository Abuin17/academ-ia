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
    <section className="border-b border-[color:var(--color-line)] bg-white py-24 sm:py-32">
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            Cómo funciona
          </p>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Un currículo en tres capas.
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {layers.map((l) => (
            <li
              key={l.label}
              className="flex flex-col border-t-2 border-[color:var(--color-ink)] bg-[color:var(--color-paper)] p-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                {l.label}
              </p>
              <h3 className="mt-3 font-serif text-2xl">{l.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                {l.body}
              </p>
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                {l.cadence}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-16 max-w-3xl font-serif text-2xl leading-snug sm:text-3xl">
          Las herramientas cambian cada tres meses. La capacidad de pensar bien, no.
        </p>
      </Container>
    </section>
  );
}
