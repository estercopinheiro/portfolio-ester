import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Finance App Redesign",
    description: "Complete mobile app redesign focusing on simplifying complex financial data for everyday users.",
    image: project1,
    tags: ["Mobile", "UX Research", "UI Design"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform for e-commerce businesses to track and analyze their performance metrics.",
    image: project2,
    tags: ["Web", "Dashboard", "Data Viz"],
    link: "#",
  },
  {
    title: "Brand Identity System",
    description: "Comprehensive brand identity including logo, typography, color system, and design guidelines.",
    image: project3,
    tags: ["Branding", "Visual Design", "Guidelines"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work across various industries and platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link}
                    className="w-12 h-12 rounded-full bg-primary-foreground text-primary flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
