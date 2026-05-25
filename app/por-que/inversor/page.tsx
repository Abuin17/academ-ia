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

export default function InversorPage() {
  return (
    <>
      <PorqueNav />
      <main>
        <EditorialHeader
          eyebrow="Ruta 1 · Inversor / Emprendedor / Partner estratégico"
          title="Por qué esto es una oportunidad de venture, y no un proyecto educativo más"
        />

        <EditorialSection
          index={1}
          subtitle="La asimetría competitiva. Lo que el benchmark dice, y lo que no dice."
        >
          <EditorialParagraph>
            El mercado de formación en IA en España y Europa está poblado por
            cuatro tipos de oferta — academias de programación con IA añadida,
            cursos online masivos, talleres puntuales, consultoras de
            cumplimiento AI Act. Ninguna de las cuatro entrega lo que el
            momento exige: pedagogía construida específicamente para enseñar a
            pensar con IA, con acompañamiento humano real, con currículo que
            se mantiene actualizado, y con un sistema de evidencia que verifica
            el aprendizaje.
          </EditorialParagraph>
          <EditorialParagraph>
            El segmento de adolescentes 13-17 es, según benchmark, el menos
            atendido y el de mayor potencial. Cambridge Digital Literacy llega
            hasta los 14 años. Algorithmics enseña programación, no IA. No hay
            competidor presencial recurrente que ocupe el espacio.
          </EditorialParagraph>
          <EditorialParagraph>
            El segmento infantil 8-12 tiene oferta de programación con IA
            añadida, pero ningún operador trata la formación en IA como
            producto principal con marco propio.
          </EditorialParagraph>
          <EditorialParagraph>
            En ambos segmentos, la ventana para construir el referente
            educativo está abierta — y abierta es exactamente el verbo. No
            vacía, no madura.{" "}
            <span style={{ color: "var(--color-accent)" }}>Abierta.</span>
          </EditorialParagraph>
        </EditorialSection>

        <EditorialSection
          index={2}
          subtitle="Por qué ahora. Tres condiciones convergentes."
        >
          <EditorialParagraph>
            Tres cosas están pasando a la vez, por primera vez en la historia
            de la educación tecnológica.
          </EditorialParagraph>
          <EditorialParagraph>
            <strong style={{ fontWeight: 500, color: "var(--text)" }}>
              Primero:
            </strong>{" "}
            la herramienta ya está en manos del alumno. ChatGPT lleva tres
            años en su tablet. No estamos enseñando una herramienta que
            llegará — estamos enseñando una que ya usan, mal.
          </EditorialParagraph>
          <EditorialParagraph>
            <strong style={{ fontWeight: 500, color: "var(--text)" }}>
              Segundo:
            </strong>{" "}
            hay un marco institucional emergente. El AILit Framework de la OCDE
            y la Comisión Europea se integrará en PISA 2029. La conversación
            sobre qué significa &lsquo;alfabetización en IA&rsquo; se está
            canonizando ahora mismo. Quien construya el sistema operativo
            educativo alineado con ese marco antes de 2029 tiene posición.
          </EditorialParagraph>
          <EditorialParagraph>
            <strong style={{ fontWeight: 500, color: "var(--text)" }}>
              Tercero:
            </strong>{" "}
            hay una obligación legal activa. Desde febrero de 2025, las
            empresas europeas tienen que demostrar alfabetización en IA de su
            personal. AESIA tiene capacidad sancionadora desde agosto de 2026.
            Esto crea un canal B2B con demanda forzada — no es la primera vía
            a desarrollar, pero es un activo estratégico real para más
            adelante.
          </EditorialParagraph>
          <EditorialParagraph>
            Las tres condiciones se cierran. La ventana entre &lsquo;demasiado
            pronto&rsquo; y &lsquo;ya hay incumbente&rsquo; es estrecha. Hoy
            estamos dentro de esa ventana.
          </EditorialParagraph>
        </EditorialSection>

        <EditorialSection
          index={3}
          subtitle="Lo que se está construyendo. No es un curso. No es una franquicia. Es un sistema operativo educativo."
        >
          <EditorialParagraph>
            Lo que se ofrece a un partner estratégico en esta fase no es
            participación en un negocio probado. Es co-construcción de un
            referente.
          </EditorialParagraph>
          <EditorialParagraph>
            El producto tiene seis componentes que no se separan: marco
            pedagógico propio, programa para alumnos, plataforma técnica,
            sistema de evaluación, certificación, y actualización trimestral
            del currículo. Quien quiera replicar AI Sapiens tiene que replicar
            los seis. No basta con copiar uno.
          </EditorialParagraph>
          <EditorialParagraph>
            La Fase 1 (validación directa con alumnos) está diseñada para
            producir cuatro activos: currículo refinado con feedback real,
            documentación del método en aula, evidencia de resultados
            defendida, y base de casos de estudio para Fase 2. Estos cuatro
            activos son el moat real cuando llegue Fase 2 — no la marca.
          </EditorialParagraph>
        </EditorialSection>

        <EditorialSection
          index={4}
          subtitle="Lo que falta validar (sin disfraz). Porque lo honesto vende más que lo perfecto."
        >
          <EditorialParagraph>
            Esto es lo que aún no está probado. Y lo decimos antes de que nos
            pregunten:
          </EditorialParagraph>

          <EditorialList
            items={[
              "No hay todavía cohortes de Fase 1 completadas. La validación pedagógica con alumnos reales está pendiente.",
              "No hay datos de retención propios. Los benchmarks de tasas de finalización en formatos cohort-based vienen de otros mercados. Los nuestros se medirán con las primeras cohortes.",
              "No hay willingness to pay validado. Hay precios de competidores adyacentes (academias de programación con IA en 45-51€/mes), pero el precio defendible de AI Sapiens lo dirá la primera campaña real.",
              "No hay todavía centros educativos comprometidos para Fase 2. Hay tesis sobre el modelo de adopción, no contratos.",
            ]}
          />

          <EditorialParagraph>
            Esta lista no es debilidad disfrazada. Es el mapa de validación.
            Cada hipótesis tiene un experimento que la prueba o la mata.
          </EditorialParagraph>
        </EditorialSection>

        <EditorialSection
          index={5}
          subtitle="Lo que se busca, lo que se ofrece. El tipo de compañero de viaje."
        >
          <EditorialParagraph>
            <strong style={{ fontWeight: 500, color: "var(--text)" }}>
              Lo que se busca:
            </strong>{" "}
            un partner estratégico que aporte capital, red de relaciones en el
            sector educativo, y criterio sobre el momento adecuado para
            escalar. Más importante que el capital: la red y el criterio.
          </EditorialParagraph>
          <EditorialParagraph>
            <strong style={{ fontWeight: 500, color: "var(--text)" }}>
              Lo que se ofrece:
            </strong>{" "}
            participación en la construcción de un referente educativo en una
            categoría que se está canonizando ahora mismo. Co-decisión sobre el
            modelo de escalado. Acceso al marco pedagógico y al sistema
            operativo desde dentro.
          </EditorialParagraph>
          <EditorialParagraph>
            <strong style={{ fontWeight: 500, color: "var(--text)" }}>
              Lo que no se ofrece todavía:
            </strong>{" "}
            proyecciones financieras validadas, garantías de retorno, ni
            participación en un negocio que ya funciona. Esto es phase zero. El
            partner que entra hoy lo hace porque ve el momento y la tesis, no
            porque vea los números.
          </EditorialParagraph>
        </EditorialSection>

        <EditorialClosing
          cta={{
            href: `mailto:${CONTACT_EMAIL}?subject=AI%20Sapiens%20%E2%80%94%20Conversaci%C3%B3n%20de%20partnership`,
            label: "Continuar la conversación",
          }}
        >
          Si lo anterior te resuena, la conversación siguiente no es sobre
          términos. Es sobre si crees que la ventana está abierta — y si crees
          que esto es lo que la ocupa.
        </EditorialClosing>
      </main>
    </>
  );
}
