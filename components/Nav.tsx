"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function Nav() {
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
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section-theme]"));
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
      ? "rgba(10,10,10,0.85)"
      : "rgba(250,250,248,0.88)"
    : "transparent";
  const navBorder = scrolled
    ? isDark
      ? "rgba(255,255,255,0.06)"
      : "rgba(0,0,0,0.06)"
    : "transparent";
  const textColor = isDark ? "#F5F5F3" : "#1A1A1A";
  const softColor = isDark ? "rgba(245,245,243,0.6)" : "#6B6B6B";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: navBg,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: `1px solid ${navBorder}`,
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="container-prose">
        <div
          className="flex items-center justify-between"
          style={{ height: 64, color: textColor }}
        >
          <Link href="/" style={{ color: textColor }} className="font-serif text-xl tracking-tight sm:text-2xl">
            Academia IA
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="#lista"
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
              href="#lista"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: 500,
                padding: "0.55rem 1rem",
                borderRadius: 6,
                background: "var(--color-accent)",
                color: "#FFFFFF",
                transition: "background-color 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--color-accent-hover)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
            >
              Apuntarme
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
