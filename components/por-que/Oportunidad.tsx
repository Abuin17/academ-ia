"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

type Consequence = {
  number: string;
  eyebrow: string;
  body: string;
};

const CONSEQUENCES: Consequence[] = [
  {
    number: "01",
    eyebrow: "La consecuencia invisible",
    body:
      "Una persona que delega sistemáticamente operaciones mentales en una herramienta — recordar, analizar, evaluar, decidir — atrofia esas operaciones. La investigación reciente del MIT Media Lab, de Wharton y de Microsoft Research lo documenta con un nombre técnico: *cognitive offloading*.\n\nNo es una metáfora. Es una observación empírica que se está acumulando en estudios independientes.",
  },
  {
    number: "02",
    eyebrow: "La consecuencia visible",
    body:
      "Adolescentes que mantienen conversaciones diarias con chatbots están desarrollando vínculos parasociales que la Asociación Americana de Psicología, Stanford, UNESCO y Common Sense Media han identificado como un riesgo serio para su desarrollo socio-emocional.\n\nNiños que delegan en ChatGPT las tareas que antes desarrollaban su capacidad de redacción. Adolescentes que entregan trabajos cuyo contenido no han leído porque 'lo ha escrito la IA'.",
  },
  {
    number: "03",
    eyebrow: "La consecuencia estructural",
    body:
      "Las empresas europeas están legalmente obligadas, desde febrero de 2025, a garantizar un nivel suficiente de alfabetización en IA del personal — Artículo 4 del Reglamento Europeo de IA.\n\nPero no existe un estándar pedagógico claro de qué significa 'alfabetización en IA'. Cada centro y cada empresa improvisa.",
  },
];

// Renderiza prosa con *italic* y \n\n para párrafos.
function renderInline(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={idx} style={{ fontStyle: "italic", color: "var(--text)" }}>
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

function ProseParagraphs({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split("\n\n").map((para, i) => (
        <p key={i} className={className}>
          {renderInline(para)}
        </p>
      ))}
    </>
  );
}

export function Oportunidad() {
  const reduced = useReducedMotion();

  return (
    <section className="section" data-section-theme="dark">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Reveal y={20}>
            <h2 className="h2" style={{ color: "var(--text)" }}>
              La primera vez en la historia que una tecnología masiva llega
              antes que su pedagogía.
            </h2>
          </Reveal>

          <div
            className="mt-12 space-y-6"
            style={{ color: "var(--text-soft)" }}
          >
            <Reveal y={18} delay={0.05}>
              <p className="lede">
                En 2022, una herramienta conversacional alcanzó cien millones de
                usuarios en dos meses. Hoy, cuatro años después, está integrada
                en cómo nuestros hijos hacen los deberes, en cómo los
                adolescentes preparan exámenes, en cómo los profesionales
                redactan correos, contratos y propuestas.
              </p>
            </Reveal>

            <Reveal y={18} delay={0.1}>
              <p className="lede">
                Lo extraordinario no es la velocidad de adopción. Es que esa
                adopción se ha producido sin que ninguna institución educativa
                haya tenido tiempo de enseñar a usar lo adoptado.
              </p>
            </Reveal>

            <Reveal y={18} delay={0.15}>
              <p className="lede">
                Aprendimos a leer antes de leer prensa. Aprendimos a hacer
                cuentas antes de ir al mercado. Cuando llegó Google, las
                escuelas tardaron años pero terminaron enseñando a usarlo con
                criterio.
              </p>
            </Reveal>

            <Reveal y={18} delay={0.2}>
              <p className="lede">
                Con la inteligencia artificial generativa no ha pasado eso. La
                curva de adopción ha sido tan rápida que el aprendizaje formal
                va por detrás. Y eso tiene consecuencias.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Tres consecuencias */}
        <ol
          className="mx-auto mt-24 max-w-2xl"
          style={{ listStyle: "none", padding: 0 }}
        >
          {CONSEQUENCES.map((c, idx) => (
            <li
              key={c.number}
              style={{
                paddingBlock: "clamp(2.5rem, 6vh, 4rem)",
                borderTop: idx === 0 ? "none" : "1px solid var(--rule)",
              }}
            >
              <motion.div
                initial={reduced ? false : "hidden"}
                whileInView={reduced ? undefined : "show"}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.2, delayChildren: idx * 0.05 }}
                variants={{ hidden: {}, show: {} }}
              >
                <motion.p
                  className="display"
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    marginBottom: "1.25rem",
                  }}
                  variants={
                    reduced
                      ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
                      : {
                          hidden: { opacity: 0, y: 20 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                        }
                  }
                >
                  {c.number}
                </motion.p>
                <motion.p
                  className="eyebrow"
                  style={{ marginBottom: "0.9rem" }}
                  variants={
                    reduced
                      ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
                      : {
                          hidden: { opacity: 0, y: 14 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                        }
                  }
                >
                  {c.eyebrow}
                </motion.p>
                <motion.div
                  variants={
                    reduced
                      ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
                      : {
                          hidden: { opacity: 0, y: 12 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                        }
                  }
                >
                  <ProseParagraphs
                    text={c.body}
                    className="lede"
                  />
                </motion.div>
              </motion.div>
            </li>
          ))}
        </ol>

        {/* Cierre de sección */}
        <div className="mx-auto mt-20 max-w-2xl">
          <Reveal y={20}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)",
                lineHeight: 1.45,
                color: "var(--text)",
                letterSpacing: "-0.01em",
              }}
            >
              Lo que el momento exige no existe todavía:{" "}
              <strong style={{ fontWeight: 400, color: "var(--text)" }}>
                una pedagogía construida específicamente para enseñar a pensar
                con IA, con acompañamiento humano real, con un currículo que se
                mantiene actualizado mientras las herramientas cambian.
              </strong>
            </p>
          </Reveal>

          <Reveal y={20} delay={0.2}>
            <p
              style={{
                marginTop: "1.4rem",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)",
                lineHeight: 1.45,
                color: "var(--text-soft)",
              }}
            >
              La ventana para construir ese referente educativo está abierta.
            </p>
          </Reveal>

          {/* Pausa deliberada — 1.5s extra de delay */}
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.5 }}
            style={{
              marginTop: "0.8rem",
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)",
              lineHeight: 1.45,
              color: "var(--color-accent)",
              letterSpacing: "-0.01em",
            }}
          >
            No durante mucho tiempo.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
