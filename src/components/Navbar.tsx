import { useState } from "react";
import { User, Code, Briefcase, Award, GraduationCap, Mail, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { NavBar } from "./ui/tubelight-navbar";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", url: "#about", icon: User },
  { name: "Skills", url: "#skills", icon: Code },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Certificates", url: "#certificates", icon: Award },
  { name: "Education", url: "#education", icon: GraduationCap },
  { name: "Contact", url: "#contact", icon: Mail },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <NavBar items={navItems} />

      {/* Top Left Logo */}
      <div className="fixed top-6 left-6 z-50">
        <a href="#" className="font-heading text-xl font-bold text-gradient">
          SS
        </a>
      </div>

      {/* Desktop Top Right Controls */}
      <div className="fixed top-6 right-6 z-50 hidden md:flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-background/5 border border-border backdrop-blur-lg hover:bg-primary/20 transition-colors shadow-lg"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </AnimatePresence>
        </button>
        <a
          href="/SwamyCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-4 py-2 rounded-lg bg-background/5 border border-border backdrop-blur-lg text-foreground font-medium hover:bg-primary/20 transition-colors shadow-lg"
        >
          Resume
        </a>
        <a
          href="/SwamyCV.pdf"
          download
          className="text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-lg"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Top Right Controls */}
      <div className="fixed top-6 right-6 z-50 md:hidden flex flex-col items-end gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-background/5 border border-border backdrop-blur-lg hover:bg-primary/20 transition-colors shadow-lg text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-background/5 border border-border backdrop-blur-lg text-foreground shadow-lg"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-2 glass-card rounded-xl p-3 shadow-xl"
            >
              <a
                href="/SwamyCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-sm px-4 py-2 rounded-lg bg-secondary text-foreground font-medium text-center"
              >
                Resume
              </a>
              <a
                href="/SwamyCV.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-center"
              >
                Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
