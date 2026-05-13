import { Reveal } from "@/components/motion/Reveal";

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
    <section data-section-theme="dark" className="theme-dark section">
      <div className="container-prose">
        <Reveal>
          <p className="eyebrow">Para familias</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h2 mt-6 max-w-3xl">
            Que tu hijo no aprenda IA solo en YouTube.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal key={b.tag} delay={i * 0.15} y={40} duration={0.7}>
              <article className="card flex h-full flex-col" style={{ padding: "2.5rem" }}>
                <span className="pill self-start">{b.tag}</span>
                <h3 className="mt-7 font-serif" style={{ fontSize: "1.85rem", lineHeight: 1.15 }}>
                  {b.title}
                </h3>
                <p className="lede mt-6" style={{ color: "var(--text-soft)" }}>
                  {b.description}
                </p>
                <ul className="mt-auto pt-10 space-y-2">
                  {b.details.map((d) => (
                    <li key={d} className="flex items-baseline gap-3 text-sm" style={{ color: "var(--text-soft)" }}>
                      <span
                        aria-hidden
                        style={{
                          display: "inline-block",
                          width: 5,
                          height: 5,
                          borderRadius: 999,
                          background: "var(--color-accent)",
                          flexShrink: 0,
                          transform: "translateY(-2px)",
                        }}
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
