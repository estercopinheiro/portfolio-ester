import profileImg from "@/assets/profile.jpg";

const AboutSection = () => {
  const galleryItems = [
    { type: "image", src: profileImg, alt: "Designer at work" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", alt: "Design process" },
    { type: "image", src: profileImg, alt: "Creative workspace" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">About Me</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Passionate Designer
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a UX/UI and Product Designer with a passion for creating intuitive, 
              user-centered digital experiences. With expertise in design thinking, 
              prototyping, and visual design, I help businesses transform complex problems 
              into elegant solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines research-driven insights with creative execution, 
              ensuring every design decision is backed by data and user needs. I believe 
              in the power of design to create positive change and drive business success.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">30+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative rounded-lg overflow-hidden shadow-lg ${
                  index === 0 ? "col-span-2" : ""
                }`}
              >
                {item.type === "image" ? (
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <video 
                    src={item.src}
                    className="w-full h-48 object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
