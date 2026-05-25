import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PorqueNav } from "@/components/por-que/PorqueNav";
import {
  EditorialClosing,
  EditorialHeader,
  EditorialList,
  EditorialParagraph,
  EditorialSection,
} from "@/components/por-que/EditorialPage";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hola@aisapiens.es";

const APORTA_CENTRO = [
  "Conocimiento de tus familias y su disposición a pagar por formación complementaria.",
  "Espacio físico (si aplica) y gestión de la convocatoria de grupos.",
  "Docentes que ya tienen experiencia pedagógica — no buscamos perfiles técnicos, buscamos docentes.",
  "Relación de confianza con las familias que el marco no puede construir desde fuera.",
];

const APORTA_SAPIENS = [
  "Marco pedagógico propio basado en evidencia (AILit Framework, Long & Magerko, Cambridge Digital Literacy, investigación reciente sobre cognitive offloading).",
  "Programa completo de formación de tus docentes (cinco meses, con certificación).",
  "Plataforma técnica donde alumnos construyen su portfolio.",
  "Currículo que se actualiza trimestralmente desde central — la carga de seguir un campo que cambia rápidamente está fuera de tu mesa.",
  "Sistema de evaluación con rúbricas, showcase, certificación de nivel.",
  "Soporte continuo a tus docentes (sesiones de actualización, comunidad de práctica, mentoría).",
];

export default function OperadorPage() {
  return (
    <>
      <PorqueNav />
      <main>
        <EditorialHeader
          eyebrow="Ruta 2 · Director / Fundador / Responsable académico"
          title="Por qué esto encaja en tu centro — y qué hace que funcione"
        />

        <EditorialSection
          index={1}
          subtitle="La realidad que ya estás viviendo. Probablemente esto te suena."
        >
          <EditorialParagraph>
            Las familias de tu centro tienen preguntas que hace dos años no
            tenían. Algunas son explícitas: &lsquo;¿qué hacemos con que mi hijo
            use ChatGPT para todo?&rsquo;. Otras son silenciosas pero
            presentes: el padre que ve a su hija conversar a diario con un
            chatbot y no sabe si intervenir.
          </EditorialParagraph>
          <EditorialParagraph>
            Los profesores de tu equipo están en la misma situación. Detectan
            tareas hechas con IA. No saben cómo evaluarlas. No saben cómo
            enseñar a usar la herramienta sin penalizarla ni endiosarla.
          </EditorialParagraph>
          <EditorialParagraph>
            Y todo esto ocurre en un momento en el que tu centro tiene que
            decidir algo: si ofrecer formación específica en IA o no. Si la
            ofreces tú con tus medios, te enfrentas a un campo que cambia cada
            trimestre y a un currículo que no existe. Si no la ofreces,
            alguien la ofrecerá fuera y captará el tiempo de tus familias.
          </EditorialParagraph>
          <EditorialParagraph>
            Esto es exactamente el problema que AI Sapiens resuelve para
            centros como el tuyo.
          </EditorialParagraph>
        </EditorialSection>

        <EditorialSection
          index={2}
          subtitle="El modelo que te proponemos. No competimos contigo. Te instalamos capacidad."
        >
          <EditorialParagraph>
            Hay dos modelos de cómo un proveedor externo entra en un centro
            educativo.
          </EditorialParagraph>
          <EditorialParagraph>
            <strong style={{ fontWeight: 500, color: "var(--text)" }}>
              El primero — el de la mayoría de proveedores — es competitivo:
            </strong>{" "}
            el proveedor capta a tus alumnos para impartirles formación fuera
            de tu centro. Tú pierdes el tiempo, el vínculo con la familia y la
            captación de un servicio que podrías haber ofrecido tú.
          </EditorialParagraph>
          <EditorialParagraph>
            <strong style={{ fontWeight: 500, color: "var(--text)" }}>
              El segundo — el nuestro — es de instalación de capacidad:
            </strong>{" "}
            AI Sapiens forma a tus docentes en el marco, te entrega la
            plataforma, el currículo, el sistema de evaluación y la
            actualización trimestral del contenido. Los docentes que forma AI
            Sapiens son tus docentes — siguen siendo tu equipo, simplemente
            certificados en un marco específico. El programa lo imparte tu
            centro, con tu marca, en tu espacio.
          </EditorialParagraph>
          <EditorialParagraph>
            Este es el modelo de Fase 2. Y es el que justifica que invirtamos
            en formar a tus docentes en lugar de captar a tus alumnos.
          </EditorialParagraph>
        </EditorialSection>

        {/* Sección 3 con dos columnas: Lo que aportas tú / Lo que aporta AI Sapiens */}
        <section
          style={{
            paddingBlock: "clamp(3.5rem, 8vh, 6rem)",
            borderTop: "1px solid var(--rule)",
          }}
        >
          <Container>
            <div className="mx-auto" style={{ maxWidth: 760 }}>
              <Reveal y={14}>
                <p className="eyebrow" style={{ color: "var(--text-mute)" }}>
                  03
                </p>
              </Reveal>
              <Reveal y={18} delay={0.05}>
                <h2
                  style={{
                    marginTop: "1rem",
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.015em",
                    color: "var(--text)",
                  }}
                >
                  Qué hace que funcione en tu realidad. Lo que aporta cada
                  parte.
                </h2>
              </Reveal>
            </div>

            <div
              className="mx-auto mt-12"
              style={{
                display: "grid",
                gap: "clamp(1.25rem, 2.5vw, 2rem)",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                maxWidth: 1000,
              }}
            >
              <Reveal y={18}>
                <div
                  className="glass-secondary"
                  style={{
                    padding: "clamp(1.75rem, 3vw, 2.4rem)",
                    height: "100%",
                  }}
                >
                  <p className="eyebrow">Lo que aportas tú (el centro)</p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "1.4rem 0 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.9rem",
                    }}
                  >
                    {APORTA_CENTRO.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "auto 1fr",
                          gap: "0.7rem",
                          color: "var(--text-soft)",
                        }}
                      >
                        <span
                          aria-hidden
                          style={{
                            color: "var(--color-accent)",
                            fontFamily: "var(--font-serif)",
                          }}
                        >
                          —
                        </span>
                        <span className="lede" style={{ fontSize: "1rem" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal y={18} delay={0.08}>
                <div
                  className="glass-secondary"
                  style={{
                    padding: "clamp(1.75rem, 3vw, 2.4rem)",
                    height: "100%",
                    borderColor: "var(--color-accent-border)",
                  }}
                >
                  <p className="eyebrow" style={{ color: "var(--color-accent)" }}>
                    Lo que aporta AI Sapiens
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "1.4rem 0 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.9rem",
                    }}
                  >
                    {APORTA_SAPIENS.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "auto 1fr",
                          gap: "0.7rem",
                          color: "var(--text-soft)",
                        }}
                      >
                        <span
                          aria-hidden
                          style={{
                            color: "var(--color-accent)",
                            fontFamily: "var(--font-serif)",
                          }}
                        >
                          —
                        </span>
                        <span className="lede" style={{ fontSize: "1rem" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <EditorialSection
          index={4}
          subtitle="La pregunta que probablemente te estás haciendo. ¿Qué pasa si esto no funciona?"
        >
          <EditorialParagraph>
            Es la pregunta correcta. Y por eso AI Sapiens no entra en Fase 2
            hasta que se cumplen tres condiciones medibles.
          </EditorialParagraph>
          <EditorialParagraph>
            <strong style={{ fontWeight: 500, color: "var(--text)" }}>
              La primera:
            </strong>{" "}
            al menos tres cohortes completadas en Fase 1, con portfolios
            defendidos. Esto significa que cuando llegamos a tu centro con la
            propuesta, el método ya está probado con alumnos reales — no es
            teórico.
          </EditorialParagraph>
          <EditorialParagraph>
            <strong style={{ fontWeight: 500, color: "var(--text)" }}>
              La segunda:
            </strong>{" "}
            currículo estabilizado en lo permanente y semi-estable. Lo que
            cambia es solo la capa de actualización trimestral, que se
            gestiona desde central.
          </EditorialParagraph>
          <EditorialParagraph>
            <strong style={{ fontWeight: 500, color: "var(--text)" }}>
              La tercera:
            </strong>{" "}
            demanda probada de centros como el tuyo. Si no hay otros centros
            interesados, no escalamos. La masa crítica es parte del modelo.
          </EditorialParagraph>
          <EditorialParagraph>
            Esto te protege de dos cosas: de entrar en un piloto improvisado, y
            de entrar solo. Cuando un centro adopta AI Sapiens en Fase 2, lo
            hace en una red — no en aislamiento.
          </EditorialParagraph>
        </EditorialSection>

        <EditorialSection
          index={5}
          subtitle="Lo que falta validar (también contigo). Porque tu experiencia importa más de lo que crees."
        >
          <EditorialParagraph>
            Esto no está cerrado. Y por eso queremos hablar contigo, no
            presentarte un producto terminado.
          </EditorialParagraph>
          <EditorialParagraph>
            Hay decisiones que aún no están tomadas y para las que tu criterio
            operativo cuenta:
          </EditorialParagraph>

          <EditorialList
            items={[
              "El modelo económico exacto del partnership entre AI Sapiens y los centros. Hay tesis (royalty, fee por docente certificado, modelo híbrido), no hay decisión final.",
              "El nivel de marca compartida o blanca. Tu centro puede ofrecer 'AI Sapiens en tu centro' o puede ofrecer 'el programa de IA de tu centro, certificado por AI Sapiens'. Las dos son viables.",
              "La sincronía con tu calendario académico y tu mix de productos actuales. Esto no debe canibalizar lo que ya funciona en tu centro.",
            ]}
          />

          <EditorialParagraph>
            Estas decisiones se toman con los primeros centros que entran al
            modelo. Si te interesa, entras en esa conversación.
          </EditorialParagraph>
        </EditorialSection>

        <EditorialClosing
          cta={{
            href: `mailto:${CONTACT_EMAIL}?subject=AI%20Sapiens%20%E2%80%94%20Conversaci%C3%B3n%20con%20centro%20educativo`,
            label: "Continuar la conversación",
          }}
        >
          AI Sapiens no busca convencerte de que esto funcionará en tu centro.
          Busca centros con criterio operativo que quieran validarlo con
          nosotros. Si tu centro es uno, hablamos.
        </EditorialClosing>
      </main>
    </>
  );
}
