import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Monitor, 
  Palette, 
  Search,
  Workflow,
  ClipboardCheck, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Design Critique & Consulting",
    description: "Expert evaluation of your product's UI/UX. I provide actionable feedback to identify friction points, improve usability, and ensure your interface aligns with industry best practices and accessibility standards.",
  },
  {
    icon: Monitor,
    title: "Product Design (Web & Mobile)",
    description: "End-to-end design for digital products. I create intuitive, responsive, and high-fidelity interfaces that balance aesthetic appeal with functional performance across all platforms.",
  },
  {
    icon: Workflow,
    title: "Design Ops & Documentation",
    description: "Optimization of design workflows and Jira environments. Drawing from my experience with design standardization, I help teams build scalable systems and clear documentation for seamless handoffs.",
  },
  {
    icon: Search,
    title: "User Research & Strategy",
    description: "Transforming user data into strategic roadmaps. I conduct thorough research and discovery phases to validate product ideas and align user needs with your business's core objectives.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
            Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Strategic Design
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Driving product excellence through expert analysis, user-centric strategy, and optimized design workflows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 gap-1 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
