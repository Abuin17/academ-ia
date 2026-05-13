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
  staggerDelay = 0.06,
  startDelay = 0,
  immediate = false,
}: Props) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const italic = new Set(italicWords.map((w) => w.toLowerCase()));
  const accent = new Set(accentWords.map((w) => w.toLowerCase()));

  return (
    <motion.span
      className={className}
      initial={reduced ? false : "hidden"}
      {...(immediate
        ? { animate: reduced ? undefined : "show" }
        : {
            whileInView: reduced ? undefined : "show",
            viewport: { once: true, amount: 0.15 },
          })}
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
          <span className="word-mask" key={i}>
            <motion.span
              style={{
                fontStyle: isItalic ? "italic" : undefined,
                color: isAccent ? "var(--color-accent)" : undefined,
              }}
              variants={
                reduced
                  ? { hidden: { y: 0, opacity: 1 }, show: { y: 0, opacity: 1 } }
                  : {
                      hidden: { y: "110%", opacity: 0 },
                      show: {
                        y: "0%",
                        opacity: 1,
                        transition: { duration: 0.7, ease: EASE },
                      },
                    }
              }
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
