import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-xl text-[color:var(--color-ink)]">Academia IA</p>
            <p className="mt-1 text-sm text-[color:var(--color-muted)]">
              Un proyecto en desarrollo. Contacto:{" "}
              <a
                href="mailto:hola@academia-ia.es"
                className="underline decoration-[color:var(--color-line)] underline-offset-4 hover:text-[color:var(--color-ink)] hover:decoration-[color:var(--color-accent)]"
              >
                hola@academia-ia.es
              </a>
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
            España · 2026
          </p>
        </div>
      </Container>
    </footer>
  );
}
