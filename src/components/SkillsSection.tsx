import { Code2, Brain, Wrench, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const skillCategories = [
  { icon: <Code2 size={24} />, title: "Languages", skills: ["C++", "C", "Python", "Java"] },
  { icon: <Brain size={24} />, title: "Frameworks", skills: ["Scikit-learn", "React", "Streamlit", "TensorFlow"] },
  { icon: <Wrench size={24} />, title: "Tools & Platforms", skills: ["Figma", "HTML", "CSS", "VS Code", "Google Colab", "Git"] },
  { icon: <Users size={24} />, title: "Soft Skills", skills: ["Problem-Solving", "Quick Learner", "Team Leader", "Adaptability"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-gradient">Skills</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.1}>
              <motion.div
                className="glass-card p-6 hover:border-primary/30 transition-colors h-full"
                whileHover={{ y: -4, boxShadow: "0 0 30px -10px hsl(172 66% 50% / 0.2)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{cat.icon}</div>
                  <h3 className="font-heading text-xl font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + si * 0.05 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
