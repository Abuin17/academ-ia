import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Puente narrativo entre Oportunidad y ColumnaOperaciones.
 *
 * Sección deliberadamente sobria: respiración entre el clímax de Oportunidad
 * ("No durante mucho tiempo") y el sistema de las cinco operaciones. Sin
 * stagger por palabra, sin scroll-trigger sofisticado — solo fade + y suave
 * a través del componente Reveal, que ya respeta prefers-reduced-motion.
 */
export function Puente() {
  return (
    <section
      data-section-theme="dark"
      className="flex flex-col justify-center"
      style={{
        minHeight: "100vh",
        paddingBlock: "clamp(7rem, 16vh, 11rem)",
      }}
    >
      <Container>
        <div className="mx-auto" style={{ maxWidth: 640 }}>
          {/* Bloque 1 — Titular */}
          <Reveal y={20} duration={0.6}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(1.85rem, 3.6vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                margin: 0,
              }}
            >
              Entonces, ¿qué tendría que ser cierto para resolverlo?
            </h2>
          </Reveal>

          {/* Bloque 2 — Subtítulo */}
          <Reveal y={20} duration={0.6} delay={0.1}>
            <p
              style={{
                marginTop: "1.4rem",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                color: "var(--text-soft)",
              }}
            >
              No basta con enseñar a usar la herramienta. Y enseñar a usarla en
              el orden equivocado empeora el problema en lugar de resolverlo.
            </p>
          </Reveal>

          {/* Separador visual generoso */}
          <Reveal y={12} duration={0.6} delay={0.15}>
            <div
              aria-hidden
              style={{
                marginBlock: "clamp(3.5rem, 7vh, 5rem)",
                height: 1,
                width: 64,
                background: "var(--rule)",
              }}
            />
          </Reveal>

          {/* Bloque 3 — Párrafo */}
          <Reveal y={20} duration={0.6}>
            <p className="lede" style={{ fontSize: "1.075rem" }}>
              La respuesta del mercado actual ha sido empezar por enseñar a
              usar la herramienta. Cursos de ChatGPT, talleres de prompt
              engineering, certificaciones de productividad. Todos arrancan en
              el mismo punto: el alumno se sienta delante de la pantalla y
              aprende a formular prompts.
            </p>
          </Reveal>
          <Reveal y={20} duration={0.6} delay={0.08}>
            <p
              className="lede"
              style={{ marginTop: "1.2rem", fontSize: "1.075rem" }}
            >
              Hay un problema pedagógico que esos cursos no ven.
            </p>
          </Reveal>

          {/* Bloque 4 — Frase destacada */}
          <Reveal y={22} duration={0.7} delay={0.1}>
            <p
              style={{
                marginBlock: "clamp(2.5rem, 5vh, 3.5rem)",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.45rem, 2.6vw, 2rem)",
                lineHeight: 1.3,
                letterSpacing: "-0.015em",
                color: "var(--text)",
              }}
            >
              El alumno no llega en blanco. Llega ya usando inteligencia
              artificial — usándola mal, sin criterio, sin saber siquiera dónde
              está.
            </p>
          </Reveal>

          {/* Bloque 5 — Párrafo */}
          <Reveal y={20} duration={0.6}>
            <p className="lede" style={{ fontSize: "1.075rem" }}>
              Es como enseñar a alguien a conducir un coche cuando esa persona
              lleva tres años conduciéndolo. Sin saber que es un coche. Sin
              saber cómo funciona. Sin haber aprendido a frenar.
            </p>
          </Reveal>
          <Reveal y={20} duration={0.6} delay={0.08}>
            <p
              className="lede"
              style={{ marginTop: "1.2rem", fontSize: "1.075rem" }}
            >
              Empezar la clase explicando cómo se acelera no resuelve el
              problema. Lo agrava.
            </p>
          </Reveal>

          {/* Bloque 6 — Párrafo con "retrospectiva" en énfasis */}
          <Reveal y={20} duration={0.6} delay={0.05}>
            <p
              className="lede"
              style={{ marginTop: "clamp(2rem, 4vh, 2.8rem)", fontSize: "1.075rem" }}
            >
              La secuencia correcta para este alumno no es lineal hacia
              adelante. Es{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--text)",
                }}
              >
                retrospectiva
              </em>
              .
            </p>
          </Reveal>
          <Reveal y={20} duration={0.6} delay={0.1}>
            <p
              className="lede"
              style={{ marginTop: "1.2rem", fontSize: "1.075rem" }}
            >
              Hay que llevarlo hacia atrás. Hacerle ver lo que ya está haciendo
              sin saberlo. Enseñarle a entender qué está ocurriendo por dentro.
              Darle criterio para evaluar lo que la herramienta le devuelve. Y
              solo entonces — solo entonces — dejarle usar y crear con
              conocimiento.
            </p>
          </Reveal>

          {/* Bloque 7 — Cierre destacado (border-left de acento) */}
          <Reveal y={22} duration={0.7} delay={0.4}>
            <div
              style={{
                marginTop: "clamp(3rem, 6vh, 4.5rem)",
                paddingLeft: "clamp(1.25rem, 2.5vw, 1.75rem)",
                borderLeft: "2px solid var(--color-accent-border)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)",
                  lineHeight: 1.35,
                  letterSpacing: "-0.015em",
                  color: "var(--text)",
                }}
              >
                Cinco operaciones mentales. En un orden específico, que no es
                el orden intuitivo. Porque el alumno no necesita aprender a
                usar la IA — necesita aprender a no dejarse usar por ella
                primero.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
