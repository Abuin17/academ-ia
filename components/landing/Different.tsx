import { Container } from "@/components/Container";

const negatives = [
  "No somos un curso de ChatGPT.",
  "No somos una academia de programación que ha añadido «IA» al nombre.",
  "No somos un taller de un fin de semana.",
];

export function Different() {
  return (
    <section className="bg-[color:var(--color-ink)] py-24 text-[color:var(--color-paper)] sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent-soft)]">
              Qué nos hace diferentes
            </p>
            <h2 className="font-serif text-3xl leading-tight text-[color:var(--color-paper)] sm:text-4xl md:text-5xl">
              Empezamos diciendo lo que no somos.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-2">
            <ul className="divide-y divide-white/10">
              {negatives.map((n) => (
                <li key={n} className="py-5 font-serif text-xl leading-snug sm:text-2xl">
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-xl text-lg leading-relaxed text-[color:var(--color-paper)] sm:text-xl">
              Somos formación presencial, continuada, con método propio, centrada en enseñar a
              razonar — no a pulsar botones.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
