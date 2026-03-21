import { Code2, Brain, Wrench, Users, Terminal, Database, Server, Figma, Globe, Cpu, Paintbrush, Lightbulb, Zap, Activity, Coffee, FileCode, Workflow, GitMerge } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Logos3 } from "./ui/logos3";
import { motion } from "framer-motion";

const skillCategories = [
  { icon: <Code2 size={24} />, title: "Languages", skills: ["C++", "C", "Python", "Java"] },
  { icon: <Brain size={24} />, title: "Frameworks", skills: ["Scikit-learn", "React", "Streamlit", "TensorFlow", "Express.js"] },
  { icon: <Wrench size={24} />, title: "Tools & Platforms", skills: ["Figma", "HTML", "CSS", "VS Code", "Google Colab", "Git", "MongoDB", "Node.js"] },
  { icon: <Users size={24} />, title: "Soft Skills", skills: ["Problem-Solving", "Quick Learner", "Team Leader", "Adaptability"] },
];

const skillLogos = [
  { id: "s1", name: "C++", icon: Code2 },
  { id: "s2", name: "C", icon: Terminal },
  { id: "s3", name: "Python", icon: FileCode },
  { id: "s4", name: "Java", icon: Coffee },
  { id: "s5", name: "Scikit-learn", icon: Brain },
  { id: "s6", name: "React", icon: Globe },
  { id: "s7", name: "Streamlit", icon: Workflow },
  { id: "s8", name: "TensorFlow", icon: Brain },
  { id: "s9", name: "Express.js", icon: Server },
  { id: "s10", name: "Figma", icon: Figma },
  { id: "s11", name: "HTML", icon: FileCode },
  { id: "s12", name: "CSS", icon: Paintbrush },
  { id: "s13", name: "VS Code", icon: Code2 },
  { id: "s14", name: "Google Colab", icon: Terminal },
  { id: "s15", name: "Git", icon: GitMerge },
  { id: "s16", name: "MongoDB", icon: Database },
  { id: "s17", name: "Node.js", icon: Cpu },
  { id: "s18", name: "Problem-Solving", icon: Lightbulb },
  { id: "s19", name: "Quick Learner", icon: Zap },
  { id: "s20", name: "Team Leader", icon: Users },
  { id: "s21", name: "Adaptability", icon: Activity },
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
        <AnimatedSection delay={0.1}>
          <div className="mb-16">
            <Logos3 heading="" logos={skillLogos} />
          </div>
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
