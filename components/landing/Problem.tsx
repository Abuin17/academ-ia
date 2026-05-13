import { Container } from "@/components/Container";

const points = [
  {
    n: "01",
    text: "Los cursos online se abandonan. El 90% no se terminan.",
  },
  {
    n: "02",
    text: "Los tutoriales de YouTube enseñan botones, no criterio.",
  },
  {
    n: "03",
    text: "La formación pública gratuita cubre lo básico. No cubre lo que importa: saber cuándo confiar en la IA y cuándo no.",
  },
];

export function Problem() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">El problema</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Todo el mundo habla de IA. Casi nadie la enseña bien.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p.n} className="glass-card flex gap-6 rounded-2xl px-6 py-6 sm:px-8">
                  <span className="font-serif text-2xl text-[color:var(--color-accent)]">
                    {p.n}
                  </span>
                  <p className="text-base leading-relaxed text-[color:var(--color-ink-soft)] sm:text-lg">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-12 font-serif text-2xl leading-snug text-[color:var(--color-ink)] sm:text-3xl">
              Falta un sitio donde aprender IA de verdad — con personas, con método, con continuidad.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
