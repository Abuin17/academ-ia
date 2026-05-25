"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealWords } from "@/components/motion/RevealWords";
import { Reveal } from "@/components/motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

type SceneProps = {
  primary: string;
  closing: string;
  isFirst?: boolean;
};

/**
 * Cada escena ocupa la pantalla completa. El texto principal hace stagger por
 * palabra. El texto de cierre entra ~800ms después. La escena hace fade-out
 * + translate-y negativo cuando el usuario hace scroll fuera (escena 1 → 2).
 */
function Scene({ primary, closing, isFirst = false }: SceneProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  // Progreso del scroll mientras la escena sale del viewport.
  // 0 = sección anclada en su sitio, 1 = sección completamente sobre la parte de arriba.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Fade-out + translate-y negativo a medida que el usuario se desplaza fuera.
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduced ? [1, 1, 1] : [1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [0, -30]
  );

  // El número de palabras determina el delay del closing.
  const wordCount = primary.split(/\s+/).length;
  const closingDelay = 0.08 * wordCount + 0.8;

  return (
    <section
      ref={ref}
      className="relative flex items-center"
      style={{ minHeight: "100vh" }}
    >
      <motion.div
        className="container-prose w-full"
        style={{ opacity, y }}
      >
        <div className="mx-auto max-w-3xl py-24">
          <motion.h2
            className="display"
            style={{ fontSize: "clamp(2rem, 4.8vw, 4rem)", whiteSpace: "pre-line" }}
            initial={false}
          >
            {primary.split("\n\n").map((paragraph, pIdx) => (
              <span key={pIdx} className="block" style={{ marginTop: pIdx === 0 ? 0 : "1.4em" }}>
                <RevealWords
                  text={paragraph}
                  staggerDelay={0.08}
                  startDelay={isFirst ? 0.25 + pIdx * 0.4 : pIdx * 0.4}
                  immediate={isFirst}
                />
              </span>
            ))}
          </motion.h2>

          <motion.p
            className="lede"
            style={{
              marginTop: "clamp(2rem, 4vh, 3rem)",
              maxWidth: "44ch",
              fontSize: "clamp(0.95rem, 1.05vw, 1.1rem)",
              color: "var(--text-mute)",
            }}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={isFirst ? (reduced ? undefined : { opacity: 1, y: 0 }) : undefined}
            whileInView={isFirst ? undefined : reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={isFirst ? undefined : { once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: EASE, delay: closingDelay }}
          >
            {closing}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

export function Apertura() {
  return (
    <>
      <Scene
        isFirst
        primary={[
          "Marzo de 2026. Un chico de 15 años entrega un trabajo de filosofía sobre Kant. El profesor le pone un sobresaliente.",
          "Diez minutos después, descubre que el trabajo está enteramente generado por ChatGPT — incluida una cita de Kant que no existe en ninguna obra de Kant.",
        ].join("\n\n")}
        closing="El profesor se queda con dos preguntas que el sistema educativo no sabe responder todavía: ¿cómo lo califico? ¿qué hago la próxima vez?"
      />

      <Scene
        primary={[
          "Un padre revisa la tablet de su hija de 11 años. Descubre que lleva tres meses manteniendo conversaciones diarias con un chatbot que la llama 'mi mejor amiga'.",
          "La hija no quiere borrarlo.",
        ].join("\n\n")}
        closing="El padre no sabe si esto es como tener un diario imaginario o como tener un extraño en casa. Nadie le ha enseñado a distinguir."
      />

      {/* Tercer panel a media altura: la frase pivote */}
      <section
        className="flex items-center justify-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="container-prose">
          <Reveal y={28} duration={0.9} amount={0.4}>
            <p
              className="display mx-auto text-center"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3.4rem)",
                maxWidth: "22ch",
                color: "var(--text)",
              }}
            >
              Esto pasa ahora. Y no sabemos enseñar a evitarlo.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
