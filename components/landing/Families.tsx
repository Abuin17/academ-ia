import { Container } from "@/components/Container";

const cards = [
  {
    age: "8 – 12 años",
    title: "Niños",
    headline: "Tu hijo aprende a pensar con la IA, no a dejarse pensar por ella.",
    bullets: [
      "Proyectos tangibles cada mes.",
      "Sabe cuándo la IA ayuda y cuándo engaña.",
      "Showcase trimestral para padres.",
    ],
    format: "Clases semanales presenciales, grupos de 8–10, progresión por niveles.",
  },
  {
    age: "13 – 17 años",
    title: "Adolescentes",
    headline: "Construye un portfolio con IA que te diferencia — para la universidad, para tu primer empleo.",
    bullets: [
      "Portfolio de proyectos acumulativo.",
      "Especialización por interés.",
      "Ventaja demostrable frente a pares.",
    ],
    format: "Clases semanales, grupos reducidos, tres niveles cuatrimestrales.",
  },
];

export function Families() {
  return (
    <section
      id="familias"
      className="border-b border-[color:var(--color-line)] bg-white py-24 sm:py-32"
    >
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            Para familias
          </p>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Que tu hijo no aprenda IA solo en YouTube.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-8 sm:p-10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                {card.age}
              </p>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{card.title}</h3>
              <p className="mt-6 font-serif text-xl leading-snug text-[color:var(--color-ink)] sm:text-2xl">
                {card.headline}
              </p>
              <ul className="mt-8 space-y-3 text-[color:var(--color-ink-soft)]">
                {card.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-base leading-relaxed">
                    <span aria-hidden className="mt-2 inline-block h-px w-4 bg-[color:var(--color-accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 border-t border-[color:var(--color-line)] pt-6 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {card.format}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
