"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Nav minimal y discreto, solo wordmark esquina sup. izq.
 * Sin CTAs. Sin enlaces visibles a otras rutas.
 */
export function PorqueNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(11,11,15,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div className="container-prose">
        <div className="flex items-center justify-between" style={{ height: 56 }}>
          <Link
            href="/por-que"
            aria-label="AI Sapiens"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "var(--text-soft)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              transition: "color 0.25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-soft)")}
          >
            <span
              aria-hidden
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: 999,
                background: "var(--color-accent)",
                boxShadow: "0 0 0 3px rgba(201,169,110,0.18)",
              }}
            />
            AI Sapiens
          </Link>
        </div>
      </div>
    </header>
  );
}
