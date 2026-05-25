"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Indicador discreto de scroll en la parte inferior.
 * Desaparece en cuanto el usuario empieza a hacer scroll.
 */
export function ScrollHint() {
  const reduced = useReducedMotion();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 24) setHidden(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hidden) return null;

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: reduced ? 0.6 : [0.25, 0.7, 0.25] }}
      transition={{
        duration: reduced ? 0.4 : 2.4,
        repeat: reduced ? 0 : Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "fixed",
        bottom: 36,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        color: "var(--text-mute)",
        fontFamily: "var(--font-sans)",
        fontSize: "0.62rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        pointerEvents: "none",
        zIndex: 40,
      }}
    >
      <span>Scroll</span>
      <span
        style={{
          display: "inline-block",
          width: 1,
          height: 28,
          background: "currentColor",
          opacity: 0.6,
        }}
      />
    </motion.div>
  );
}
