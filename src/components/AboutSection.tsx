import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            About <span className="text-gradient">Me</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="glass-card p-8 md:p-10">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm <span className="text-foreground font-medium">Sangani Swamy</span>, a Computer Science & Engineering
              student specializing in Artificial Intelligence and Machine Learning at Lovely Professional University, Punjab.
              I thrive on solving complex problems with clean, efficient code and building applications that bridge the gap
              between data science and user-friendly interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              With hands-on experience in Python, ML frameworks, and web technologies, I've built projects ranging from
              loan approval prediction systems to emotion detection apps. I'm a quick learner, a team leader,
              and I'm always looking for opportunities to grow and contribute to impactful tech solutions.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
