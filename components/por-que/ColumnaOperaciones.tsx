"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

type Operacion = {
  number: string;
  name: string;
  body: string;
};

const OPERACIONES: Operacion[] = [
  {
    number: "01",
    name: "Ver",
    body:
      "Hacerse consciente de dónde está la IA y qué está haciendo cuando yo no me doy cuenta.",
  },
  {
    number: "02",
    name: "Entender",
    body:
      "Saber qué es realmente esto que estoy usando, cómo aprende, por qué a veces acierta y por qué a veces falla.",
  },
  {
    number: "03",
    name: "Evaluar",
    body:
      "Saber distinguir, en lo que la IA me da, qué es bueno, qué es malo, qué es peligroso, qué es sesgado.",
  },
  {
    number: "04",
    name: "Usar con criterio",
    body:
      "Decidir cuándo me ayuda usar IA y cuándo me perjudica. Saber cómo usarla para que potencie mi pensamiento en lugar de sustituirlo.",
  },
  {
    number: "05",
    name: "Crear con autoría",
    body:
      "Producir cosas con ayuda de IA donde queda claro, para mí y para los demás, que yo soy el autor.",
  },
];

function BlockRow({
  op,
  index,
  total,
  scrollYProgress,
}: {
  op: Operacion;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  // "Activo" = el bloque más cerca del centro del viewport.
  const inViewActive = useInView(ref, {
    margin: "-45% 0px -45% 0px",
  });

  // Cada bloque tiene un intervalo en el progreso de scroll donde aparece.
  // Repartimos el rango [0, 1] entre los bloques. La línea va por delante
  // de la aparición de los bloques (cada bloque entra al 55% de su tramo).
  const slot = 1 / total;
  const start = index * slot;
  const trigger = start + slot * 0.45;
  const settle = start + slot * 0.85;

  const baseOpacity = useTransform(
    scrollYProgress,
    [start, trigger, settle],
    reduced ? [1, 1, 1] : [0, 0.5, 1]
  );

  const x = useTransform(
    scrollYProgress,
    [start, settle],
    reduced ? [0, 0] : [30, 0]
  );

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        paddingLeft: "clamp(3rem, 7vw, 5rem)",
        paddingBlock: "clamp(2.5rem, 6vh, 4.5rem)",
      }}
    >
      {/* Punto en la línea */}
      <motion.span
        aria-hidden
        style={{
          opacity: baseOpacity,
          position: "absolute",
          left: "calc(clamp(3rem, 7vw, 5rem) / 2)",
          top: "calc(clamp(2.5rem, 6vh, 4.5rem) + 0.4em)",
          transform: "translateX(-50%)",
          width: inViewActive ? 14 : 9,
          height: inViewActive ? 14 : 9,
          borderRadius: 999,
          background: "var(--color-accent)",
          boxShadow: inViewActive
            ? "0 0 0 6px rgba(201,169,110,0.18)"
            : "0 0 0 3px rgba(201,169,110,0.10)",
          transition: "width 0.4s ease, height 0.4s ease, box-shadow 0.4s ease",
        }}
      />

      <motion.div
        style={{
          opacity: reduced ? 1 : baseOpacity,
          x: reduced ? 0 : x,
          // Estado activo / inactivo: la diferencia es sutilmente perceptible.
          filter: inViewActive ? "none" : reduced ? "none" : undefined,
        }}
        animate={
          reduced
            ? undefined
            : {
                // Atenuamos los bloques no activos cuando ya están totalmente revelados.
                opacity: inViewActive ? 1 : undefined,
              }
        }
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.div
          animate={{ opacity: inViewActive || reduced ? 1 : 0.45 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span
              className="eyebrow"
              style={{ color: "var(--text-mute)", fontSize: "0.7rem" }}
            >
              {op.number}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.85rem, 3vw, 2.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {op.name}
            </h3>
          </div>
          <p
            className="lede"
            style={{
              marginTop: "0.9rem",
              maxWidth: "52ch",
              fontSize: "clamp(1rem, 1.15vw, 1.15rem)",
            }}
          >
            {op.body}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function ColumnaOperaciones() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // El progreso del scroll de la sección controla:
  // 1) la altura de la línea vertical
  // 2) la entrada por umbrales de cada bloque
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  // La línea se "dibuja" de arriba hacia abajo: scaleY 0 → 1 anclada arriba.
  const lineScaleY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [1, 1] : [0, 1]
  );

  return (
    <section className="section" data-section-theme="dark">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal y={20}>
            <h2 className="h2" style={{ color: "var(--text)" }}>
              No enseñamos herramientas. Enseñamos a pensar con ellas.
            </h2>
          </Reveal>
          <Reveal y={18} delay={0.1}>
            <p
              className="lede"
              style={{
                marginTop: "1.6rem",
                marginInline: "auto",
                maxWidth: "44ch",
              }}
            >
              Las herramientas cambiarán cada seis meses. Las operaciones
              mentales que permiten convivir con ellas se quedan.
            </p>
          </Reveal>
        </div>

        <div
          ref={containerRef}
          style={{
            position: "relative",
            marginTop: "clamp(4rem, 10vh, 7rem)",
            marginInline: "auto",
            maxWidth: 760,
          }}
        >
          {/* Línea de fondo (gris fina) */}
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "calc(clamp(3rem, 7vw, 5rem) / 2)",
              width: 1,
              background: "var(--rule)",
            }}
          />
          {/* Línea activa (oro), scaleY anclada arriba */}
          <motion.span
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "calc(clamp(3rem, 7vw, 5rem) / 2)",
              width: 1,
              background: "var(--color-accent)",
              transformOrigin: "top",
              scaleY: lineScaleY,
              opacity: 0.85,
            }}
          />

          {OPERACIONES.map((op, idx) => (
            <BlockRow
              key={op.number}
              op={op}
              index={idx}
              total={OPERACIONES.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-2xl text-center">
          <Reveal y={20}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
                lineHeight: 1.5,
                color: "var(--text-soft)",
              }}
            >
              Cinco operaciones. Una columna vertebral. Y un orden específico:
              el alumno no llega en blanco — llega ya usando IA sin criterio.
              Por eso empezamos por{" "}
              <span style={{ color: "var(--color-accent)" }}>Ver</span>, no por{" "}
              <span style={{ color: "var(--color-accent)" }}>Crear</span>.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
