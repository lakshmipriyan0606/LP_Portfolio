import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Laptop, Server, HelpCircle, Activity, Layout } from "lucide-react";

const SkillsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });
  const [hoveredId, setHoveredId] = useState(null);

  const capabilities = [
    {
      num: "01",
      id: "frontend",
      title: "Frontend Systems",
      desc: "Component-driven UIs built with React, TypeScript, and modern tooling.",
      techs: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
      icon: Laptop,
      diagram: (
        <svg className="w-full max-w-[420px] h-[64px]" viewBox="0 0 420 64" fill="none">
          {/* UI Layer */}
          <rect x="2" y="8" width="80" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="42" y="28" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">UI Layer</text>
          <text x="42" y="42" fill="#7C8BA1" fontSize="8" fontFamily="monospace" textAnchor="middle">React + TS</text>
          
          <path d="M 82 32 H 102" stroke="#C8D8EE" strokeWidth="1.25" strokeDasharray="3 3" />

          {/* State & Data */}
          <rect x="102" y="8" width="80" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="142" y="28" fill="#2563EB" fontSize="9" fontWeight="bold" textAnchor="middle">State & Data</text>
          <text x="142" y="42" fill="#7C8BA1" fontSize="8" fontFamily="monospace" textAnchor="middle">Redux Toolkit</text>

          <path d="M 182 32 H 202" stroke="#C8D8EE" strokeWidth="1.25" strokeDasharray="3 3" />

          {/* UI Components */}
          <rect x="202" y="8" width="80" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="242" y="28" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">UI Components</text>
          <text x="242" y="42" fill="#7C8BA1" fontSize="8" fontFamily="monospace" textAnchor="middle">Reusable + Typed</text>

          <path d="M 282 32 H 302" stroke="#C8D8EE" strokeWidth="1.25" strokeDasharray="3 3" />

          {/* Dashboard Preview mockup */}
          <rect x="302" y="8" width="116" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF" />
          <rect x="310" y="16" width="30" height="6" rx="2" fill="#F1F6FF" />
          <text x="310" y="36" fill="#0F172A" fontSize="11" fontWeight="extrabold">12.5K</text>
          <text x="310" y="46" fill="#22C55E" fontSize="8" fontWeight="bold">+12%</text>
          
          <path d="M 360 44 L 370 32 L 380 38 L 395 24 L 410 28" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          
          <motion.circle r="3" fill="#2563EB">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 42 32 H 242" />
          </motion.circle>
        </svg>
      )
    },
    {
      num: "02",
      id: "fullstack",
      title: "Full-Stack Products",
      desc: "End-to-end product development with robust APIs and seamless UX.",
      techs: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
      icon: Server,
      diagram: (
        <svg className="w-full max-w-[420px] h-[64px]" viewBox="0 0 420 64" fill="none">
          {/* Web App */}
          <rect x="2" y="8" width="80" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="42" y="28" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">Web App</text>
          <text x="42" y="42" fill="#7C8BA1" fontSize="8" fontFamily="monospace" textAnchor="middle">React</text>

          <path d="M 82 32 H 102" stroke="#C8D8EE" strokeWidth="1.25" strokeDasharray="3 3" />

          {/* API Layer */}
          <rect x="102" y="8" width="80" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="142" y="28" fill="#2563EB" fontSize="9" fontWeight="bold" textAnchor="middle">API Layer</text>
          <text x="142" y="42" fill="#7C8BA1" fontSize="8" fontFamily="monospace" textAnchor="middle">Express.js</text>

          <path d="M 182 32 H 202" stroke="#C8D8EE" strokeWidth="1.25" strokeDasharray="3 3" />

          {/* Database */}
          <rect x="202" y="8" width="80" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="242" y="28" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">Database</text>
          <text x="242" y="42" fill="#22C55E" fontSize="8" fontFamily="monospace" textAnchor="middle">MongoDB</text>

          <path d="M 282 32 H 302" stroke="#C8D8EE" strokeWidth="1.25" strokeDasharray="3 3" />

          {/* Deployment */}
          <rect x="302" y="8" width="80" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="342" y="28" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">Deployment</text>
          <text x="342" y="42" fill="#7C8BA1" fontSize="8" fontFamily="monospace" textAnchor="middle">AWS / Vercel</text>

          <motion.circle r="3" fill="#2563EB">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 42 32 H 342" />
          </motion.circle>
        </svg>
      )
    },
    {
      num: "03",
      id: "state",
      title: "State & Data",
      desc: "Predictable state management and efficient data fetching strategies.",
      techs: ["Redux Toolkit", "TanStack Query", "Context API"],
      icon: HelpCircle,
      diagram: (
        <svg className="w-full max-w-[420px] h-[64px]" viewBox="0 0 420 64" fill="none">
          {/* User Action */}
          <rect x="2" y="8" width="80" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="42" y="28" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">User Action</text>
          <text x="42" y="42" fill="#7C8BA1" fontSize="8" fontFamily="monospace" textAnchor="middle">Click / Trigger</text>

          <path d="M 82 32 H 102" stroke="#C8D8EE" strokeWidth="1.25" strokeDasharray="3 3" />

          {/* State Update */}
          <rect x="102" y="8" width="80" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="142" y="28" fill="#2563EB" fontSize="9" fontWeight="bold" textAnchor="middle">State Update</text>
          <text x="142" y="42" fill="#7C8BA1" fontSize="8" fontFamily="monospace" textAnchor="middle">Redux Slice</text>

          <path d="M 182 32 H 202" stroke="#C8D8EE" strokeWidth="1.25" strokeDasharray="3 3" />

          {/* Server State */}
          <rect x="202" y="8" width="80" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="242" y="28" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">Server State</text>
          <text x="242" y="42" fill="#7C8BA1" fontSize="8" fontFamily="monospace" textAnchor="middle">TanStack Query</text>

          <path d="M 282 32 H 302" stroke="#C8D8EE" strokeWidth="1.25" strokeDasharray="3 3" />

          {/* Cache Update */}
          <rect x="302" y="8" width="80" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="342" y="28" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">Cache Update</text>
          <text x="342" y="42" fill="#22C55E" fontSize="8" fontFamily="monospace" textAnchor="middle">Background Sync</text>

          <motion.circle r="3" fill="#06B6D4">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 42 32 H 342 H 42 Z" />
          </motion.circle>
        </svg>
      )
    },
    {
      num: "04",
      id: "performance",
      title: "Performance",
      desc: "Optimized bundle, fast loads, and smooth user experiences.",
      techs: ["Bundle Splitting", "Lazy Loading", "Asset Caching", "INP Optimizations"],
      icon: Activity,
      diagram: (
        <svg className="w-full max-w-[420px] h-[64px]" viewBox="0 0 420 64" fill="none">
          {/* LCP */}
          <rect x="2" y="8" width="60" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="32" y="20" fill="#7C8BA1" fontSize="8" textAnchor="middle">LCP</text>
          <text x="32" y="36" fill="#0F172A" fontSize="12" fontWeight="extrabold" textAnchor="middle">1.2s</text>
          <circle cx="32" cy="46" r="2.5" fill="#22C55E" />

          {/* CLS */}
          <rect x="68" y="8" width="60" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="98" y="20" fill="#7C8BA1" fontSize="8" textAnchor="middle">CLS</text>
          <text x="98" y="36" fill="#0F172A" fontSize="12" fontWeight="extrabold" textAnchor="middle">0.04</text>
          <circle cx="98" cy="46" r="2.5" fill="#22C55E" />

          {/* INP */}
          <rect x="134" y="8" width="60" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="164" y="20" fill="#7C8BA1" fontSize="8" textAnchor="middle">INP</text>
          <text x="164" y="36" fill="#0F172A" fontSize="12" fontWeight="extrabold" textAnchor="middle">120ms</text>
          <circle cx="164" cy="46" r="2.5" fill="#22C55E" />

          {/* TTFB */}
          <rect x="200" y="8" width="60" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="230" y="20" fill="#7C8BA1" fontSize="8" textAnchor="middle">TTFB</text>
          <text x="230" y="36" fill="#0F172A" fontSize="12" fontWeight="extrabold" textAnchor="middle">220ms</text>
          <circle cx="230" cy="46" r="2.5" fill="#22C55E" />

          {/* Radial progress ring mockup */}
          <circle cx="330" cy="32" r="20" stroke="#F1F6FF" strokeWidth="3" />
          <circle cx="330" cy="32" r="20" stroke="#2563EB" strokeWidth="3" strokeDasharray="95 100" />
          <text x="330" y="30" fill="#0F172A" fontSize="9" fontWeight="extrabold" textAnchor="middle">95</text>
          <text x="330" y="42" fill="#7C8BA1" fontSize="7" textAnchor="middle">Perf</text>
        </svg>
      )
    },
    {
      num: "05",
      id: "productui",
      title: "Product UI",
      desc: "Clean, accessible interfaces that balance clarity and emotion.",
      techs: ["Tailwind CSS", "Design Systems", "Figma", "Bootstrap"],
      icon: Layout,
      diagram: (
        <svg className="w-full max-w-[420px] h-[64px]" viewBox="0 0 420 64" fill="none">
          {/* Component mock checklist */}
          <rect x="2" y="8" width="100" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF" />
          <circle cx="15" cy="20" r="3" fill="#2563EB" />
          <rect x="25" y="18" width="60" height="4" rx="2" fill="#F1F6FF" />
          <circle cx="15" cy="32" r="3" fill="#2563EB" />
          <rect x="25" y="30" width="60" height="4" rx="2" fill="#F1F6FF" />
          <circle cx="15" cy="44" r="3" fill="#CBD5E1" />
          <rect x="25" y="42" width="60" height="4" rx="2" fill="#F8FAFC" />

          {/* Line Chart */}
          <rect x="110" y="8" width="150" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF" />
          <text x="118" y="20" fill="#7C8BA1" fontSize="7">New Users</text>
          <text x="118" y="32" fill="#0F172A" fontSize="10" fontWeight="extrabold">8.6K</text>
          <text x="118" y="42" fill="#22C55E" fontSize="7" fontWeight="bold">+8%</text>
          <path d="M 160 38 L 180 32 L 200 42 L 220 22 L 250 26" stroke="#2563EB" strokeWidth="1.25" strokeLinecap="round" />

          {/* Color palette */}
          <rect x="268" y="8" width="144" height="48" rx="8" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF" />
          
          <circle cx="282" cy="20" r="4" fill="#2563EB" />
          <text x="294" y="23" fill="#0F172A" fontSize="8" fontWeight="bold">Primary</text>
          <text x="368" y="23" fill="#7C8BA1" fontSize="7" fontFamily="monospace">#2563EB</text>

          <circle cx="282" cy="32" r="4" fill="#64748B" />
          <text x="294" y="35" fill="#0F172A" fontSize="8" fontWeight="bold">Neutral</text>
          <text x="368" y="35" fill="#7C8BA1" fontSize="7" fontFamily="monospace">#64748B</text>

          <circle cx="282" cy="44" r="4" fill="#22C55E" />
          <text x="294" y="47" fill="#0F172A" fontSize="8" fontWeight="bold">Success</text>
          <text x="368" y="47" fill="#7C8BA1" fontSize="7" fontFamily="monospace">#22C55E</text>
        </svg>
      )
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-20 bg-[#FCFCFD] border-b border-[#E4EAF2] px-8 md:px-16" ref={containerRef}>
      <motion.div
        className="max-w-[1200px] mx-auto flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Label */}
        <motion.span variants={itemVariants} className="font-mono text-[10px] tracking-[0.25em] text-[#8491A6] uppercase block font-bold text-left">
          04 / STACK
        </motion.span>

        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 text-left">
          <h2 className="text-3xl md:text-[44px] font-bold text-[#0F172A] leading-tight tracking-tight">
            Technical Capabilities & Stack.
          </h2>
        </motion.div>

        {/* Capabilities & Stack Rows */}
        <div className="flex flex-col border-t border-[#E4EAF2]">
          {capabilities.map((item) => {
            const IconComp = item.icon;
            const isHovered = hoveredId === item.id;
            return (
              <motion.div
                key={item.num}
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="grid grid-cols-1 lg:grid-cols-12 py-8 items-center border-b border-[#E4EAF2] hover:bg-white/60 hover:shadow-[0_8px_30px_rgba(15,23,42,0.02)] transition-all duration-300 group relative text-left"
              >
                {/* Absolute left active line (avoids shifting card borders) */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2563EB] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-r-lg" />

                {/* COLUMN 1: Number (col-span-1) */}
                <div className="lg:col-span-1 mb-2 lg:mb-0 text-left pl-3">
                  <span className="font-mono text-xs text-[#8491A6] group-hover:text-[#2563EB] transition-colors font-bold">
                    {item.num}
                  </span>
                </div>

                {/* COLUMN 2: Title & Details (col-span-5) */}
                <div className="lg:col-span-5 flex gap-4 items-start pr-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-[#F6F9FF] border border-[#E1E9F5] flex items-center justify-center text-[#8491A6] group-hover:bg-[#EFF6FF] group-hover:text-[#2563EB] transition-colors shrink-0">
                    <IconComp size={16} className="stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[15px] font-bold tracking-wide text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-1">
                      {item.title}
                    </span>
                    <span className="text-[13px] text-[#526079] leading-relaxed mb-4">
                      {item.desc}
                    </span>

                    {/* Integrated Technology chips inside row */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {item.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[9.5px] font-mono bg-[#F8FAFC] border border-[#E4EAF2] text-[#64748B] rounded font-semibold group-hover:bg-[#F1F6FF] group-hover:border-[#2563EB]/15 group-hover:text-[#2563EB] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* COLUMN 3: SVG Flowchart Diagram (col-span-6) */}
                <div className="lg:col-span-6 flex justify-start lg:justify-end items-center mt-6 lg:mt-0 w-full overflow-x-auto">
                  {item.diagram}
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};

export default SkillsSection;