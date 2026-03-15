import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import ResumeSection from "@/components/ResumeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-noise bg-grid bg-radial-glow">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <EducationSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
};

export default Index;
