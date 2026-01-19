import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Dribbble, Instagram, Github, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-mono opacity-70 uppercase tracking-wider mb-2">
            Let's Talk! 😁
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-2"
              asChild
            >
              <a href="mailto:hello@example.com">
                <Mail className="w-4 h-4" />
                ester.copinheiro@gmail.com
              </a>
            </Button>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4" />
              <span>Rio de Janeiro, Brazil</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/ester-pinheiro/" 
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/estercopinheiro" 
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.behance.net/estercoelho1" 
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
