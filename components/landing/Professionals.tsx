import { Container } from "@/components/Container";

const blocks = [
  {
    kind: "B2C",
    title: "Profesionales",
    headline: "Aprende a usar IA en tu trabajo real esta semana.",
    detail:
      "Módulos independientes de 6–8 semanas. Sin prerequisitos. Siempre hay algo nuevo.",
    points: [],
  },
  {
    kind: "B2B",
    title: "Empresas",
    headline: "Formación que pone a tu empresa en cumplimiento del AI Act.",
    detail:
      "Programas de 8–12 sesiones por departamento. Bonificable FUNDAE. Certificado de conformidad.",
    points: [
      "Obligación legal desde febrero 2025.",
      "Sanciones de hasta 7% de facturación.",
      "AESIA supervisa desde agosto 2026.",
    ],
  },
];

export function Professionals() {
  return (
    <section className="border-b border-[color:var(--color-line)] py-24 sm:py-32">
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            Para profesionales y empresas
          </p>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Llevar IA al trabajo no debería ser un proyecto personal de fin de semana.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <article
              key={b.kind}
              className="flex flex-col border border-[color:var(--color-line)] bg-white p-8 sm:p-10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                {b.kind}
              </p>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{b.title}</h3>
              <p className="mt-6 font-serif text-xl leading-snug text-[color:var(--color-ink)] sm:text-2xl">
                {b.headline}
              </p>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                {b.detail}
              </p>
              {b.points.length > 0 && (
                <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-[color:var(--color-line)] pt-6 text-sm sm:grid-cols-3">
                  {b.points.map((p) => (
                    <div key={p}>
                      <dt className="sr-only">Dato</dt>
                      <dd className="text-[color:var(--color-ink-soft)]">{p}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
