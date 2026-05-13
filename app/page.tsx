import { Nav } from "@/components/Nav";
import { ComingSoon } from "@/components/landing/ComingSoon";
import { Different } from "@/components/landing/Different";
import { Families } from "@/components/landing/Families";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Problem } from "@/components/landing/Problem";
import { Professionals } from "@/components/landing/Professionals";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Families />
        <Professionals />
        <Different />
        <HowItWorks />
        <ComingSoon />
        <Footer />
      </main>
    </>
  );
}
