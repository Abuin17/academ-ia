"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = [
  "¿Quién enseña a tu hijo a usarla — y a desconfiar de ella?",
  "¿Llevas meses entre cursos que no terminas y herramientas que ya cambiaron?",
  "¿Tu equipo la usa con criterio — o solo con acceso?",
];

const ROTATION_MS = 4000;
const DURATION = 0.6;
const EASE = [0.4, 0, 0.2, 1] as const;

export function RotatingSecondLine({ startDelay = 0 }: { startDelay?: number }) {
  const reduced = useReducedMotion();
  const [state, setState] = useState({ index: 0, prev: -1 });
  const { index, prev } = state;

  useEffect(() => {
    if (reduced) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(
      () => {
        interval = setInterval(() => {
          setState((s) => ({
            prev: s.index,
            index: (s.index + 1) % variants.length,
          }));
        }, ROTATION_MS);
      },
      ROTATION_MS + startDelay * 1000,
    );
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [startDelay, reduced]);

  return (
    <span
      aria-live="polite"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        fontStyle: "italic",
        color: "var(--text-soft)",
        textAlign: "center",
      }}
    >
      {variants.map((text, i) => {
        const isActive = i === index;
        const isPrev = i === prev && i !== index;
        return (
          <motion.span
            key={i}
            style={{ gridArea: "1 / 1" }}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={
              reduced
                ? undefined
                : {
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : isPrev ? -12 : 10,
                  }
            }
            transition={{
              duration: DURATION,
              ease: EASE,
              delay: i === 0 && prev === -1 ? startDelay : 0,
            }}
          >
            {text}
          </motion.span>
        );
      })}
    </span>
  );
}
