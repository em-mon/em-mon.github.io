import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Interests } from "@/components/Interests";
import { Background } from "@/components/Background";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Interests />
      <Background />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
