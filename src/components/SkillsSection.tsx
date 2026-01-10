import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Figma, 
  PenTool, 
  Layout, 
  Palette, 
  Code, 
  Layers, 
  FileCode,
  Box,
  Download,
  ExternalLink
} from "lucide-react";

const skills = [
  { icon: Figma, name: "Figma", category: "Design Tool" },
  { icon: PenTool, name: "Adobe XD", category: "Design Tool" },
  { icon: Layout, name: "Sketch", category: "Design Tool" },
  { icon: Palette, name: "Adobe Suite", category: "Design Tool" },
  { icon: Layers, name: "Prototyping", category: "Skill" },
  { icon: Box, name: "3D Design", category: "Skill" },
  { icon: Code, name: "HTML/CSS", category: "Development" },
  { icon: FileCode, name: "React", category: "Development" },
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
            A comprehensive toolkit that enables me to bring ideas to life
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
            <Download className="w-4 h-4" />
            Download CV
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <ExternalLink className="w-4 h-4" />
            View LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
