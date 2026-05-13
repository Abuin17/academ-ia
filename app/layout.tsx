import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Academia IA — Aprende a razonar con IA",
  description:
    "La primera red de academias de IA en España. Presencial. Para niños, jóvenes y profesionales.",
  metadataBase: new URL("https://academ-ia.vercel.app"),
  openGraph: {
    title: "Academia IA",
    description:
      "Aprende a razonar con IA. No a seguir tutoriales. Formación presencial en España.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
