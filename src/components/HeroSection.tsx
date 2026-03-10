import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4 animate-fade-up">
          Hello, I'm
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Sangani <span className="text-gradient">Swamy</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          B.Tech CSE (AI & ML) student at Lovely Professional University. Passionate about Machine Learning, 
          Web Development, and building intelligent solutions that make a real-world impact.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="https://github.com/Swamysangani"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sanganiswamy1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:swamysangani21@gmail.com"
            className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+916302934271"
            className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
          >
            <Phone size={20} />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <ArrowDown size={16} className="animate-bounce" />
          Scroll to explore
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
