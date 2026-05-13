const metrics = [
  "Obligación legal desde feb. 2025",
  "Sanciones hasta el 7% de facturación",
  "AESIA supervisa desde ago. 2026",
];

export function Professionals() {
  return (
    <section className="border-t border-[color:var(--color-line)] py-24 sm:py-32">
      <div className="container-prose">
        <p className="eyebrow">Para profesionales y empresas</p>
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
          Llevar IA al trabajo real no es un proyecto de fin de semana.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="card flex flex-col p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
              Profesionales
            </p>
            <h3 className="mt-5 font-serif text-2xl leading-snug text-[color:var(--color-ink)] sm:text-3xl">
              En la primera sesión aplicas algo a tu trabajo real. No en tres meses. Esta semana.
            </h3>
            <p className="mt-10 border-t border-[color:var(--color-line)] pt-5 text-sm text-[color:var(--color-muted)]">
              Módulos de 6–8 semanas · Sin prerequisitos · Presencial
            </p>
          </article>

          <article className="card flex flex-col p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
              Empresas
            </p>
            <h3 className="mt-5 font-serif text-2xl leading-snug text-[color:var(--color-ink)] sm:text-3xl">
              Desde agosto 2026, la AESIA puede sancionarte por no haber formado a tu equipo en IA.
            </h3>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--color-ink-soft)] sm:text-lg">
              Nosotros documentamos el cumplimiento. Tu equipo sale formado de verdad.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {metrics.map((m) => (
                <div
                  key={m}
                  className="border border-[color:var(--color-accent-border)] bg-[color:var(--color-accent-bg)] px-4 py-3"
                >
                  <dt className="sr-only">Dato</dt>
                  <dd className="text-xs font-medium leading-snug text-[color:var(--color-accent)] sm:text-sm">
                    {m}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-10 border-t border-[color:var(--color-line)] pt-5 text-sm text-[color:var(--color-muted)]">
              Bonificable FUNDAE · Certificado de conformidad · Por departamento
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
