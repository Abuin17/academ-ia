"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

type Ejemplo = {
  eyebrow: string;
  title: string;
  body: string[];
  quote: string;
  attribution: string;
};

const EJEMPLOS: Ejemplo[] = [
  {
    eyebrow: "Tres chicas de 14 años · Caso real del programa",
    title: "Cómo deja de pasar lo que está pasando en su propio instituto",
    body: [
      "Tomaron tres casos documentados de deepfakes que afectaron a adolescentes en institutos españoles entre 2023 y 2025. Aplicaron la rúbrica que habían aprendido en las primeras semanas del nivel: cinco preguntas para evaluar cualquier contenido que les llegara.",
      "Identificaron qué falló en cada caso. Por qué la víctima y su entorno no fueron conscientes hasta tarde. Por qué la gente que vio los deepfakes los dio por reales.",
      "Su producto fue una presentación de ocho minutos con tres recomendaciones concretas para su propio instituto: qué protocolo activar si pasa, qué entrenar en alumnos para detectar antes, qué pedir a padres y profesores.",
      "Una de ellas se ofreció a llevar las recomendaciones al jefe de estudios de su centro.",
    ],
    quote:
      "No se va a resolver. Pero podemos no llegar tarde. Y eso depende de que sepamos verlo cuando empieza, no cuando ya ha pasado.",
    attribution: "Alumna, 14 años. Defensa pública del proyecto.",
  },
  {
    eyebrow: "Un chico de 13 años · Caso real del programa",
    title: "Porque me iba a tocar a mí en cuatro años",
    body: [
      "Eligió el caso documentado del sistema de filtrado de currículums de Amazon que descartaba candidatas mujeres. Lo analizó aplicando la misma rúbrica.",
      "Identificó qué operación falló. No fue Evaluar — fue Entender. Amazon no entendió que entrenar un modelo con datos históricos de contrataciones, mayoritariamente hombres en cargos técnicos, iba a perpetuar el sesgo.",
      "Su producto fue una pieza de seis minutos con un análisis claro del caso y una pregunta final que dejó al público.",
      "Cuando le preguntaron por qué había elegido ese caso, respondió con la frase que aparece debajo. La sala se quedó en silencio.",
    ],
    quote:
      "Porque me iba a tocar a mí en cuatro años, cuando empiece a buscar prácticas. Si los sistemas de selección filtran a la gente con sesgos, quiero saber cómo funcionan antes de que me filtren a mí.",
    attribution: "Alumno, 13 años. Defensa pública del proyecto.",
  },
];

function Ejemplo({ data }: { data: Ejemplo }) {
  const reduced = useReducedMotion();

  return (
    <article
      style={{
        paddingBlock: "clamp(5rem, 14vh, 9rem)",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <Container>
        <div className="mx-auto max-w-2xl">
          <Reveal y={18}>
            <p className="eyebrow">{data.eyebrow}</p>
          </Reveal>

          <Reveal y={22} delay={0.05}>
            <h3
              className="h2"
              style={{ marginTop: "1.4rem", color: "var(--text)" }}
            >
              {data.title}
            </h3>
          </Reveal>

          <div className="mt-10 space-y-5" style={{ color: "var(--text-soft)" }}>
            {data.body.map((p, i) => (
              <Reveal key={i} y={16} delay={0.1 + i * 0.05}>
                <p className="lede">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Cita destacada — entrada más cinemática */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.95, y: 24 }}
          whileInView={
            reduced ? undefined : { opacity: 1, scale: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
          style={{
            marginTop: "clamp(3.5rem, 7vh, 5rem)",
            marginInline: "auto",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              position: "relative",
              paddingLeft: "clamp(1.5rem, 3vw, 2.5rem)",
              borderLeft: "1px solid var(--color-accent-border)",
            }}
          >
            <blockquote
              style={{
                margin: 0,
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3.4vw, 2.9rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              <span style={{ color: "var(--color-accent)" }}>“</span>
              {data.quote}
              <span style={{ color: "var(--color-accent)" }}>”</span>
            </blockquote>
            <p
              style={{
                marginTop: "1.1rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                color: "var(--text-mute)",
              }}
            >
              {data.attribution}
            </p>
          </div>
        </motion.div>
      </Container>
    </article>
  );
}

export function EjemplosNarrados() {
  return (
    <section data-section-theme="dark">
      {EJEMPLOS.map((e) => (
        <Ejemplo key={e.title} data={e} />
      ))}

      <div
        style={{
          paddingBlock: "clamp(4rem, 10vh, 7rem)",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <Container>
          <Reveal y={22}>
            <p
              className="mx-auto text-center"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                lineHeight: 1.4,
                maxWidth: "32ch",
                color: "var(--text)",
              }}
            >
              Esto es lo que produce el marco cuando funciona. No alumnos que
              saben usar ChatGPT. Alumnos que saben{" "}
              <span style={{ color: "var(--color-accent)" }}>pensar con él</span>.
            </p>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
