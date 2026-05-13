const items = [
  "Tu hijo usa IA para los deberes. No sabe si lo que le devuelve es verdad.",
  "Llevas meses entre tutoriales que no terminas y herramientas que cambian cada semana.",
  "Tu empresa tiene la obligación legal de formar a su equipo en IA desde febrero de 2025. Probablemente nadie lo sabe todavía.",
];

export function Problem() {
  return (
    <section className="border-t border-[color:var(--color-line)] py-24 sm:py-32">
      <div className="container-prose">
        <p className="eyebrow">El problema</p>
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
          Todos tienen acceso a IA. Muy pocos saben qué hacer con ese acceso.
        </h2>

        <ul className="mt-14 space-y-6 sm:mt-16">
          {items.map((text, i) => (
            <li
              key={text}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-t border-[color:var(--color-line)] pt-6"
            >
              <span className="font-serif text-2xl text-[color:var(--color-accent)] sm:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg leading-relaxed text-[color:var(--color-ink-soft)] sm:text-xl">
                {text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-16 max-w-2xl font-serif text-2xl leading-snug text-[color:var(--color-ink)] sm:text-3xl">
          Falta un lugar donde aprenderlo bien. Presencial. Con método. Con continuidad.
        </p>
      </div>
    </section>
  );
}
