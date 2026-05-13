import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Closing } from "@/components/landing/Closing";
import { Families } from "@/components/landing/Families";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Professionals } from "@/components/landing/Professionals";
import { WhyItWorks } from "@/components/landing/WhyItWorks";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Families />
        <Professionals />
        <WhyItWorks />
        <Closing />
        <Footer />
      </main>
    </>
  );
}
