import Link from "next/link";
import { Container } from "@/components/Container";
import { PorqueNav } from "@/components/por-que/PorqueNav";
import { AccessForm } from "./AccessForm";

type SearchParams = { [key: string]: string | string[] | undefined };

function parseRuta(value: string | string[] | undefined): "inversor" | "operador" | "" {
  const v = Array.isArray(value) ? value[0] : value;
  if (v === "inversor" || v === "operador") return v;
  return "";
}

export default async function AccesoPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const defaultRuta = parseRuta(params.ruta);

  return (
    <>
      <PorqueNav />
      <main
        style={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          paddingBlock: "clamp(6rem, 14vh, 10rem)",
        }}
      >
        <Container>
          <div
            className="mx-auto"
            style={{
              maxWidth: 480,
            }}
          >
            <p className="eyebrow" style={{ color: "var(--text-mute)" }}>
              Acceso a rutas privadas
            </p>
            <h1
              style={{
                marginTop: "1rem",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              Introduce tu contraseña
            </h1>
            <p
              className="lede"
              style={{
                marginTop: "1rem",
                color: "var(--text-soft)",
                fontSize: "1rem",
              }}
            >
              Selecciona la ruta que te corresponde y la contraseña que te han
              compartido.
            </p>

            <div style={{ marginTop: "2.4rem" }}>
              <AccessForm defaultRuta={defaultRuta} />
            </div>

            <div
              style={{
                marginTop: "2.4rem",
                paddingTop: "1.6rem",
                borderTop: "1px solid var(--rule)",
              }}
            >
              <Link
                href="/por-que"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  color: "var(--text-mute)",
                  textDecoration: "none",
                }}
              >
                ← Volver al cuerpo común
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
