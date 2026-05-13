"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RevealWords } from "@/components/motion/RevealWords";
import { WaitlistForm } from "./WaitlistForm";

const EASE = [0.16, 1, 0.3, 1] as const;

const GRAIN_SVG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.94 0 0 0 0 0.93 0 0 0 0 0.9 0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      data-section-theme="dark"
      className="theme-dark relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Ambient gradients */}
      <motion.div
        aria-hidden
        initial={reduced ? false : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 1.5, ease: EASE }}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(900px circle at 50% -10%, rgba(201,169,110,0.07), transparent 55%), radial-gradient(1100px circle at 100% 110%, rgba(110,120,160,0.04), transparent 60%)",
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: GRAIN_SVG,
          backgroundSize: "220px 220px",
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      />

      <div className="container-prose relative w-full" style={{ paddingBlock: "9rem 6rem" }}>
        <div className="mx-auto max-w-[60rem] text-center">
          <motion.p
            className="eyebrow"
            initial={reduced ? false : { opacity: 0, filter: "blur(6px)" }}
            animate={reduced ? undefined : { opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          >
            Academia IA · España · 2026
          </motion.p>

          <h1 className="display mt-10">
            <RevealWords
              text="El mundo que hereda tu hijo ya funciona con IA."
              startDelay={0.55}
              staggerDelay={0.055}
              immediate
            />
            <br />
            <RevealWords
              text="¿Quién le está enseñando a pensar con ella?"
              italicWords={[
                "¿quién",
                "le",
                "está",
                "enseñando",
                "a",
                "pensar",
                "con",
                "ella?",
              ]}
              startDelay={1.35}
              staggerDelay={0.045}
              immediate
            />
          </h1>

          <motion.div
            aria-hidden
            initial={reduced ? false : { scaleX: 0, opacity: 0 }}
            animate={reduced ? undefined : { scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 2.0 }}
            style={{
              height: 1,
              width: 60,
              transformOrigin: "center",
              background: "rgba(201,169,110,0.35)",
              margin: "2.75rem auto 0",
            }}
          />

          <motion.p
            className="lede mx-auto mt-10 max-w-xl"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 2.25 }}
          >
            La primera red de academias de IA en España. Presencial. Para niños, jóvenes y
            profesionales.
          </motion.p>

          <motion.div
            className="mx-auto mt-10 max-w-xl"
            initial={reduced ? false : { opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: EASE, delay: 2.5 }}
          >
            <WaitlistForm
              variant="compact"
              submitText="Apuntarme a la lista"
              source="hero"
              wrap
            />
          </motion.div>

          <motion.p
            className="mx-auto mt-6 text-xs"
            style={{ color: "var(--text-mute)" }}
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.4, ease: EASE, delay: 2.8 }}
          >
            Abrimos en Granada primero. Después, en más ciudades.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
