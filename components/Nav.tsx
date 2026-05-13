import Link from "next/link";
import { Container } from "@/components/Container";

export function Nav({ variant = "landing" }: { variant?: "landing" | "pitch" }) {
  return (
    <header className="glass-nav sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="font-serif text-xl tracking-tight text-[color:var(--color-ink)] sm:text-2xl"
          >
            Academia <span className="text-[color:var(--color-accent)]">IA</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {variant === "landing" ? (
              <a
                href="#waitlist"
                className="text-[color:var(--color-ink-soft)] transition hover:text-[color:var(--color-ink)]"
              >
                Unirse a la lista
              </a>
            ) : (
              <span className="eyebrow">Confidencial</span>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
}
