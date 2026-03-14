import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const contacts = [
  { icon: <Mail size={24} />, label: "Email", value: "swamysangani21@gmail.com", href: "mailto:swamysangani21@gmail.com" },
  { icon: <Phone size={24} />, label: "Phone", value: "+91-6302934271", href: "tel:+916302934271" },
  { icon: <Github size={24} />, label: "GitHub", value: "github/Swamysangani", href: "https://github.com/Swamysangani", external: true },
  { icon: <Linkedin size={24} />, label: "LinkedIn", value: "linkedin/sanganiswamy1", href: "https://linkedin.com/in/sanganiswamy1", external: true },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about tech!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {contacts.map((c, i) => (
            <AnimatedSection key={c.label} delay={i * 0.1}>
              <motion.a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card p-6 hover:border-primary/30 transition-colors group block h-full"
                whileHover={{ y: -4, boxShadow: "0 0 30px -10px hsl(172 66% 50% / 0.2)" }}
              >
                <div className="text-primary mx-auto mb-3 w-fit">{c.icon}</div>
                <p className="text-sm font-medium mb-1">{c.label}</p>
                <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">{c.value}</p>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatedSection>
        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Sangani Swamy. All rights reserved.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ContactSection;
