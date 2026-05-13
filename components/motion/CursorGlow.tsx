"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -1000, y: -1000 });
  const current = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function onMove(e: MouseEvent) {
      target.current = { x: e.clientX, y: e.clientY };
    }

    let raf = 0;
    let visible = false;
    function loop() {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate(${current.current.x - 200}px, ${
          current.current.y - 200
        }px)`;
        if (!visible) {
          ref.current.style.opacity = "1";
          visible = true;
        }
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0,
        transition: "opacity 0.6s ease",
        background:
          "radial-gradient(closest-side, rgba(201,169,110,0.06), transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
