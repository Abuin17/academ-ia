"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

type Bloque = {
  eyebrow: string;
  title: string;
  body: string;
};

const BLOQUES: Bloque[] = [
  {
    eyebrow: "Academias de programación con IA añadida",
    title: "Enseñan a programar. La IA aparece como ingrediente.",
    body:
      "Diferencia. Su producto es enseñar a programar. El nuestro es enseñar a pensar con IA. Son productos distintos para necesidades distintas. Un alumno que ya hace programación puede hacer AI Sapiens en paralelo — no se sustituyen.",
  },
  {
    eyebrow: "Cursos online masivos",
    title: "Contenido autónomo. Tasa de finalización del 5-15%.",
    body:
      "Diferencia. Estos cursos son contenido — el alumno consume material por su cuenta. AI Sapiens es acompañamiento — el alumno aprende con un docente que le conoce y un grupo de pares. La diferencia se nota en el resultado: el alumno que termina un curso online tiene horas registradas. El alumno que termina un nivel AI Sapiens tiene un portfolio defendido.",
  },
  {
    eyebrow: "Talleres y campamentos puntuales",
    title: "Producen exposición. No producen competencia.",
    body:
      "Diferencia. La diferencia entre exposición y competencia es la diferencia entre haber tocado un instrumento una vez y saber tocarlo. AI Sapiens es la modalidad recurrente que construye competencia real, no la modalidad concentrada que produce recuerdo.",
  },
];

const BLOQUE_DESTACADO: { eyebrow: string; title: string; body: string[] } = {
  eyebrow: "Y sobre todo",
  title: "No competimos con los centros educativos. Instalamos capacidad en ellos.",
  body: [
    "Los demás proveedores compiten con los centros educativos por captar alumnos. AI Sapiens hace lo contrario: forma a los docentes del centro, les entrega el método, la plataforma, el sistema de evaluación, y los acompaña en la implementación.",
    "Es coherente con cómo se construyen sistemas educativos serios: primero se prueba directamente con alumnos, después se escala formando a los docentes que lo llevan a los centros. Cambridge English siguió exactamente esa lógica en su origen.",
  ],
};

export function Diferenciacion() {
  return (
    <section className="section" data-section-theme="dark">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal y={20}>
            <h2 className="h2" style={{ color: "var(--text)" }}>
              Lo que ya existe — y por qué no resuelve esto.
            </h2>
          </Reveal>
        </div>

        <ol
          className="mx-auto mt-16 max-w-3xl"
          style={{ listStyle: "none", padding: 0 }}
        >
          {BLOQUES.map((b, idx) => (
            <li
              key={b.title}
              style={{
                paddingBlock: "clamp(2.5rem, 6vh, 4rem)",
                borderTop: idx === 0 ? "1px solid var(--rule)" : "1px solid var(--rule)",
              }}
            >
              <Reveal y={20}>
                <p className="eyebrow">{b.eyebrow}</p>
                <h3
                  style={{
                    marginTop: "1rem",
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.55rem, 2.6vw, 2.1rem)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.015em",
                    color: "var(--text)",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  className="lede"
                  style={{ marginTop: "1.1rem", maxWidth: "60ch" }}
                >
                  {b.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Bloque destacado — el más importante */}
        <Reveal y={28} delay={0.1}>
          <div
            className="glass-primary mx-auto"
            style={{
              marginTop: "clamp(3rem, 6vh, 5rem)",
              maxWidth: 880,
              padding: "clamp(2rem, 4vw, 3.2rem)",
              borderColor: "rgba(201,169,110,0.32)",
            }}
          >
            <p
              className="eyebrow"
              style={{ color: "var(--color-accent)" }}
            >
              {BLOQUE_DESTACADO.eyebrow}
            </p>
            <h3
              style={{
                marginTop: "1.1rem",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              {BLOQUE_DESTACADO.title}
            </h3>
            <div className="mt-7 space-y-5" style={{ color: "var(--text-soft)" }}>
              {BLOQUE_DESTACADO.body.map((p, i) => (
                <p key={i} className="lede">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
