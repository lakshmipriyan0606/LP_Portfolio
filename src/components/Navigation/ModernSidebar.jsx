import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, Home, Briefcase, FileCode, CheckCircle2, User, HelpCircle, Send } from "lucide-react";
import image1 from "../../assets/images/profile-img.png";

const ModernSidebar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");

  // Live IST clock
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setLocalTime(formatter.format(new Date()) + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll spy implementation
  useEffect(() => {
    const sections = [
      "hero",
      "projects",
      "experience",
      "skills",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#hero", num: "01", id: "hero", icon: Home },
    { name: "Work", href: "#projects", num: "02", id: "projects", icon: Briefcase },
    { name: "Experience", href: "#experience", num: "03", id: "experience", icon: CheckCircle2 },
    { name: "Stack", href: "#skills", num: "04", id: "skills", icon: HelpCircle },
    { name: "Contact", href: "#contact", num: "05", id: "contact", icon: Send },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-b border-[#E4EAF2] flex items-center justify-between px-6 z-40">
        <span className="font-mono text-sm tracking-widest text-[#0F172A] font-bold">
          LP<span className="text-[#2563EB]">.</span>
        </span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-[#0F172A] p-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE FULL-SCREEN OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-white z-30 flex flex-col justify-between p-8 pt-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const IconComp = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-4 text-left py-2 group"
                  >
                    <IconComp size={16} className={isActive ? "text-[#2563EB]" : "text-[#8491A6]"} />
                    <span className={`font-mono text-xs ${isActive ? "text-[#2563EB]" : "text-[#8491A6]"}`}>
                      {item.num}
                    </span>
                    <span
                      className={`text-lg font-medium tracking-tight ${isActive ? "text-[#0F172A]" : "text-[#526079]"
                        }`}
                    >
                      {item.name}
                    </span>
                  </a>
                );
              })}
            </nav>
            <div className="border-t border-[#E4EAF2] pt-6 flex justify-between items-center text-xs text-[#526079]">
              <div className="flex gap-4">
                <a href="https://github.com/lakshmipriyan0606" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/lakshmipriyan0606/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors">LinkedIn</a>
              </div>
              <span>{localTime}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP FIXED SIDEBAR (Width 280px, Padding 20px) */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[280px] bg-white border-r border-[#E4EAF2] flex-col justify-between p-[32px_20px_32px_20px] z-20">

        {/* TOP BRAND / STATUS ROW */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[19px] tracking-[0.08em] text-[#0F172A] font-black">
              LP<span className="text-[#2563EB]">.</span>
            </span>
            <div className="flex items-center gap-1.5 px-2.5 h-[26px] rounded-full bg-[#F3F7FF] border border-[#DBEAFE] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
              <span className="text-[9.5px] font-mono font-bold tracking-tight text-[#2563EB] uppercase">Available</span>
            </div>
          </div>

          {/* PROFILE BLOCK (Portrait w-76 h-86 to clear name text width) */}
          <div className="grid grid-cols-[76px_1fr] gap-3 items-center mt-[28px] text-left">
            <div className="w-[76px] h-[86px] rounded-[10px] overflow-hidden border border-[#E5EAF1] bg-[#F8FAFC] shrink-0 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
              <img
                src={image1}
                alt="Lakshmi Priyan D."
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[13.5px] font-extrabold tracking-tight text-[#0F172A] leading-tight whitespace-nowrap break-words font-primary">
                Lakshmi Priyan D.
              </span>
              <div className="flex flex-col gap-0.5 mt-1">
                <span className="text-[11px] font-mono font-bold text-[#2563EB] tracking-wide uppercase leading-none">
                  React.js / MERN
                </span>
                <span className="text-[11.5px] leading-snug text-[#64748B] font-semibold font-secondary">
                  Full-Stack Dev
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE NAVIGATION */}
        <div className="mt-[28px] flex flex-col gap-1 w-full">
          <div className="h-[1px] bg-[#EDF1F6] mb-[16px] w-full" />

          <nav className="flex flex-col gap-[3px] w-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const IconComp = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group relative flex items-center h-[40px] px-3 rounded-lg transition-all duration-200"
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-[2px_4px_2px_4px] bg-gradient-to-r from-[#2563EB]/[0.08] to-[#2563EB]/[0.02] rounded-lg"
                      layoutId="sidebar-active"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                      <span className="absolute left-[4px] top-[6px] bottom-[6px] w-[2px] bg-[#2563EB] rounded-full" />
                    </motion.div>
                  )}

                  <motion.div
                    className="flex items-center gap-3.5 w-full z-10 text-left pl-3"
                    whileHover={!isActive ? { x: 2 } : {}}
                    transition={{ duration: 0.17, ease: "easeOut" }}
                  >
                    <IconComp
                      size={15}
                      className={`transition-colors duration-200 shrink-0 ${isActive ? "text-[#2563EB]" : "text-[#7A8AA2] group-hover:text-[#2563EB]"
                        }`}
                    />

                    <span
                      className={`font-mono text-[10px] font-bold tracking-wider transition-colors duration-200 shrink-0 ${isActive ? "text-[#2563EB]" : "text-[#8795A9] group-hover:text-[#2563EB]"
                        }`}
                    >
                      {item.num}
                    </span>

                    <span
                      className={`text-[13px] font-bold tracking-tight transition-all duration-200 ${isActive ? "text-[#2563EB]" : "text-[#526079] group-hover:text-[#1E293B]"
                        }`}
                    >
                      {item.name}
                    </span>
                  </motion.div>
                </a>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM METADATA */}
        <div className="mt-auto flex flex-col gap-4 border-t border-[#EDF1F6] pt-5 w-full">
          <div className="flex gap-[16px] items-center justify-start pl-2">
            <motion.a
              whileHover={{ y: -2 }}
              href="https://github.com/lakshmipriyan0606"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#718096] hover:text-[#2563EB] transition-colors"
              aria-label="GitHub"
            >
              <Github size={17} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://www.linkedin.com/in/lakshmipriyan0606/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#718096] hover:text-[#2563EB] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="mailto:lakshmipriyan0606@gmail.com"
              className="text-[#718096] hover:text-[#2563EB] transition-colors"
              aria-label="Email"
            >
              <Mail size={17} />
            </motion.a>
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono tracking-wider text-[#8B98AA] pl-2 select-none">
            <span>© 2026</span>
            <span className="font-bold">{localTime}</span>
          </div>
        </div>

      </aside>
    </>
  );
};

export default ModernSidebar;
