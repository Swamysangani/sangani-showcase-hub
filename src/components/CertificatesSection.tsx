import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import certAiml from "@/assets/cert-aiml.jpg";
import certPython from "@/assets/cert-python.jpg";
import certJs from "@/assets/cert-js.jpg";
import certHtml from "@/assets/cert-html.jpg";

const certificates = [
  {
    title: "AI & ML for Real World Problem Solving",
    issuer: "Lovely Professional University",
    date: "Aug 2025",
    image: certAiml,
    description: "Completed a comprehensive course on applying AI and Machine Learning techniques to solve real-world problems.",
    link: "https://drive.google.com/file/d/1meuwPZ15_cQUVcJNh9qpCIleigwdqbGB/view?usp=sharing",
  },
  {
    title: "Python Programming – AICTE OIB-SIP",
    issuer: "Oasis Infobyte",
    date: "Jul 2025",
    image: certPython,
    description: "Earned certification for completing a 1-month Python programming internship under the AICTE OIB-SIP initiative.",
    link: "https://drive.google.com/file/d/1ZMEPmImzJjHdq8-aTN5MJ44of2ztzkta/view?usp=sharing",
  },
  {
    title: "JavaScript Bootcamp",
    issuer: "CodeWithRandom",
    date: "Mar 2024",
    image: certJs,
    description: "Completed an intensive JavaScript bootcamp covering core concepts, DOM manipulation, and modern ES6+ features.",
    link: "https://drive.google.com/file/d/1Mu8_uS45hIm4blPCqYyavj5sD4bayRrV/view?usp=sharing",
  },
  {
    title: "HTML Tutorial",
    issuer: "Great Learning",
    date: "Feb 2024",
    image: certHtml,
    description: "Completed an HTML fundamentals course covering semantic markup, forms, and modern web structure best practices.",
    link: "https://drive.google.com/file/d/1HcUlovC_VZAZppwZl3XfPYDw-dXW1ULE/view?usp=sharing",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-gradient">Certificates</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.1}>
              <motion.div
                className="glass-card overflow-hidden group hover:border-primary/30 transition-colors h-full"
                whileHover={{ y: -4, boxShadow: "0 0 30px -10px hsl(172 66% 50% / 0.2)" }}
              >
                <div className="overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-xs text-primary mb-2">{cert.issuer} • {cert.date}</p>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={14} /> View Certificate
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
