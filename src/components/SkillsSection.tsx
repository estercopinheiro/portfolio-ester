import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Figma, 
  Monitor, 
  Layout,
  UserRound,
  Palette, 
  Layers,
  Zap,
  Box,
  RefreshCw,
  Download,
  BarChart3,
  ExternalLink
} from "lucide-react";

const skills = [
  { icon: Figma, name: "Figma", category: "Design Tool" },
  { icon: Layout, name: "Product Design", category: "Skills" },
  { icon: UserRound, name: "User Experience (UX)", category: "Skills" },
  { icon: Palette, name: "User Interface (UI)", category: "Skills" },
  { icon: Zap, name: "Prototyping", category: "Skills" },
  { icon: Box, name: "SketchUp", category: "3D Tool" },
  { icon: BarChart3, name: "UX Analytics", category: "Skills" },
  { icon: RefreshCw, name: "Resilience and Adaptability", category: "Skills" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
            Skills & Tools
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What's in my carry-on for crafting exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{skill.name}</h3>
                <p className="text-xs text-muted-foreground">{skill.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gap-2">
            <a href="/encv-esterpinheiro.pdf" download
              className="inline-flex flex-row items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
              <a
               href="https://www.linkedin.com/in/ester-pinheiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-row items-center gap-2"
              >       
                  <ExternalLink className="w-4 h-4" />
                  <span>View LinkedIn</span>
              </a>    
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
