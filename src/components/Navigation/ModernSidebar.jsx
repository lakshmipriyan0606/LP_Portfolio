import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, Menu, X,
  Home, Briefcase, CheckCircle2, HelpCircle, Send,
} from "lucide-react";
import image1 from "../../assets/images/profile2-img.jpg";

const ModernSidebar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");

  /* clock */
  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: true,
      }).format(new Date());
      setLocalTime(t + " IST");
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* scroll-spy */
  useEffect(() => {
    const ids = ["hero", "projects", "experience", "skills", "contact"];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => ids.forEach(id => { const el = document.getElementById(id); if (el) obs.unobserve(el); });
  }, []);

  const navItems = [
    { name: "Home", href: "#hero", num: "01", id: "hero", icon: Home },
    { name: "Work", href: "#projects", num: "02", id: "projects", icon: Briefcase },
    { name: "Experience", href: "#experience", num: "03", id: "experience", icon: CheckCircle2 },
    { name: "Stack", href: "#skills", num: "04", id: "skills", icon: HelpCircle },
    { name: "Contact", href: "#contact", num: "05", id: "contact", icon: Send },
  ];

  const socials = [
    { href: "https://github.com/lakshmipriyan0606", label: "GitHub", Icon: Github },
    { href: "https://www.linkedin.com/in/lakshmipriyan0606/", label: "LinkedIn", Icon: Linkedin },
    { href: "mailto:lakshmipriyan0606@gmail.com", label: "Email", Icon: Mail },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  /* ─── DESKTOP ─────────────────────────────────────────────────── */
  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-[#E4EAF2] flex items-center justify-between px-5 z-40 shadow-sm">
        <span className="font-mono text-[17px] tracking-[0.06em] text-[#0F172A] font-black select-none">
          LP<span className="text-[#2563EB]">.</span>
        </span>
        <button onClick={() => setIsMobileMenuOpen(v => !v)} className="p-1 text-[#0F172A] focus:outline-none" aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 z-30 bg-[#F8FAFF] flex flex-col pt-16 pb-8 px-5"
          >
            {/* Profile card */}
            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 mb-6 shadow-sm border border-[#E4EAF2]">
              <div className="relative shrink-0">
                <div className="w-[58px] h-[68px] rounded-xl overflow-hidden border-2 border-white shadow-md">
                  <img src={image1} alt="Lakshmi Priyan D." className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#22C55E] rounded-full border-2 border-white" />
              </div>
              <div>
                <p className="text-[13px] font-extrabold text-[#0F172A]">Lakshmi Priyan D.</p>
                <p className="text-[10px] font-mono font-bold text-[#2563EB] uppercase tracking-wide mt-0.5">React.js / MERN</p>
                <p className="text-[11px] text-[#64748B] font-semibold mt-0.5">Full-Stack Dev</p>
              </div>
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-1.5 flex-1">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={e => scrollTo(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className={`flex items-center gap-3 h-11 px-4 rounded-xl transition-all duration-200 ${isActive ? "bg-[#EEF3FF]" : "hover:bg-white"
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="mob-pill"
                        className="absolute left-5 w-[3px] h-6 bg-[#2563EB] rounded-r-full"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <Icon size={15} className={isActive ? "text-[#2563EB]" : "text-[#94A3B8]"} />
                    <span className={`font-mono text-[10px] font-bold tracking-wider ${isActive ? "text-[#2563EB]" : "text-[#C0CAD8]"}`}>{item.num}</span>
                    <span className={`text-[13px] font-bold tracking-tight ${isActive ? "text-[#1E40AF]" : "text-[#526079]"}`}>{item.name}</span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="border-t border-[#EDF1F7] pt-4 mt-4">
              <div className="flex gap-3 mb-3">
                {socials.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target={label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
                    className="w-8 h-8 rounded-lg bg-[#F1F5F9] hover:bg-[#EEF3FF] text-[#718096] hover:text-[#2563EB] flex items-center justify-center transition-all">
                    <Icon size={14} />
                  </a>
                ))}
              </div>
              <div className="flex justify-between text-[9px] font-mono text-[#A0AEC0]">
                <span>© 2026</span>
                <span className="font-bold">{localTime}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[268px] bg-white border-r border-[#E8EDF4] flex-col z-20 overflow-hidden">

        {/* Blue top accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-transparent" />

        {/* ── HEADER ── */}
        <div className="px-5 pt-6 pb-5 border-b border-[#EDF1F7]">

          {/* Brand + badge */}
          <div className="flex items-center justify-between mb-5">
            <span className="font-mono text-[20px] tracking-[0.06em] text-[#0F172A] font-black select-none">
              LP<span className="text-[#2563EB]">.</span>
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-[5px] rounded-full bg-[#F0FDF4] border border-[#BBF7D0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[8.5px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">Available</span>
            </div>
          </div>

          {/* Profile card */}
          <div className="bg-[#F8FAFF] border border-[#E4EDF8] rounded-2xl p-4 flex items-center gap-3.5">
            {/* Photo */}
            <div className="relative shrink-0">
              <div className="w-[64px] h-[76px] rounded-xl overflow-hidden border-2 border-white shadow-[0_4px_16px_rgba(15,23,42,0.14)]">
                <img
                  src={image1}
                  alt="Lakshmi Priyan D."
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Online badge */}
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#22C55E] border-2 border-[#F8FAFF]" />
            </div>

            {/* Info */}
            <div className="flex flex-col min-w-0">
              <span className="text-[13px] font-extrabold tracking-tight text-[#0F172A] leading-snug">
                Lakshmi Priyan D.
              </span>
              <span className="text-[10px] font-mono font-bold text-[#2563EB] tracking-wide uppercase mt-0.5">
                React.js / MERN
              </span>
              <span className="text-[11px] text-[#64748B] font-semibold mt-0.5">
                Full-Stack Dev
              </span>
            </div>
          </div>
        </div>

        {/* ── NAV ── */}
        <nav className="px-3 pt-4 pb-2 flex flex-col gap-[2px]">
          <p className="text-[9px] font-mono font-bold tracking-[0.16em] text-[#9BAABB] uppercase px-3 mb-2 select-none">
            Navigation
          </p>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={e => scrollTo(e, item.href)}
                className={`group relative flex items-center gap-3 h-[42px] px-3 rounded-xl transition-all duration-200 cursor-pointer select-none ${isActive ? "bg-[#EEF3FF]" : "hover:bg-[#F4F7FB]"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-pill"
                    className="absolute left-0 top-[9px] bottom-[9px] w-[3px] bg-[#2563EB] rounded-r-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={15} className={`shrink-0 transition-colors duration-200 ${isActive ? "text-[#2563EB]" : "text-[#94A3B8] group-hover:text-[#475569]"}`} />
                <span className={`font-mono text-[10px] font-bold tracking-wider shrink-0 transition-colors duration-200 ${isActive ? "text-[#2563EB]" : "text-[#C0CAD8] group-hover:text-[#7A8AA2]"}`}>
                  {item.num}
                </span>
                <span className={`text-[13px] font-bold tracking-tight flex-1 transition-all duration-200 ${isActive ? "text-[#1E40AF]" : "text-[#526079] group-hover:text-[#1E293B]"}`}>
                  {item.name}
                </span>
                {!isActive && (
                  <span className="text-[#CBD5E1] text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-150">→</span>
                )}
              </a>
            );
          })}
        </nav>

        {/* spacer */}
        <div className="flex-1" />

        {/* ── FOOTER ── */}
        <div className="px-5 py-5 border-t border-[#EDF1F7]">
          <div className="flex items-center gap-2.5 mb-3">
            {socials.map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#F1F5F9] hover:bg-[#EEF3FF] text-[#718096] hover:text-[#2563EB] transition-all duration-200 shadow-sm"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-mono text-[#A0AEC0] tracking-wider select-none">© 2026</span>
            <span className="text-[9px] font-mono font-bold text-[#8B98AA] tracking-wide select-none">{localTime}</span>
          </div>
        </div>

      </aside>
    </>
  );
};

export default ModernSidebar;
