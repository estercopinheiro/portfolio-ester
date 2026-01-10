import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Monitor, 
  Palette, 
  Search, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Native iOS and Android app designs that provide seamless user experiences across all devices.",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Responsive websites and web applications that are beautiful, functional, and conversion-focused.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand systems including logos, color palettes, typography, and visual guidelines.",
  },
  {
    icon: Search,
    title: "UX Research",
    description: "User research, testing, and analysis to ensure designs meet real user needs and business goals.",
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
            What I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end design services to help bring your vision to life
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
