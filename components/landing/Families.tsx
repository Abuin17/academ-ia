const blocks = [
  {
    tag: "8 – 12 años",
    title: "Tu hijo no está aprendiendo IA. Está aprendiendo a no ser engañado por ella.",
    description: "Cada mes ve sus proyectos. Cada trimestre, te los presenta él.",
    details: ["Clases semanales", "Grupos de 8–10", "Progresión por niveles"],
  },
  {
    tag: "13 – 17 años",
    title:
      "La mayoría de sus compañeros va a poner «uso IA» en el CV. Él va a poder demostrar qué construyó con ella.",
    description: "Portfolio acumulativo. Especialización por interés. Ventaja real, no percibida.",
    details: ["Clases semanales", "Grupos reducidos", "Tres niveles"],
  },
];

export function Families() {
  return (
    <section className="border-t border-[color:var(--color-line)] py-24 sm:py-32">
      <div className="container-prose">
        <p className="eyebrow">Para familias</p>
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
          Que tu hijo no aprenda IA solo en YouTube.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <article key={b.tag} className="card flex flex-col p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
                {b.tag}
              </p>
              <h3 className="mt-5 font-serif text-2xl leading-snug text-[color:var(--color-ink)] sm:text-3xl">
                {b.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--color-ink-soft)] sm:text-lg">
                {b.description}
              </p>
              <p className="mt-10 border-t border-[color:var(--color-line)] pt-5 text-sm text-[color:var(--color-muted)]">
                {b.details.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
