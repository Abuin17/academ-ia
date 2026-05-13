import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500"],
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
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
