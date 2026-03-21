import AnimatedSection from "./AnimatedSection";
import { Download, Briefcase, GraduationCap, Award, Code, Heart } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            A snapshot of my experience, skills, and achievements
          </p>
        </AnimatedSection>

        <div className="space-y-10">
          {/* Skills */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code size={22} className="text-primary" />
                <h3 className="text-xl font-heading font-semibold">Skills</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <p><span className="text-foreground font-medium">Languages:</span> C++, C, Python, Java</p>
                <p><span className="text-foreground font-medium">Frameworks:</span> Scikit-learn, React, Streamlit, TensorFlow, Express.js</p>
                <p><span className="text-foreground font-medium">Tools/Platforms:</span> Figma, HTML, CSS, VS Code, Google Colab, Git, MongoDB, Node.js</p>
                <p><span className="text-foreground font-medium">Soft Skills:</span> Problem-Solving, Quick Learner, Team Leader, Adaptability</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Internship */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={22} className="text-primary" />
                <h3 className="text-xl font-heading font-semibold">Internship</h3>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h4 className="font-medium text-foreground">Oasis Infobyte — AICTE OIB-SIP Internship</h4>
                  <span className="text-xs text-primary font-medium">Jun 2025 – Jul 2025</span>
                </div>
                <p className="text-sm text-primary/80 mb-2">Python Programming Intern</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Developed Python scripts for basic automation and problem-solving tasks.</li>
                  <li>Implemented core programming concepts using Python and NumPy.</li>
                  <li>Built and tested projects using VS Code, Google Colab, and packaged applications with PyInstaller.</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-foreground font-medium">Tech Stack:</span> Python 3, NumPy, PyInstaller, VS Code, Google Colab
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Projects */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code size={22} className="text-primary" />
                <h3 className="text-xl font-heading font-semibold">Projects</h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Loan Approval Prediction Web App",
                    date: "Feb 2026",
                    points: [
                      "Built a machine learning–based web application to predict loan approval decisions and assist financial risk assessment.",
                      "Developed the model using Random Forest with a preprocessing pipeline and deployed an interactive interface using Streamlit.",
                      "Enabled fast and explainable loan eligibility predictions, improving decision transparency.",
                    ],
                    tech: "Python, Scikit-learn, Streamlit, PyInstaller",
                  },
                  {
                    title: "Emotion Detection Web App (Streamlit + LSTM)",
                    date: "Nov 2025",
                    points: [
                      "Built an NLP-based Emotion Detection system using an LSTM model to classify multiple human emotions from text.",
                      "Developed a real-time web application using Streamlit for emotion prediction from text input.",
                      "Created a real-time web app offering accurate emotion prediction with strong performance.",
                    ],
                    tech: "Python, Pandas, NumPy, Scikit-learn, TensorFlow, NLTK, Streamlit, Tkinter",
                  },
                  {
                    title: "E-Commerce Product Recommendation System",
                    date: "Jul 2025 – Aug 2025",
                    points: [
                      "Built a personalized e-commerce recommendation system based on user preferences and purchase history.",
                      "Used collaborative filtering to generate personalized recommendations.",
                      "Achieved improved recommendation accuracy through a Hybrid Collaborative Filtering approach.",
                    ],
                    tech: "Python, Pandas, NumPy, Scikit-learn, Flask (API), Google Colab, Kaggle",
                  },
                ].map((project) => (
                  <div key={project.title} className="border-l-2 border-primary/30 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h4 className="font-medium text-foreground">{project.title}</h4>
                      <span className="text-xs text-primary font-medium">{project.date}</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      {project.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mt-2">
                      <span className="text-foreground font-medium">Tech Stack:</span> {project.tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Certificates */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award size={22} className="text-primary" />
                <h3 className="text-xl font-heading font-semibold">Certificates</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>AI & ML for real world problem solving – LPU <span className="text-xs text-primary">(Aug 2025)</span></li>
                <li>Python Programming – AICTE OIB-SIP Internship <span className="text-xs text-primary">(Jul 2025)</span></li>
                <li>JavaScript Bootcamp – CodeWithRandom <span className="text-xs text-primary">(Mar 2024)</span></li>
                <li>HTML Tutorial – Great Learning <span className="text-xs text-primary">(Feb 2024)</span></li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={22} className="text-primary" />
                <h3 className="text-xl font-heading font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-medium text-foreground">Lovely Professional University</h4>
                  <p className="text-sm text-muted-foreground">B.Tech – CSE (AI & ML) · CGPA: 7.75</p>
                  <span className="text-xs text-primary">Aug 2023 – Present</span>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-medium text-foreground">Aditya Junior College</h4>
                  <p className="text-sm text-muted-foreground">Intermediate · 86%</p>
                  <span className="text-xs text-primary">2021 – 2023</span>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-medium text-foreground">Narayana Olympiad School</h4>
                  <p className="text-sm text-muted-foreground">Matriculation · 96%</p>
                  <span className="text-xs text-primary">Jun 2020 – Mar 2021</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Co-Curricular */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart size={22} className="text-primary" />
                <h3 className="text-xl font-heading font-semibold">Co-Curricular Activities</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Represented University in the One India cultural dance program <span className="text-xs text-primary">(Apr 2025)</span></li>
                <li>Participated in tree plantation and beach clean-up with All is Well NGO <span className="text-xs text-primary">(Jul 2024)</span></li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Download Button */}
          <AnimatedSection>
            <div className="flex justify-center">
              <a
                href="/SwamyCV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
