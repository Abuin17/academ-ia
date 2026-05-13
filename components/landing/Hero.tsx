"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RevealWords } from "@/components/motion/RevealWords";
import { WaitlistForm } from "./WaitlistForm";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      data-section-theme="dark"
      className="theme-dark relative flex items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container-prose w-full" style={{ paddingBlock: "9rem 6rem" }}>
        <div className="mx-auto max-w-[58rem] text-center">
          <motion.p
            className="eyebrow"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
          >
            Academia IA · España · 2026
          </motion.p>

          <h1 className="display mt-10">
            <RevealWords
              text="El mundo que hereda tu hijo ya funciona con IA."
              startDelay={0.5}
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
              startDelay={1.3}
              staggerDelay={0.04}
              immediate
            />
          </h1>

          <motion.div
            aria-hidden
            initial={reduced ? false : { width: 0, opacity: 0 }}
            animate={reduced ? undefined : { width: 80, opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 2.0 }}
            style={{
              height: 1,
              background: "var(--rule)",
              margin: "2.5rem auto 0",
            }}
          />

          <motion.p
            className="lede mx-auto mt-10 max-w-xl"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 2.3 }}
          >
            Academia IA — formación presencial en España. Para niños, jóvenes y profesionales.
          </motion.p>

          <motion.div
            className="mx-auto mt-10 max-w-xl"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 2.6 }}
          >
            <WaitlistForm
              variant="compact"
              submitText="Apuntarme a la lista de espera"
              source="hero"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
