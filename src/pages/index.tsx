import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Career } from "@/components/Career";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Navbar />
      <main>
        <Hero />
        <Career />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
