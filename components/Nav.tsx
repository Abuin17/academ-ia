"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const ROUTES: { href: string; label: string }[] = [
  { href: "/pitch", label: "Pitch" },
  { href: "/por-que", label: "Por qué" },
];

export function Nav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-theme]")
    );
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top) {
          const t = top.target.getAttribute("data-section-theme");
          if (t === "dark" || t === "light") setTheme(t);
        }
      },
      {
        rootMargin: "-40px 0px -75% 0px",
        threshold: [0, 0.05, 0.15, 0.3, 0.5, 0.75, 1],
      }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const isDark = theme === "dark";
  const navBg = scrolled
    ? isDark
      ? "rgba(11,11,15,0.8)"
      : "rgba(247,246,243,0.8)"
    : "transparent";
  const navBorder = scrolled
    ? isDark
      ? "rgba(255,255,255,0.06)"
      : "rgba(0,0,0,0.06)"
    : "transparent";
  const textColor = isDark ? "#F0EDE6" : "#1A1A1A";
  const softColor = isDark
    ? "rgba(240,237,230,0.72)"
    : "#5C594E";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: navBg,
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: `1px solid ${navBorder}`,
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="container-prose">
        <div
          className="flex items-center justify-between"
          style={{ height: 64, color: textColor }}
        >
          <Link
            href="/"
            style={{
              color: textColor,
              fontFamily: "var(--font-serif)",
              fontSize: "1.35rem",
              letterSpacing: "-0.02em",
              transition: "color 0.3s ease",
            }}
          >
            Academia IA
          </Link>
          <div className="flex items-center gap-7">
            <nav
              aria-label="Secciones principales"
              className="hidden sm:flex items-center gap-6"
            >
              {ROUTES.map((r) => {
                const active =
                  pathname === r.href ||
                  (r.href !== "/" && pathname?.startsWith(`${r.href}/`));
                return (
                  <Link
                    key={r.href}
                    href={r.href}
                    aria-current={active ? "page" : undefined}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: active ? textColor : softColor,
                      transition: "color 0.25s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = textColor)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = active ? textColor : softColor)
                    }
                  >
                    {r.label}
                  </Link>
                );
              })}
            </nav>
            <a
              href="/#lista"
              className="hidden sm:inline-flex"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: softColor,
                transition: "color 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = textColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = softColor)}
            >
              Lista de espera
            </a>
            <a
              href="/#lista"
              className="btn-outline"
            >
              Apuntarme
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
