import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Connection from "@/components/Connection";
import Installation from "@/components/Installation";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Connection />
      <Installation />
      <Testimonials />
      <FinalCTA />
    </main>
  );
};

export default Index;
