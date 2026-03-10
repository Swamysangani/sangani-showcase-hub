import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about tech!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          <a href="mailto:swamysangani21@gmail.com" className="glass-card p-6 hover:border-primary/30 transition-colors group">
            <Mail size={24} className="text-primary mx-auto mb-3" />
            <p className="text-sm font-medium mb-1">Email</p>
            <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">swamysangani21@gmail.com</p>
          </a>
          <a href="tel:+916302934271" className="glass-card p-6 hover:border-primary/30 transition-colors group">
            <Phone size={24} className="text-primary mx-auto mb-3" />
            <p className="text-sm font-medium mb-1">Phone</p>
            <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">+91-6302934271</p>
          </a>
          <a href="https://github.com/Swamysangani" target="_blank" rel="noopener noreferrer" className="glass-card p-6 hover:border-primary/30 transition-colors group">
            <Github size={24} className="text-primary mx-auto mb-3" />
            <p className="text-sm font-medium mb-1">GitHub</p>
            <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">github/Swamysangani</p>
          </a>
          <a href="https://linkedin.com/in/sanganiswamy1" target="_blank" rel="noopener noreferrer" className="glass-card p-6 hover:border-primary/30 transition-colors group">
            <Linkedin size={24} className="text-primary mx-auto mb-3" />
            <p className="text-sm font-medium mb-1">LinkedIn</p>
            <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">linkedin/sanganiswamy1</p>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border pt-8 mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Sangani Swamy. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
