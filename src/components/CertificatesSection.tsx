import AnimatedSection from "./AnimatedSection";
import certAiml from "@/assets/cert-aiml.jpg";
import certPython from "@/assets/cert-python.jpg";
import certJs from "@/assets/cert-js.jpg";
import certHtml from "@/assets/cert-html.jpg";
import { Gallery6 } from "@/components/ui/gallery6";

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

const certificateItems = certificates.map((c, i) => ({
  id: `cert-${i}`,
  title: c.title,
  summary: (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-primary font-medium">{c.issuer} • {c.date}</p>
      <p className="text-sm leading-relaxed">{c.description}</p>
    </div>
  ),
  url: c.link,
  image: c.image,
  linkLabel: "View Certificate"
}));

const CertificatesSection = () => {
  return (
    <div id="certificates">
      <AnimatedSection>
        <Gallery6
          heading="My Certificates"
          demoUrl=""
          demoLabel=""
          items={certificateItems}
        />
      </AnimatedSection>
    </div>
  );
};

export default CertificatesSection;
