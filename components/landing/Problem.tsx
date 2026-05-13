import { Reveal } from "@/components/motion/Reveal";

const items = [
  "Tu hijo usa IA para los deberes. No sabe si lo que le devuelve es verdad.",
  "Llevas meses entre tutoriales que no terminas y herramientas que cambian cada semana.",
  "Tu empresa tiene la obligación legal de formar a su equipo en IA desde febrero de 2025. Probablemente nadie lo sabe todavía.",
];

export function Problem() {
  return (
    <section data-section-theme="light" className="theme-light section">
      <div className="container-prose">
        <Reveal>
          <p className="eyebrow">El problema</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h2 mt-6 max-w-3xl">
            Todos tienen acceso a IA. Muy pocos saben qué hacer con ese acceso.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
          {items.map((text, i) => (
            <Reveal key={text} delay={i * 0.12} amount={0.2}>
              <div className="relative md:px-10 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-[color:var(--rule)]">
                <p
                  aria-hidden
                  className="font-serif"
                  style={{
                    fontSize: "4rem",
                    lineHeight: 1,
                    color: "rgba(26, 26, 26, 0.08)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--text)" }}>
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p
            className="mx-auto mt-24 max-w-3xl text-center font-serif italic"
            style={{
              fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
              lineHeight: 1.3,
              color: "var(--text-soft)",
            }}
          >
            Falta un lugar donde aprenderlo bien. Presencial. Con método. Con continuidad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
