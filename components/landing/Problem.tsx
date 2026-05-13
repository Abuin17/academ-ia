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
    <section className="border-b border-[color:var(--color-line)] py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
              El problema
            </p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Todo el mundo habla de IA. Casi nadie la enseña bien.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <ul className="divide-y divide-[color:var(--color-line)]">
              {points.map((p) => (
                <li key={p.n} className="flex gap-6 py-6">
                  <span className="font-serif text-xl text-[color:var(--color-accent)]">{p.n}</span>
                  <p className="text-base leading-relaxed text-[color:var(--color-ink-soft)] sm:text-lg">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-serif text-xl leading-snug text-[color:var(--color-ink)] sm:text-2xl">
              Falta un sitio donde aprender IA de verdad — con personas, con método, con continuidad.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
