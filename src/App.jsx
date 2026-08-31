import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";
import ModernSidebar from "./components/Navigation/ModernSidebar";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";
import SkillsSection from "./components/Skills/SkillsSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import Capabilities from "./components/Skills/Capabilities";
import ProcessSection from "./components/Process/ProcessSection";
import ImpactSection from "./components/Impact/ImpactSection";
import ContactSection from "./components/Contact/ContactSection";
import ScrollProgress from "./components/UI/ScrollProgress";
import "./styles/design-system.css";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          const increment = Math.floor(Math.random() * 15) + 5;
          return Math.min(prev + increment, 100);
        });
      }, 60);
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      if (progress === 100) {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 300);
        return () => clearTimeout(timer);
      }
    }, [progress]);

    return (
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FCFCFD] text-[#0F172A]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center max-w-[200px] w-full px-4">
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#8491A6] uppercase mb-4 font-bold">
            INITIALIZING
          </div>
          <div className="w-full bg-[#E4EAF2] h-[2px] mb-3 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-[#2563EB]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="font-mono text-xs text-[#0F172A] leading-none font-bold">
            {progress}%
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <ThemeProvider>
      <div
        className="relative min-h-screen selection:bg-blue-500/10 selection:text-[#2563EB]"
        style={{ background: "var(--page)", color: "var(--text)" }}
      >
        <div className="noise-overlay" />
        <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

        {!isLoading && (
          <>
            <ScrollProgress />
            <main className="lg:ml-[280px] relative min-h-screen">
              <HeroSection />
              <ProjectsSection />
              <ExperienceSection />
              <SkillsSection />
              <ContactSection />
            </main>
            <ModernSidebar />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
