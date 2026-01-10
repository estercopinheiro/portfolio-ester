import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-serif text-xl font-bold text-foreground">
          Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("skills")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection("services")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </button>
        </nav>
        <Button onClick={() => scrollToSection("contact")} size="sm">
          Contact Me
        </Button>
      </div>
    </header>
  );
};

export default Header;
