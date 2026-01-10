import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      
      <div className="container relative z-10 text-center py-20">
        <p className="text-sm font-mono text-muted-foreground mb-4 tracking-wider uppercase animate-fade-in">
          UX/UI & Product Designer
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
          Crafting Digital
          <br />
          <span className="text-primary">Experiences</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up-delay">
          I design user-centered products that blend aesthetics with functionality, 
          creating meaningful experiences that drive engagement.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
          <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
            Learn More
          </Button>
        </div>
      </div>

      <button 
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
