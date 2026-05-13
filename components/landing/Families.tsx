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
    <section id="familias" className="py-24 sm:py-32">
      <Container>
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-6">Para familias</p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Que tu hijo no aprenda IA solo en YouTube.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="glass-card flex flex-col rounded-2xl p-10 sm:p-12"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
                {card.age}
              </p>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl">{card.title}</h3>
              <p className="mt-8 font-serif text-xl leading-snug text-[color:var(--color-ink)] sm:text-2xl">
                {card.headline}
              </p>
              <ul className="mt-10 space-y-4 text-[color:var(--color-ink-soft)]">
                {card.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-base leading-relaxed">
                    <span
                      aria-hidden
                      className="mt-3 inline-block h-px w-5 flex-shrink-0 bg-[color:var(--color-accent)]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-12 border-t border-[color:var(--color-border)] pt-6 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {card.format}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
