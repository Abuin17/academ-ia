"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    function update() {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const current = h.scrollTop;
      setPct(total > 0 ? (current / total) * 100 : 0);
      rafRef.current = 0;
    }
    function onScroll() {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 100,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          background: "var(--color-accent)",
          opacity: 0.65,
          transition: "width 50ms linear",
        }}
      />
    </div>
  );
}
