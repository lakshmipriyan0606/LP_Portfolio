import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Rocket, Code, Briefcase, GraduationCap, X, Calendar, Award } from "lucide-react";

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });
  
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const milestones = [
    {
      id: 2023,
      year: "2023",
      category: "FOUNDATIONS",
      title: "Error Makes Clever",
      subtitle: "Full Stack Intern",
      company: "Error Makes Clever",
      role: "Full Stack Developer Intern (MERN)",
      period: "Jul 2023 — Nov 2023",
      desc: "Built responsive frontend modules and MERN API backend integrations.",
      details: [
        "Built responsive frontend modules using React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS with reusable component patterns and responsive design principles.",
        "Developed RESTful APIs with Node.js, Express.js, MongoDB, and Mongoose, implementing CRUD operations, data validation, and frontend-backend integration.",
        "Implemented JWT authentication with bcrypt password hashing, protected Express.js middleware, and session management as part of a complete MERN application."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "bcrypt"],
      icon: Rocket,
      xPos: "15%",
    },
    {
      id: 2024,
      year: "2024",
      category: "BUILD & SCALE",
      title: "Resulticks Edge",
      subtitle: "Associate Engineer",
      company: "Resulticks Edge Solution Pvt. Ltd",
      role: "Associate Software Engineer",
      period: "Jan 2024 — Present",
      desc: "Engineered full-stack React features for B2B marketing automation SaaS platform.",
      details: [
        "Engineered enterprise full-stack React.js features using JavaScript (ES6+), TypeScript, Node.js, and Express.js for modules across Audience, Campaign, Dashboard, Analytics, and Notification.",
        "Architected 20+ reusable UI components using React.js, Redux Toolkit, Context API, and Kendo UI, reducing feature development time across 5+ product modules.",
        "Designed and integrated 15+ RESTful APIs via Axios and Express.js for async data fetching, real-time state synchronization, and form workflows."
      ],
      technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "Redux Toolkit", "Context API", "Kendo UI", "Axios"],
      icon: Code,
      xPos: "50%",
    },
    {
      id: 2026,
      year: "2026",
      category: "IMPACT & GROWTH",
      title: "Resulticks Edge",
      subtitle: "Current Scale & Performance",
      company: "Resulticks Edge Solution Pvt. Ltd",
      role: "Associate Software Engineer",
      period: "Jan 2024 — Present",
      desc: "Optimizing frontend performance, React Flow visual canvas features, and Agile integrations.",
      details: [
        "Optimized React.js frontend performance by 25% via lazy loading, code splitting, memoization (useMemo, useCallback), and render optimizations, reducing page load times.",
        "Built a multi-campaign visual workflow builder using React Flow with node-based UI, drag-and-drop canvas, and Redux Toolkit state management, enabling automated campaigns.",
        "Collaborated in Agile/Scrum sprints with product, design, backend, and QA teams, contributing to peer code reviews and retrospectives to deliver 5+ production-ready features."
      ],
      technologies: ["React Flow", "Redux Toolkit", "React.js", "Git", "ESLint", "Agile/Scrum"],
      icon: Briefcase,
      isCurrent: true,
      xPos: "85%",
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (Electrical & Electronics)",
      school: "Government College of Engineering Bargur",
      period: "2019 — 2023",
      grade: "8.5 CGPA / 10",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Sacred Heart Higher Secondary School",
      period: "2018 — 2019",
      grade: "82% Grade",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      school: "Sacred Heart Higher Secondary School",
      period: "2016 — 2017",
      grade: "94% Grade",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 md:py-20 bg-[#FCFCFD] border-b border-[#E4EAF2] px-6 md:px-16 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background blueprint details */}
      <div className="absolute top-10 left-10 w-[80px] h-[80px] border-t border-l border-[#2563EB]/[0.04] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[80px] h-[80px] border-b border-r border-[#2563EB]/[0.04] pointer-events-none" />

      <motion.div
        className="max-w-[1200px] mx-auto flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        
        {/* TOP ROW HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-16">
          <div className="flex flex-col items-start text-left">
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#8491A6] uppercase block mb-3 font-bold">
              / EXPERIENCE MAP
            </span>
            <h2 className="text-3xl md:text-[52px] font-extrabold text-[#0F172A] leading-[1.05] tracking-tight mb-2">
              CAREER JOURNEY
            </h2>
            <p className="text-[15px] text-[#526079] font-normal">
              A timeline of growth, learning, and impact.
            </p>
          </div>
          
          {/* Year Range Badge */}
          <div className="h-10 px-4 bg-white border border-[#E4EAF2] rounded-xl flex items-center justify-center shadow-2xs shrink-0 self-start md:self-center">
            <span className="font-mono text-sm font-bold text-[#0F172A]">
              2023 <span className="text-[#8491A6]">→</span> 2026
            </span>
          </div>
        </div>

        {/* TIMELINE SVG CONTAINER - DESKTOP VIEW */}
        <div className="hidden lg:block relative w-full h-[400px] mt-10">
          
          {/* Faint Background coordinate guides */}
          <div className="absolute left-0 top-[80px] bottom-0 w-[1px] border-l border-dashed border-[#E4EAF2]" />
          <div className="absolute right-0 top-[80px] bottom-0 w-[1px] border-r border-dashed border-[#E4EAF2]" />
          
          {/* Side watermark indicator */}
          <span className="absolute right-[-10px] top-[140px] rotate-90 font-mono text-[9px] tracking-[0.3em] text-[#8491A6]/40 uppercase origin-right select-none font-bold">
            ENGINEERING PROGRESSION
          </span>

          {/* SVG Connector S-Curve Track */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" fill="none">
            {/* Background dashed route */}
            <path
              d="M 50 100 H 500 C 580 100, 600 130, 680 130 C 760 130, 780 100, 920 100"
              stroke="#D5DDE8"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.3"
            />
            {/* Active blue route */}
            <motion.path
              d="M 50 100 H 500 C 580 100, 600 130, 680 130 C 760 130, 780 100, 920 100"
              stroke="#2563EB"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Vertical connector lines down to cards */}
            <motion.path d="M 150 100 V 160" stroke="#2563EB" strokeWidth="1.25" strokeDasharray="3 3" />
            <motion.path d="M 500 100 V 160" stroke="#2563EB" strokeWidth="1.25" strokeDasharray="3 3" />
            <motion.path d="M 750 114 V 160" stroke="#2563EB" strokeWidth="1.25" strokeDasharray="3 3" />

            {/* Active signals moving through track loop */}
            <motion.circle r="4" fill="#3B82F6">
              <animateMotion
                dur="7s"
                repeatCount="indefinite"
                path="M 50 100 H 500 C 580 100, 600 130, 680 130 C 760 130, 780 100, 920 100"
              />
            </motion.circle>
          </svg>

          {/* Node Labels above track */}
          <div className="absolute top-[34px] left-0 w-full flex justify-between px-[100px] text-[10px] font-mono font-bold tracking-widest text-[#8491A6]">
            <span className="w-[100px] text-center">FOUNDATIONS</span>
            <span className="w-[100px] text-center ml-[70px]">BUILD & SCALE</span>
            <span className="w-[100px] text-center mr-[40px]">IMPACT & GROWTH</span>
          </div>

          {/* Node Dots absolute overlays with reactive hover scale/glowing styles */}
          <div className="absolute top-[90px] left-[140px] z-10 flex h-5 w-5 items-center justify-center">
            <span className={`w-5 h-5 rounded-full border-[3px] bg-white shadow-xs flex items-center justify-center transition-all duration-300 ${
              hoveredCard === 2023 ? "border-[#3B82F6] scale-130 shadow-md" : "border-[#2563EB]"
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full bg-[#2563EB] transition-transform duration-300 ${
                hoveredCard === 2023 ? "scale-120" : ""
              }`} />
            </span>
          </div>

          <div className="absolute top-[90px] left-[490px] z-10 flex h-5 w-5 items-center justify-center">
            <span className={`w-5 h-5 rounded-full border-[3px] bg-white shadow-xs flex items-center justify-center transition-all duration-300 ${
              hoveredCard === 2024 ? "border-[#3B82F6] scale-130 shadow-md" : "border-[#2563EB]"
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full bg-[#2563EB] transition-transform duration-300 ${
                hoveredCard === 2024 ? "scale-120" : ""
              }`} />
            </span>
          </div>

          <div className="absolute top-[104px] left-[740px] z-10 flex h-5 w-5 items-center justify-center">
            <span className={`w-5 h-5 rounded-full border-[3px] bg-white shadow-xs flex items-center justify-center transition-all duration-300 ${
              hoveredCard === 2026 ? "border-[#3B82F6] scale-130 shadow-md" : "border-[#2563EB]"
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full bg-[#2563EB] transition-transform duration-300 ${
                hoveredCard === 2026 ? "scale-120" : ""
              }`} />
            </span>
          </div>

          {/* Milestone Cards placement */}
          <div className="absolute top-[160px] left-0 w-full grid grid-cols-3 gap-8">
            {milestones.map((milestone) => {
              const MilestoneIcon = milestone.icon;
              const isHovered = hoveredCard === milestone.id;
              return (
                <div
                  key={milestone.id}
                  onMouseEnter={() => setHoveredCard(milestone.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedMilestone(milestone)}
                  className={`bg-white border rounded-2xl p-6 transition-all duration-300 relative text-left shadow-[0_4px_25px_rgba(15,23,42,0.01)] h-[210px] flex flex-col justify-between cursor-pointer ${
                    isHovered
                      ? "border-[#2563EB]/30 shadow-[0_15px_40px_rgba(37,99,235,0.07)] translate-y-[-3px]"
                      : "border-[#E4EAF2]"
                  }`}
                >
                  <div>
                    {/* Top Row: Icon container & Year */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                        isHovered ? "bg-[#2563EB] text-white border-[#2563EB] scale-105" : "bg-[#F6F9FF] text-[#2563EB] border-[#E1E9F5]"
                      }`}>
                        <MilestoneIcon size={15} />
                      </div>
                      <span className="font-mono text-sm font-bold text-[#2563EB]">{milestone.year}</span>
                    </div>

                    {/* Card titles */}
                    <h3 className="text-[15px] font-extrabold text-[#0F172A] leading-tight tracking-wide">
                      {milestone.title}
                    </h3>
                    <span className="text-[11.5px] font-semibold text-[#2563EB] mt-0.5 block mb-3 leading-none">
                      {milestone.subtitle}
                    </span>

                    <p className="text-[12px] text-[#526079] leading-relaxed font-normal pr-2">
                      {milestone.desc}
                    </p>
                  </div>

                  {/* Tag banner or Corner Plus detail icon */}
                  <div className="flex items-end justify-between mt-2">
                    {milestone.isCurrent ? (
                      <div className="px-2.5 py-0.5 bg-[#2563EB] text-white font-mono text-[8px] font-bold uppercase tracking-widest rounded-md flex items-center gap-1.5 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                        <span>CURRENT ROLE</span>
                      </div>
                    ) : (
                      <span />
                    )}
                    
                    {/* Small plus corner detail */}
                    <div className="w-5 h-5 rounded-tl-lg bg-[#F8FAFC] border-t border-l border-[#E4EAF2] absolute bottom-0 right-0 flex items-center justify-center text-[#8491A6] text-xs font-bold font-mono group-hover:text-[#2563EB]">
                      +
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* TIMELINE VERTICAL STACK CONTAINER - MOBILE/TABLET VIEW */}
        <div className="lg:hidden relative flex flex-col pl-8 gap-8 mt-10">
          {/* Vertical track line */}
          <div className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-[#E4EAF2] pointer-events-none" />

          {milestones.map((milestone) => {
            const MilestoneIcon = milestone.icon;
            return (
              <div
                key={milestone.id}
                onClick={() => setSelectedMilestone(milestone)}
                className="relative flex gap-4 items-start text-left w-full cursor-pointer hover:translate-x-1 transition-transform"
              >
                {/* Node dot overlay */}
                <div className="absolute left-[-35px] top-[14px] z-10 flex h-4 w-4 items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#2563EB] bg-white flex items-center justify-center" />
                </div>

                <div className="w-full bg-white border border-[#E4EAF2] rounded-xl p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F6F9FF] border border-[#E1E9F5] flex items-center justify-center text-[#2563EB]">
                      <MilestoneIcon size={14} />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#2563EB]">{milestone.year}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A]">{milestone.title}</h3>
                  <span className="text-xs font-semibold text-[#2563EB] block mb-2">{milestone.subtitle}</span>
                  <p className="text-xs text-[#526079] leading-relaxed mb-3">{milestone.desc}</p>
                  <span className="text-[10px] font-mono font-bold text-[#2563EB]">Click for details →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* LEGEND BOX & WATERMARKS (BOTTOM LAYOUT) */}
        <motion.div
          className="hidden lg:flex items-center justify-between mt-12 border-t border-[#EDF1F6] pt-8 w-full select-none"
        >
          {/* Legend indicator panel */}
          <div className="flex items-center gap-6 px-4 py-2 border border-[#E4EAF2] bg-[#F8FAFC] rounded-xl shadow-2xs font-mono text-[9px] font-bold text-[#7C8BA1]">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-[#2563EB] bg-white flex items-center justify-center shrink-0">
                <span className="w-1 h-1 bg-[#2563EB] rounded-full" />
              </span>
              <span>Station (Career Milestone)</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#2563EB] shrink-0" />
              <span>Route (Growth Path)</span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-[#2563EB] tracking-tighter">▶▶▶</span>
              <span>Signal (Continuous Progress)</span>
            </div>
          </div>

          {/* Coordinates watermark labels */}
          <div className="flex flex-col text-right font-mono text-[9px] text-[#8491A6]/50">
            <span>X: 1260.00</span>
            <span>Y: 560.00</span>
          </div>
        </motion.div>

        {/* Education Sub-Section */}
        <motion.div variants={itemVariants} className="mt-32 pt-16 border-t border-[#E4EAF2] w-full">
          <h3 className="text-xl font-bold text-[#0F172A] mb-8 tracking-tight text-left">
            Academic Background
          </h3>
          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-white border border-[#E4EAF2] rounded-xl hover:border-[#2563EB]/20 hover:shadow-[0_8px_25px_rgba(37,99,235,0.03)] transition-all group text-left shadow-xs"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#F6F9FF] border border-[#E1E9F5] flex items-center justify-center text-[#2563EB] shrink-0">
                    <GraduationCap size={18} className="stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[14px] font-bold text-[#0F172A] tracking-wide leading-tight">
                      {edu.degree}
                    </span>
                    <span className="text-xs text-[#526079] truncate">
                      {edu.school}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3 md:mt-0 pl-14 md:pl-0 shrink-0">
                  <span className="text-[10px] font-mono tracking-widest text-[#8491A6] font-bold">
                    {edu.period}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider text-[#2563EB] bg-[#F1F6FF] px-2.5 py-1 rounded border border-[#2563EB]/15 font-bold">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>

      {/* ANImated DETAILS OVERLAY MODAL */}
      <AnimatePresence>
        {selectedMilestone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMilestone(null)}
            />

            {/* Modal Box */}
            <motion.div
              className="bg-white rounded-2xl w-full max-w-[620px] shadow-2xl relative overflow-hidden border border-[#E4EAF2] z-10 text-left"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              {/* Header block with company & role info */}
              <div className="p-6 md:p-8 border-b border-[#EDF1F6] flex justify-between items-start">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                    {React.createElement(selectedMilestone.icon, { size: 20 })}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-[#0F172A] leading-tight">
                      {selectedMilestone.role}
                    </h3>
                    <span className="text-sm font-semibold text-[#64748B] mt-1">
                      {selectedMilestone.company}
                    </span>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#8491A6]">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-[#8491A6]" />
                        <span className="font-mono font-bold tracking-wide text-[#526079] uppercase">{selectedMilestone.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedMilestone(null)}
                  className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#0F172A] transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Achievements details */}
              <div className="p-6 md:p-8 max-h-[300px] overflow-y-auto">
                <h4 className="text-xs font-mono tracking-widest text-[#8491A6] font-bold uppercase mb-4 flex items-center gap-2">
                  <Award size={13} className="text-[#2563EB]" />
                  <span>KEY CONTRIBUTIONS</span>
                </h4>
                <ul className="flex flex-col gap-3.5 list-disc pl-4 text-[14px] text-[#526079] leading-relaxed marker:text-[#2563EB]">
                  {selectedMilestone.details.map((bullet, idx) => (
                    <li key={idx} className="hover:text-[#0F172A] transition-colors duration-150">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Tag Footer */}
              <div className="p-6 md:p-8 bg-[#F8FAFC] border-t border-[#EDF1F6] flex flex-wrap gap-2">
                {selectedMilestone.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-white border border-[#E2E8F0] text-[#475569] rounded font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ExperienceSection;
