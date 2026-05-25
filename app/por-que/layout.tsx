import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AI Sapiens",
  // TEMPORAL: indexable para revisión (Claude / crawlers). Restaurar noindex antes de lanzar.
  robots: { index: true, follow: true },
  // Sin Open Graph, sin Twitter Cards, sin description que aporte señal a buscadores.
  description: null,
  openGraph: null,
  twitter: null,
};

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
};

export default function PorqueLayout({ children }: { children: ReactNode }) {
  return <div className="theme-dark min-h-dvh">{children}</div>;
}
