"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

type Puerta = {
  ruta: "inversor" | "operador";
  label: string;
  title: string;
  subtext: string;
};

const PUERTAS: Puerta[] = [
  {
    ruta: "inversor",
    label: "Ruta 1",
    title: "Estoy mirando esto como oportunidad de venture",
    subtext: "Para inversores, emprendedores y partners estratégicos.",
  },
  {
    ruta: "operador",
    label: "Ruta 2",
    title: "Dirijo un centro educativo",
    subtext:
      "Para directores, fundadores y responsables académicos de centros que se plantean incorporar el marco.",
  },
];

function Puerta({ data, idx }: { data: Puerta; idx: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE, delay: idx * 0.15 }}
      whileHover={
        reduced
          ? undefined
          : {
              scale: 1.02,
              transition: { duration: 0.4, ease: EASE },
            }
      }
      style={{ height: "100%" }}
    >
      <Link
        href={`/por-que/acceso?ruta=${data.ruta}`}
        className="glass-secondary group"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.4rem",
          padding: "clamp(2rem, 3.5vw, 3rem)",
          height: "100%",
          textDecoration: "none",
          color: "inherit",
          borderRadius: 16,
        }}
      >
        <p className="eyebrow">{data.label}</p>

        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            margin: 0,
          }}
        >
          {data.title}
        </h3>

        <p
          className="lede"
          style={{ margin: 0, color: "var(--text-soft)" }}
        >
          {data.subtext}
        </p>

        <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
          <span
            className="btn-outline"
            style={{ display: "inline-flex" }}
          >
            Entrar
            <span
              aria-hidden
              style={{
                marginLeft: 8,
                display: "inline-block",
                transition: "transform 0.3s ease",
              }}
              className="group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function Bifurcacion() {
  return (
    <section
      className="section"
      data-section-theme="dark"
      style={{ paddingBlockEnd: "clamp(7rem, 14vh, 10rem)" }}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal y={20}>
            <h2 className="display" style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}>
              ¿Qué te trae aquí?
            </h2>
          </Reveal>
          <Reveal y={18} delay={0.08}>
            <p
              className="lede"
              style={{
                marginTop: "1.6rem",
                marginInline: "auto",
                maxWidth: "50ch",
              }}
            >
              Hay dos rutas a partir de aquí. Cada una requiere acceso. Si
              tienes contraseña, elige tu ruta.
            </p>
          </Reveal>
        </div>

        <div
          className="mx-auto mt-16"
          style={{
            display: "grid",
            gap: "clamp(1rem, 2vw, 1.75rem)",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            maxWidth: 1000,
          }}
        >
          {PUERTAS.map((p, idx) => (
            <Puerta key={p.ruta} data={p} idx={idx} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-xl text-center">
          <Reveal y={14}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                color: "var(--text-mute)",
              }}
            >
              Si no tienes contraseña y crees que deberías tenerla, sabes a
              quién escribir.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
