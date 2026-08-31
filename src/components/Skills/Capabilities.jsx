import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PanelsTopLeft, Layers3, Workflow, Gauge, LayoutTemplate, BadgeCheck } from "lucide-react";

const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.15 });

  const items = [
    {
      num: "01",
      title: "Frontend Systems",
      desc: "Component-driven React architecture, complex client-side workflows, and reusable component libraries designed for scale.",
      icon: PanelsTopLeft,
      diagram: (
        <svg className="w-[300px] h-[34px]" viewBox="0 0 300 34" fill="none">
          <rect x="2" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="32" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Comp</text>
          
          <rect x="82" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="112" y="19" fill="#2563EB" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">State</text>

          <rect x="162" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="192" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">API</text>

          <rect x="238" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="268" y="19" fill="#22C55E" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">UI Layer</text>

          <motion.path d="M 62 16 H 82" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
          <motion.path d="M 142 16 H 162" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
          <motion.path d="M 222 16 H 238" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Animating signal dot */}
          <motion.circle r="3" fill="#2563EB">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 32 16 H 268" />
          </motion.circle>
        </svg>
      )
    },
    {
      num: "02",
      title: "Full-Stack Products",
      desc: "Robust full-stack development aligning frontend UI flows with optimized backend Node/Express REST APIs and MongoDB databases.",
      icon: Layers3,
      diagram: (
        <svg className="w-[300px] h-[34px]" viewBox="0 0 300 34" fill="none">
          <rect x="2" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="32" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Browser</text>
          
          <rect x="82" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="112" y="19" fill="#2563EB" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Node API</text>

          <rect x="162" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="192" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Database</text>

          <rect x="238" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="268" y="19" fill="#22C55E" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Deploy</text>

          <motion.path d="M 62 16 H 82" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
          <motion.path d="M 142 16 H 162" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
          <motion.path d="M 222 16 H 238" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />

          <motion.circle r="3" fill="#2563EB">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 32 16 H 268" />
          </motion.circle>
        </svg>
      )
    },
    {
      num: "03",
      title: "State & Data Flows",
      desc: "Clean client data orchestration using Redux Toolkit, Context API, dynamic cache configurations, and optimized data sync.",
      icon: Workflow,
      diagram: (
        <svg className="w-[300px] h-[34px]" viewBox="0 0 300 34" fill="none">
          <rect x="2" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="32" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Action</text>
          
          <rect x="82" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="112" y="19" fill="#2563EB" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Redux</text>

          <rect x="162" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="192" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Server</text>

          <rect x="238" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="268" y="19" fill="#22C55E" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Cache</text>

          <motion.path d="M 62 16 H 82" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
          {/* Double-arrow connector */}
          <motion.path d="M 142 13 H 162" stroke="#06B6D4" strokeWidth="1" />
          <motion.path d="M 162 19 H 142" stroke="#06B6D4" strokeWidth="1" />
          <motion.path d="M 222 16 H 238" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />

          <motion.circle r="3" fill="#06B6D4">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 32 16 H 112 H 192 H 112 Z" />
          </motion.circle>
        </svg>
      )
    },
    {
      num: "04",
      title: "Performance Audits",
      desc: "Minimizing bundle payloads, caching API payloads, avoiding layout shifts, and implementing GPU-friendly CSS layers.",
      icon: Gauge,
      diagram: (
        <svg className="w-[300px] h-[34px]" viewBox="0 0 300 34" fill="none">
          <rect x="2" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="32" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Lazy</text>
          
          <rect x="82" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="112" y="19" fill="#2563EB" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Split</text>

          <rect x="162" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="192" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Memo</text>

          <rect x="238" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="268" y="19" fill="#22C55E" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Render</text>

          <motion.path d="M 62 16 H 82" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
          <motion.path d="M 142 16 H 162" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
          <motion.path d="M 222 16 H 238" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />

          <motion.circle r="3" fill="#2563EB">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 32 16 H 268" />
          </motion.circle>
        </svg>
      )
    },
    {
      num: "05",
      title: "Product UI Systems",
      desc: "Building accessible web experiences (following Web Content Accessibility Guidelines), semantic structuring, and micro-animations.",
      icon: LayoutTemplate,
      diagram: (
        <svg className="w-[300px] h-[34px]" viewBox="0 0 300 34" fill="none">
          <rect x="2" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="32" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Tokens</text>
          
          <rect x="82" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="112" y="19" fill="#2563EB" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Comps</text>

          <rect x="162" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="192" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Resp UI</text>

          <rect x="238" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="268" y="19" fill="#22C55E" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Access</text>

          <motion.path d="M 62 16 H 82" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
          <motion.path d="M 142 16 H 162" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
          <motion.path d="M 222 16 H 238" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />

          <motion.circle r="3" fill="#2563EB">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 32 16 H 268" />
          </motion.circle>
        </svg>
      )
    },
    {
      num: "06",
      title: "Engineering Quality",
      desc: "Writing clean dry code, setting up lint boundaries, managing Git modules, and integrating automated deployment scripts.",
      icon: BadgeCheck,
      diagram: (
        <svg className="w-[300px] h-[34px]" viewBox="0 0 300 34" fill="none">
          <rect x="2" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="32" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Code</text>
          
          <rect x="82" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="112" y="19" fill="#2563EB" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Tests</text>

          <rect x="162" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="192" y="19" fill="#0F172A" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">Lint</text>

          <rect x="238" y="4" width="60" height="24" rx="4" stroke="#D5DDE8" strokeWidth="1" fill="#FFFFFF"/>
          <text x="268" y="19" fill="#22C55E" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">CI/CD</text>

          <motion.path d="M 62 16 H 82" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
          <motion.path d="M 142 16 H 162" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
          <motion.path d="M 222 16 H 238" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />

          <motion.circle r="3" fill="#2563EB">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 32 16 H 268" />
          </motion.circle>
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
    <section id="capabilities" className="py-28 md:py-36 bg-[#FCFCFD] border-b border-[#E4EAF2] px-8 md:px-16" ref={ref}>
      <motion.div
        className="max-w-[1200px] mx-auto flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Label */}
        <motion.span variants={itemVariants} className="font-mono text-[10px] tracking-[0.25em] text-[#8491A6] uppercase block font-bold">
          04 / CAPABILITIES
        </motion.span>

        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl md:text-[44px] font-bold text-[#0F172A] leading-tight tracking-tight text-left">
            Where I add value.
          </h2>
        </motion.div>

        {/* Capabilities Rows */}
        <div className="flex flex-col border-t border-[#E4EAF2] mt-4">
          {items.map((item) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.num}
                variants={itemVariants}
                className="grid md:grid-cols-12 py-7 items-center border-b border-[#E4EAF2] hover:bg-white hover:border-l-2 hover:border-l-[#2563EB] hover:border-t-[#E1E9F5] hover:border-b-[#E1E9F5] hover:border-r-[#E1E9F5] hover:shadow-[0_8px_30px_rgba(15,23,42,0.03)] hover:pl-4 transition-all duration-300 group"
              >
                {/* COLUMN 1: Number (8% / approx 1 grid column) */}
                <div className="md:col-span-1 mb-2 md:mb-0 text-left">
                  <span className="font-mono text-xs text-[#8491A6] group-hover:text-[#2563EB] transition-colors font-bold">
                    {item.num}
                  </span>
                </div>

                {/* COLUMN 2: Icon + Text (42% / approx 5 grid columns) */}
                <div className="md:col-span-5 flex gap-4 items-start pr-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-[#F6F9FF] border border-[#E1E9F5] flex items-center justify-center text-[#8491A6] group-hover:bg-[#EFF6FF] group-hover:text-[#2563EB] transition-colors shrink-0">
                    <IconComp size={16} className="stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[15px] font-bold tracking-wide text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-1">
                      {item.title}
                    </span>
                    <span className="text-[13px] text-[#526079] leading-relaxed group-hover:text-[#0F172A] transition-colors">
                      {item.desc}
                    </span>
                  </div>
                </div>

                {/* COLUMN 3: Technical Micro-Diagram (50% / approx 6 grid columns) */}
                <div className="md:col-span-6 flex justify-end items-center mt-4 md:mt-0">
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

export default Capabilities;
