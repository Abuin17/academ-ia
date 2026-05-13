"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

type Props = {
  text: string;
  className?: string;
  italicWords?: string[];
  accentWords?: string[];
  staggerDelay?: number;
  startDelay?: number;
  immediate?: boolean;
};

export function RevealWords({
  text,
  className,
  italicWords = [],
  accentWords = [],
  staggerDelay = 0.05,
  startDelay = 0,
  immediate = false,
}: Props) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const italic = new Set(italicWords.map((w) => w.toLowerCase()));
  const accent = new Set(accentWords.map((w) => w.toLowerCase()));

  const trigger = immediate ? "animate" : "whileInView";
  const viewportProps = immediate
    ? {}
    : { viewport: { once: true, amount: 0.2 } };

  return (
    <motion.span
      className={className}
      initial={reduced ? false : "hidden"}
      {...(immediate
        ? { animate: reduced ? undefined : "show" }
        : { whileInView: reduced ? undefined : "show", ...viewportProps })}
      transition={{
        staggerChildren: reduced ? 0 : staggerDelay,
        delayChildren: reduced ? 0 : startDelay,
      }}
      variants={{ hidden: {}, show: {} }}
    >
      {words.map((word, i) => {
        const clean = word.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
        const isItalic = italic.has(clean);
        const isAccent = accent.has(clean);
        return (
          <motion.span
            key={i}
            className="inline-block"
            style={{
              fontStyle: isItalic ? "italic" : undefined,
              color: isAccent ? "var(--color-accent)" : undefined,
              marginRight: "0.25em",
              whiteSpace: "pre",
            }}
            variants={
              reduced
                ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
                : {
                    hidden: { opacity: 0, y: 30 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease: EASE },
                    },
                  }
            }
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
