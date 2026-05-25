import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AI Sapiens",
  // Genera: <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex">
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": 0,
      "max-image-preview": "none",
      "max-video-preview": 0,
    },
  },
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
