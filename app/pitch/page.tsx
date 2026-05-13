import { Container } from "@/components/Container";
import { Lede, Prose } from "@/components/pitch/Prose";
import { Section } from "@/components/pitch/Section";

export const metadata = {
  title: "Academia IA — Pitch para cofundador",
  description:
    "Tesis, mercado, propuesta, números y plan de 4 semanas para arrancar una red de academias de IA en España.",
  robots: { index: false, follow: false },
};

const competitors = [
  {
    cat: "Academias de programación para niños",
    who: "Algorithmics: 45+ centros, 47–51€/mes",
    miss: "Programación, no IA. No enseñan a razonar con IA.",
  },
  {
    cat: "Cursos online adultos",
    who: "IIA, BIG School, Revolutia",
    miss: "100% online. Sin presencial, sin comunidad real.",
  },
  {
    cat: "Campamentos puntuales",
    who: "Rockbotic, Brains",
    miss: "Talleres de 1 semana. Sin continuidad ni progresión.",
  },
  {
    cat: "Formación B2B para AI Act",
    who: "AcademiaDeIA.es, Delbion, Evolve",
    miss: "Online o puntual. Nadie hace presencial recurrente.",
  },
  {
    cat: "Formación pública gratuita",
    who: "78.000+ formaciones Madrid, AWS 50.000 más",
    miss: "Nivel introductorio. No cubre aplicación real.",
  },
];

const segments = [
  {
    title: "Adolescentes (13–17)",
    opp: "Segmento sin oferta específica. Padres con disposición a invertir en diferenciación académica.",
    comp: "Prácticamente cero competencia directa.",
    risk: "Demanda no verificada. El adolescente tiene que querer ir.",
  },
  {
    title: "Adultos B2B (AI Act)",
    opp: "Obligación legal con plazos. Sanciones materiales. Demanda forzada por marco regulatorio.",
    comp: "Online y puntual. Nadie presencial recurrente.",
    risk: "Ciclo de venta largo. Necesita credibilidad o referencias para entrar.",
  },
  {
    title: "Niños (8–12)",
    opp: "Categoría 'IA para niños' aún no existe como propia. Hueco para crearla.",
    comp: "Algorithmics, Logiscool — ocupan 'programación', no 'IA'.",
    risk: "Los padres no diferencian programación de IA todavía.",
  },
];

const valueBySegment = [
  {
    who: "Niños",
    one: "Aprenden a pensar con IA, no a dejarse pensar por ella.",
    detail:
      "Proyectos tangibles. Showcase trimestral. Progresión por niveles que la familia ve.",
  },
  {
    who: "Adolescentes",
    one: "Construyen un portfolio con IA que les diferencia para la universidad y el primer empleo.",
    detail:
      "Tres niveles cuatrimestrales. Especialización por interés. Portfolio acumulativo verificable.",
  },
  {
    who: "Adultos B2B",
    one: "Cumplimiento del AI Act sin sustos y con uso real de IA en el día a día.",
    detail:
      "Programas por departamento de 8–12 sesiones presenciales. Bonificable FUNDAE. Certificado de conformidad.",
  },
];

const entryPhases = [
  {
    months: "Meses 1 – 6",
    title: "B2B primero",
    body:
      "Captar 2–3 empresas de Granada para programas de cumplimiento AI Act. Validar precio, formato y demanda real con ingresos.",
  },
  {
    months: "Meses 4 – 8",
    title: "Taller piloto familias",
    body:
      "Un taller presencial de 4 sesiones para niños y adolescentes en colegios aliados. Inversión 500€. Validar willingness to pay y formato.",
  },
  {
    months: "Meses 9 – 12",
    title: "Academia",
    body:
      "Apertura del primer centro propio en Granada con tres líneas (niños, adolescentes, profesionales) según resultados del piloto.",
  },
];

const diffRows = [
  { feat: "Presencial", us: "Sí", others: "Online" },
  { feat: "Recurrente", us: "Cuota mensual", others: "Curso puntual" },
  { feat: "AI Act por departamento", us: "Sí", others: "Genérico" },
  { feat: "Bonificable FUNDAE", us: "Sí", others: "Parcial" },
  { feat: "Certificado de conformidad", us: "Sí", others: "Solo de asistencia" },
  { feat: "Método propio", us: "Razonar con IA", others: "Demostración de herramientas" },
];

const economics = [
  { label: "Costes mensuales operación Granada", value: "≈ 8.500 €/mes" },
  { label: "Break-even", value: "71 alumnos" },
  { label: "Inversión inicial estimada", value: "70 – 116 K€" },
];

const scenarios = [
  { name: "Pesimista", students: "45 alumnos", outcome: "Pérdida operativa controlada" },
  { name: "Base", students: "85 alumnos", outcome: "Break-even + reserva" },
  { name: "Optimista", students: "130 alumnos", outcome: "Beneficio reinvertible en segundo centro" },
];

const expansion = [
  {
    phase: "Piloto",
    when: "Año 1",
    what: "Granada como laboratorio. Validar economics, currículo e instructor profile.",
  },
  {
    phase: "Consolidación",
    when: "Año 2",
    what: "Segundo centro propio en otra ciudad andaluza. Estandarizar operaciones.",
  },
  {
    phase: "Escala",
    when: "Año 3+",
    what: "Modelo de expansión replicable: propio + alianzas con centros existentes.",
  },
];

const team = [
  {
    who: "Manu",
    role: "Producto, currículo y ejecución",
    items: [
      "Diseño de producto.",
      "Autor de PRAXIS (libro sobre uso ético y crítico de IA).",
      "Consultoría IA aplicada.",
      "Currículo en tres capas.",
      "Ejecución del piloto.",
    ],
  },
  {
    who: "Ricardo",
    role: "Operación, mercado y red",
    items: [
      "+30 años en gestión de centros educativos.",
      "Conocimiento operativo de academias.",
      "Visión del mercado educativo español.",
      "Capital para piloto.",
      "Red de contactos en educación.",
    ],
  },
];

const unknowns = [
  "Si la demanda real de familias justifica una cuota mensual presencial frente a alternativas más baratas.",
  "Cuál es el perfil correcto del instructor — profesor con base IA o profesional IA con vocación docente.",
  "Si el formato de 8 alumnos por grupo es el punto óptimo de economics y experiencia.",
  "Cuál es el precio correcto para B2C y para B2B — sin tests reales aún.",
];

const nextSteps = [
  {
    when: "Semana 1",
    what: "Definir taller piloto: contenido, formato, colegio anfitrión, fecha.",
  },
  {
    when: "Semana 2",
    what: "Lanzar taller piloto (500 € de inversión) y captar 5 entrevistas con empresas B2B.",
  },
  {
    when: "Semana 3",
    what: "Ejecutar taller. Hacer entrevistas B2B. Recoger señales cuantitativas y cualitativas.",
  },
  {
    when: "Semana 4",
    what: "Reunión de los dos con resultados. Decisión: seguir, pivotar o parar.",
  },
];

export default function PitchPage() {
  return (
    <main className="bg-[color:var(--color-paper)]">
      <header className="border-b border-[color:var(--color-line)] py-12">
        <Container>
          <div className="flex items-center justify-between">
            <p className="font-serif text-xl">Academia IA</p>
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
              Pitch confidencial · Cofundador
            </p>
          </div>
        </Container>
      </header>

      <Section number="01" eyebrow="La tesis" title="La IA es presente. La formación seria todavía no.">
        <Lede>
          La IA ya no es tecnología del futuro — es una herramienta del presente que la mayoría
          de la gente usa mal, usa con miedo, o no usa. No existe ningún sitio en España donde un
          niño, un adolescente o un profesional puedan aprender a razonar y trabajar con IA de
          forma seria, presencial y continuada.
        </Lede>
        <ul className="mt-10 divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
          {[
            "No existe ninguna academia presencial recurrente de IA para público general en España.",
            "El segmento adolescente (13–17) está completamente vacío.",
            "El AI Act obliga a todas las empresas europeas a formar a su personal en IA desde febrero 2025 (sanciones hasta 7% facturación, AESIA supervisa desde agosto 2026).",
          ].map((dato, i) => (
            <li key={dato} className="flex gap-6 py-5">
              <span className="font-serif text-lg text-[color:var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-[color:var(--color-ink-soft)] sm:text-lg">
                {dato}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        number="02"
        eyebrow="El mercado"
        title="Quién hace qué y dónde está el hueco."
        tone="white"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="border-b border-[color:var(--color-ink)]">
                <th className="py-3 pr-4 font-sans text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  Categoría
                </th>
                <th className="py-3 pr-4 font-sans text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  Qué hacen
                </th>
                <th className="py-3 font-sans text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  Qué falta
                </th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr key={c.cat} className="border-b border-[color:var(--color-line)] align-top">
                  <td className="py-5 pr-4 font-serif text-base sm:text-lg">{c.cat}</td>
                  <td className="py-5 pr-4 text-[color:var(--color-ink-soft)]">{c.who}</td>
                  <td className="py-5 text-[color:var(--color-ink-soft)]">{c.miss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        number="03"
        eyebrow="Tres segmentos"
        title="Tres demandas distintas. Una sola operación."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {segments.map((s) => (
            <article
              key={s.title}
              className="flex flex-col border border-[color:var(--color-line)] bg-white p-6"
            >
              <h3 className="font-serif text-xl">{s.title}</h3>
              <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                    Oportunidad
                  </dt>
                  <dd className="mt-1 text-[color:var(--color-ink-soft)]">{s.opp}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                    Competencia
                  </dt>
                  <dd className="mt-1 text-[color:var(--color-ink-soft)]">{s.comp}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                    Riesgo
                  </dt>
                  <dd className="mt-1 text-[color:var(--color-ink-soft)]">{s.risk}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section
        number="04"
        eyebrow="La propuesta"
        title="Una red de academias presenciales de IA."
        tone="white"
      >
        <Prose>
          <p>
            Entidad nueva e independiente. Posicionamiento explícito: enseñar a razonar con IA,
            no a pulsar botones. Formato presencial recurrente con cuota mensual y progresión por
            niveles — análogo al modelo de academia de idiomas, no al curso intensivo.
          </p>
          <p>
            Currículo en tres capas: lo que no cambia (pensamiento crítico, ética, evaluación
            de fuentes), lo que evoluciona (cómo funciona la IA y sus límites) y lo que se
            actualiza cada trimestre (herramientas concretas y flujos de trabajo).
          </p>
          <p>
            Una sola operación sirve a tres segmentos con economías compartidas: instalaciones,
            marca, método, instructores. Tres demandas, una academia.
          </p>
        </Prose>
      </Section>

      <Section
        number="05"
        eyebrow="Propuesta de valor"
        title="Una frase por segmento. Y por qué."
      >
        <ol className="space-y-8">
          {valueBySegment.map((v) => (
            <li key={v.who} className="border-t border-[color:var(--color-line)] pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                {v.who}
              </p>
              <Lede>{v.one}</Lede>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                {v.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        number="06"
        eyebrow="Estrategia de entrada"
        title="B2B primero. Familias en paralelo. Academia al final."
        tone="white"
      >
        <ol className="space-y-6">
          {entryPhases.map((p) => (
            <li key={p.title} className="grid grid-cols-1 gap-4 border-l-2 border-[color:var(--color-accent)] pl-6 md:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  {p.months}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{p.title}</h3>
              </div>
              <p className="md:col-span-3 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        number="07"
        eyebrow="Diferenciación"
        title="Lo que no ofrece nadie más en formato B2B presencial."
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="border-b border-[color:var(--color-ink)]">
                <th className="py-3 pr-4 font-sans text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  Atributo
                </th>
                <th className="py-3 pr-4 font-sans text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                  Nosotros
                </th>
                <th className="py-3 font-sans text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  Competencia típica
                </th>
              </tr>
            </thead>
            <tbody>
              {diffRows.map((r) => (
                <tr key={r.feat} className="border-b border-[color:var(--color-line)]">
                  <td className="py-4 pr-4 font-serif text-base sm:text-lg">{r.feat}</td>
                  <td className="py-4 pr-4 text-[color:var(--color-ink)]">{r.us}</td>
                  <td className="py-4 text-[color:var(--color-ink-soft)]">{r.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        number="08"
        eyebrow="Los números"
        title="Unit economics Granada."
        tone="ink"
      >
        <dl className="grid grid-cols-1 gap-6 border-y border-white/10 py-8 md:grid-cols-3">
          {economics.map((e) => (
            <div key={e.label}>
              <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent-soft)]">
                {e.label}
              </dt>
              <dd className="mt-2 font-serif text-3xl text-[color:var(--color-paper)] sm:text-4xl">
                {e.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent-soft)]">
            Escenarios
          </p>
          <ul className="mt-4 divide-y divide-white/10">
            {scenarios.map((s) => (
              <li key={s.name} className="grid grid-cols-1 gap-2 py-5 md:grid-cols-3">
                <p className="font-serif text-xl text-[color:var(--color-paper)]">{s.name}</p>
                <p className="text-[color:var(--color-paper)]/80">{s.students}</p>
                <p className="text-[color:var(--color-paper)]/80">{s.outcome}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        number="09"
        eyebrow="Modelo de expansión"
        title="Piloto, consolidación, escala."
        tone="white"
      >
        <ol className="space-y-6">
          {expansion.map((e) => (
            <li key={e.phase} className="grid grid-cols-1 gap-4 border-t border-[color:var(--color-line)] pt-6 md:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  {e.when}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{e.phase}</h3>
              </div>
              <p className="md:col-span-3 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                {e.what}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        number="10"
        eyebrow="Por qué juntos"
        title="Producto y operación. Ejecución y red."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {team.map((m) => (
            <article
              key={m.who}
              className="flex flex-col border border-[color:var(--color-line)] bg-white p-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                {m.role}
              </p>
              <h3 className="mt-2 font-serif text-2xl">{m.who}</h3>
              <ul className="mt-6 space-y-3 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                {m.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden className="mt-2 inline-block h-px w-4 bg-[color:var(--color-accent)]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        number="11"
        eyebrow="Lo que no sabemos todavía"
        title="Cuatro preguntas honestas."
        tone="white"
      >
        <ol className="space-y-6">
          {unknowns.map((u, i) => (
            <li key={u} className="flex gap-6 border-t border-[color:var(--color-line)] pt-6">
              <span className="font-serif text-xl text-[color:var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-[color:var(--color-ink-soft)] sm:text-lg">
                {u}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        number="12"
        eyebrow="Próximo paso"
        title="Cuatro semanas para una decisión informada."
        tone="ink"
      >
        <ol className="divide-y divide-white/10">
          {nextSteps.map((s) => (
            <li key={s.when} className="grid grid-cols-1 gap-4 py-6 md:grid-cols-4">
              <p className="font-serif text-xl text-[color:var(--color-paper)]">{s.when}</p>
              <p className="md:col-span-3 text-base leading-relaxed text-[color:var(--color-paper)]/85">
                {s.what}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-2xl text-[color:var(--color-paper)]/80">
          Inversión total para la decisión: 500 € de taller piloto + tiempo de los dos. Resultado:
          datos reales para decidir si seguimos, pivotamos o paramos.
        </p>
      </Section>

      <footer className="py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="font-serif text-xl">Academia IA</p>
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
              Documento confidencial · Mayo 2026
            </p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
