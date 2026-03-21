import { Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import projectLoan from "@/assets/project-loan.jpg";
import projectEmotion from "@/assets/project-emotion.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import { Gallery6 } from "@/components/ui/gallery6";

const projects = [
  {
    title: "CampusCart – MERN Stack E-Commerce & Marketplace Web App",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    description: [
      "Built a full-stack campus e-commerce and second-hand marketplace platform to enable students to buy, sell, and compare products efficiently.",
      "Developed the frontend using React with Context API for state management and integrated REST APIs for dynamic product, cart, and user operations.",
      "Implemented backend using Node.js and Express with JWT-based authentication and MongoDB Atlas for cloud data storage.",
      "Enabled features like product browsing, cart, wishlist, product comparison, and marketplace listings, ensuring a smooth and interactive user experience.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT Auth", "Context API", "Vite", "REST APIs", "Render", "Vercel"],
    github: "https://github.com/Swamysangani/campuscart",
    live: "https://campuscart-blue.vercel.app/",
  },
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

const projectItems = projects.map((p, i) => ({
  id: `project-${i}`,
  title: p.title,
  summary: (
    <div className="flex flex-col gap-2 h-full">
      <p className="text-xs text-primary">{p.date}</p>
      <ul className="space-y-2 mb-2">
        {p.description.map((desc, idx) => (
          <li key={idx} className="flex gap-2 text-sm leading-relaxed">
            <span className="text-primary mt-0.5">•</span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {p.tech.map((t) => (
          <span key={t} className="text-[10px] px-2 py-1 rounded bg-primary/10 text-primary whitespace-nowrap">
            {t}
          </span>
        ))}
      </div>
    </div>
  ),
  url: p.github,
  liveUrl: p.live,
  image: p.image,
  linkLabel: "View GitHub"
}));

const ProjectsSection = () => {
  return (
    <div id="projects">
      <AnimatedSection>
        <Gallery6
          heading="My Projects"
          demoUrl=""
          demoLabel=""
          items={projectItems}
        />
      </AnimatedSection>
    </div>
  );
};

export default ProjectsSection;
