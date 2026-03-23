import { GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology – CSE (AI & ML)",
    grade: "CGPA: 7.75",
    period: "Aug 2023 – Present",
  },
  {
    institution: "Aditya Junior College",
    location: "Kakinada, India",
    degree: "Intermediate",
    grade: "Percentage: 86%",
    period: "2021 – 2023",
  },
  {
    institution: "Narayana Olympiad School",
    location: "Kakinada, India",
    degree: "Matriculation",
    grade: "Percentage: 96%",
    period: "2020 – 2021",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Educational <span className="text-gradient">Journey</span>
          </h2>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="flex flex-col gap-8">
            {education.map((edu, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="md:pl-16 relative">
                  <motion.div
                    className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
                  />
                  <motion.div
                    className="glass-card p-6 hover:border-primary/30 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <GraduationCap size={18} className="text-primary" />
                        <h3 className="font-heading text-lg font-semibold">{edu.institution}</h3>
                      </div>
                      <span className="text-xs text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-sm text-foreground mb-1">{edu.degree}</p>
                    <p className="text-sm text-primary font-medium mb-2">{edu.grade}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin size={12} />
                      {edu.location}
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
