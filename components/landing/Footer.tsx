import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-xl">
              Academia <span className="text-[color:var(--color-accent)]">IA</span>
            </p>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">
              Un proyecto en desarrollo. Contacto:{" "}
              <a
                href="mailto:hola@academia-ia.es"
                className="btn-ghost"
              >
                hola@academia-ia.es
              </a>
            </p>
          </div>
          <p className="eyebrow">España · 2026</p>
        </div>
      </Container>
    </footer>
  );
}
