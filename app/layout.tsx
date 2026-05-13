import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Academia IA — Aprende a razonar con IA",
  description:
    "Academia IA — formación presencial en España. Para niños, jóvenes y profesionales.",
  metadataBase: new URL("https://academ-ia.vercel.app"),
  openGraph: {
    title: "Academia IA",
    description:
      "Academia IA — formación presencial en España. Para niños, jóvenes y profesionales.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${instrument.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
