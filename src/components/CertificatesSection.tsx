import { ExternalLink } from "lucide-react";
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
  },
  {
    title: "Python Programming – AICTE OIB-SIP",
    issuer: "Oasis Infobyte",
    date: "Jul 2025",
    image: certPython,
    description: "Earned certification for completing a 1-month Python programming internship under the AICTE OIB-SIP initiative.",
  },
  {
    title: "JavaScript Bootcamp",
    issuer: "CodeWithRandom",
    date: "Mar 2024",
    image: certJs,
    description: "Completed an intensive JavaScript bootcamp covering core concepts, DOM manipulation, and modern ES6+ features.",
  },
  {
    title: "HTML Tutorial",
    issuer: "Great Learning",
    date: "Feb 2024",
    image: certHtml,
    description: "Completed an HTML fundamentals course covering semantic markup, forms, and modern web structure best practices.",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-gradient">Certificates</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.title} className="glass-card overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold">{cert.title}</h3>
                </div>
                <p className="text-xs text-primary mb-2">{cert.issuer} • {cert.date}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                <button className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  <ExternalLink size={14} /> View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
