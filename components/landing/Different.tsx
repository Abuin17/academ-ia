import { Container } from "@/components/Container";

const negatives = [
  "No somos un curso de ChatGPT.",
  "No somos una academia de programación que ha añadido «IA» al nombre.",
  "No somos un taller de un fin de semana.",
];

export function Different() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">Qué nos hace diferentes</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Empezamos diciendo lo que no somos.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-2">
            <ul className="space-y-3">
              {negatives.map((n) => (
                <li
                  key={n}
                  className="glass-card rounded-2xl px-6 py-6 font-serif text-2xl leading-snug sm:px-8 sm:text-3xl"
                >
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-soft)] sm:text-xl">
              Somos formación presencial, continuada, con método propio, centrada en enseñar a
              razonar — no a pulsar botones.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
