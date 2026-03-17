import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";


const socials = [
  { icon: <Github size={20} />, href: "https://github.com/Swamysangani" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/sanganiswamy1" },
  { icon: <Mail size={20} />, href: "mailto:swamysangani21@gmail.com" },
  { icon: <Phone size={20} />, href: "tel:+916302934271" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <img
            src={profileImg}
            alt="Sangani Swamy"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.4)]"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium tracking-wider uppercase text-sm mb-4"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl font-bold mb-6"
        >
          Sangani <span className="text-gradient">Swamy</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Enthusiastic about machine learning and web development, dedicated to building intelligent, scalable solutions that deliver meaningful real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={16} className="animate-bounce" />
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
