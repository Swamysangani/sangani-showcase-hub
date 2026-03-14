import { Github } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import projectLoan from "@/assets/project-loan.jpg";
import projectEmotion from "@/assets/project-emotion.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";

const projects = [
  {
    title: "Loan Approval Prediction Web App",
    date: "Feb 2026",
    image: projectLoan,
    description: [
      "Built a machine learning–based web application to predict loan approval decisions and assist financial risk assessment.",
      "Developed the model using Random Forest with a preprocessing pipeline and deployed an interactive interface using Streamlit.",
      "Enabled fast and explainable loan eligibility predictions, improving decision transparency.",
    ],
    tech: ["Python", "Scikit-learn", "Streamlit", "PyInstaller"],
    github: "https://github.com/Swamysangani/loan-approval-app",
  },
  {
    title: "Emotion Detection Web App (LSTM)",
    date: "Nov 2025",
    image: projectEmotion,
    description: [
      "Built an NLP-based Emotion Detection system using an LSTM model to classify multiple human emotions from text.",
      "Developed a real-time web application using Streamlit for emotion prediction from user text input.",
      "Achieved strong performance with accurate emotion classification across multiple categories.",
    ],
    tech: ["Python", "TensorFlow", "NLTK", "Streamlit", "Scikit-learn"],
    github: "https://github.com/Swamysangani/Emotion-Detection",
  },
  {
    title: "E-Commerce Product Recommendation System",
    date: "Jul – Aug 2025",
    image: projectEcommerce,
    description: [
      "Built a personalized e-commerce recommendation system using collaborative filtering and content-based features.",
      "Used Python, Pandas, NumPy, and Scikit-learn to generate personalized recommendations based on user preferences.",
      "Achieved improved recommendation accuracy through a Hybrid Collaborative Filtering approach.",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Flask", "Kaggle"],
    github: "https://github.com/Swamysangani",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-gradient">Projects</span>
          </h2>
        </AnimatedSection>
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <motion.div
                className="glass-card overflow-hidden md:flex group hover:border-primary/30 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className="md:w-2/5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading text-xl font-semibold">{project.title}</h3>
                      <span className="text-xs text-muted-foreground">{project.date}</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {project.description.map((point, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
