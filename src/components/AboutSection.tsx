import profileImg from "@/assets/profile.jpg";
import profile1Img from "@/assets/profile1.jpg";
import profile2Img from "@/assets/profile2.jpg";

const AboutSection = () => {
  const galleryItems = [
    { type: "image", src: profile2Img, alt: "Estou ao ar livre em um mirante com o Morro do Pão de Açúcar ao fundo, sob um céu azul sem nuvens. Estou vestindo uma blusa branca sem mangas, calças cor-de-rosa e usa óculos de sol" },
    { type: "image", src: profile1Img, alt: "Foto de um livro aberto. Na página da esquerda, há uma citação de Frida Kahlo em português: Nada é Absoluto. Tudo muda, tudo se move, tudo gira, tudo voa e desaparece. Na página da direita, uma ilustração estilizada em preto e branco do rosto de Frida Kahlo com flores no cabelo, sobre um fundo laranja vibrante com desenhos de folhas brancas." },
    { type: "image", src: profileImg, alt: "Close do meu rosto, sou mulher de pele clara e longos cabelos castanhos ondulados. Uso óculos de armação preta e retangular, estou sorrindo suavemente para a câmera. Estou com uma camiseta cinza. O fundo é uma parede de tom rosa suave com uma cabeceira estofada em tom terroso." },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">About Me</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Experience Designer & Explorer of Possibilities
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              With 12 years of strategic leadership and a background in Architecture and Urbanism, I 
              progressed from tempered glass to pixels to create solutions with purpose. Curiosity drives 
              me—whether I am exploring new cultures while traveling, "flirting" with code alongside AI, or 
              building interactive maps in Work Adventure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe there are no complex problems that cannot be transformed into elegant and 
              functional experiences. My focus is to bridge business strategy with human-centered 
              design to exceed expectations—both mine and the users'.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">12+</p>
                <p className="text-sm text-muted-foreground">Years of Strategic Leadership</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">UX/UI</p>
                <p className="text-sm text-muted-foreground">Digital Product Specialist</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">Global</p>
                <p className="text-sm text-muted-foreground">International Experience (Ireland)</p>
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
