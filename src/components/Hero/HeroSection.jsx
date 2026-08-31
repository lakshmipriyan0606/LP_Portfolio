import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Server, Cpu, Database, Blocks, Network } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState(null);
  const panelRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Entrance Animation Sequence Delays
  const eyebrowDelay = 0.10;
  const line1Delay = 0.18;
  const line2Delay = 0.26;
  const line3Delay = 0.34;
  const descDelay = 0.42;
  const btnDelay = 0.50;
  const panelDelay = 0.60;
  const nodesDelay = 0.70;

  const itemReveal = {
    hidden: { opacity: 0, y: 28 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: customDelay,
      },
    }),
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        delay: nodesDelay,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FCFCFD] border-b border-[#E4EAF2] px-8 md:px-16"
    >
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-y-0 right-0 left-[45%] thin-grid opacity-[0.25] pointer-events-none" />
      <div className="absolute inset-y-0 left-0 right-[55%] thin-grid opacity-[0.08] pointer-events-none" />
      
      {/* Spotlight effect */}
      <div className="custom-spotlight hidden lg:block" />

      {/* Main Grid Layout */}
      <div className="relative z-10 w-full max-w-[1200px] grid lg:grid-cols-12 gap-12 items-center py-20">
        
        {/* LEFT COLUMN (55% / 7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Eyebrow Label */}
          <motion.div
            custom={eyebrowDelay}
            variants={itemReveal}
            initial="hidden"
            animate="visible"
            className="mb-5 flex items-center gap-2"
          >
            <span className="w-6 h-[1.5px] bg-[#2563EB]" />
            <span className="font-mono text-[12px] tracking-[0.18em] text-[#2563EB] uppercase font-bold">
              01 / PRODUCT ENGINEER / REACT + MERN
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6 flex flex-col items-start">
            <div className="overflow-hidden">
              <motion.h1
                custom={line1Delay}
                variants={itemReveal}
                initial="hidden"
                animate="visible"
                style={{ textShadow: "0 1px 1px rgba(15,23,42,.03)" }}
                className="text-4xl md:text-[64px] lg:text-[70px] font-extrabold text-[#0F172A] leading-[0.96] tracking-tighter"
              >
                BUILDING WEB
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                custom={line2Delay}
                variants={itemReveal}
                initial="hidden"
                animate="visible"
                style={{ textShadow: "0 1px 1px rgba(15,23,42,.03)" }}
                className="text-4xl md:text-[64px] lg:text-[70px] font-extrabold text-[#0F172A] leading-[0.96] tracking-tighter"
              >
                PRODUCTS THAT
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                custom={line3Delay}
                variants={itemReveal}
                initial="hidden"
                animate="visible"
                style={{ textShadow: "0 1px 1px rgba(15,23,42,.03)" }}
                className="text-4xl md:text-[64px] lg:text-[70px] font-extrabold text-[#0F172A] leading-[0.96] tracking-tighter"
              >
                HOLD UP IN <span className="text-[#2563EB]">PRODUCTION.</span>
              </motion.h1>
            </div>
          </div>

          {/* Tagline Description */}
          <motion.p
            custom={descDelay}
            variants={itemReveal}
            initial="hidden"
            animate="visible"
            className="text-base md:text-[18px] text-[#526079] max-w-[600px] mb-8 leading-[1.65] font-normal"
          >
            I am a <span className="font-semibold text-[#0F172A]">React.js</span> & <span className="font-semibold text-[#0F172A]">MERN Full-Stack</span> Developer focused on building
            production-ready web applications, reusable frontend systems, and API-driven products.
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            custom={btnDelay}
            variants={itemReveal}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="h-12 px-6 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-[13px] tracking-wider uppercase rounded-lg hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-2 group shadow-[0_10px_28px_rgba(37,99,235,0.18)]"
            >
              <span>View Selected Work</span>
              <motion.div
                className="inline-flex"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={14} />
              </motion.div>
            </a>
            <a
              href="/resume.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 border border-[#D8E0EB] hover:border-[#93B4F5] text-[#1E293B] font-bold text-[13px] tracking-wider uppercase rounded-lg hover:translate-y-[-2px] bg-white hover:bg-[#F8FAFF] transition-all duration-300 flex items-center gap-2"
            >
              <span>Download Résumé</span>
            </a>
          </motion.div>

        </div>

        {/* RIGHT COLUMN (45% / 5 cols) - Premium SaaS Architecture Canvas */}
        <motion.div
          ref={panelRef}
          onMouseMove={handleMouseMove}
          custom={panelDelay}
          variants={itemReveal}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -2 }}
          className="lg:col-span-5 relative w-full h-[430px] flex items-center justify-center rounded-[20px] border border-[#2563EB]/14 p-6 overflow-hidden shadow-[0_18px_50px_rgba(37,99,235,0.08)] bg-gradient-to-br from-[#F8FAFF] via-[#F1F6FF] to-[#F8FBFF]"
          style={{
            boxShadow: "0 18px 50px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.85)"
          }}
        >
          {/* Subtle Technical Concentric Circles and Coordinate Markers */}
          <div className="absolute w-[320px] h-[320px] rounded-full border border-[#2563EB]/[0.05] pointer-events-none" />
          <div className="absolute w-[220px] h-[220px] rounded-full border border-[#2563EB]/[0.03] pointer-events-none" />
          <div className="absolute w-[120px] h-[120px] rounded-full border border-[#2563EB]/[0.015] pointer-events-none" />
          
          <span className="absolute top-4 left-4 font-mono text-[8px] text-[#7C8BA1]/50 select-none">X: 104.2 Y: 89.3</span>
          <span className="absolute bottom-4 right-4 font-mono text-[8px] text-[#7C8BA1]/50 select-none">SEC: 2026.08</span>

          {/* Connectors SVG Canvas */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 350" fill="none">
            {/* React to Client State */}
            <motion.path
              d="M 200 65 V 105"
              stroke="#C8D8EE"
              strokeWidth="1.25"
              variants={lineVariants}
            />
            {/* Client State to REQUEST FLOW */}
            <motion.path
              d="M 200 155 V 170"
              stroke="#C8D8EE"
              strokeWidth="1.25"
              variants={lineVariants}
            />
            {/* REQUEST FLOW to REST API */}
            <motion.path
              d="M 200 195 L 110 220"
              stroke="#C8D8EE"
              strokeWidth="1.25"
              variants={lineVariants}
            />
            {/* REQUEST FLOW to Node.js */}
            <motion.path
              d="M 200 195 L 290 220"
              stroke="#C8D8EE"
              strokeWidth="1.25"
              variants={lineVariants}
            />
            {/* REST API to MongoDB */}
            <motion.path
              d="M 110 270 L 200 300"
              stroke="#C8D8EE"
              strokeWidth="1.25"
              variants={lineVariants}
            />
            {/* Node.js to MongoDB */}
            <motion.path
              d="M 290 270 L 200 300"
              stroke="#C8D8EE"
              strokeWidth="1.25"
              variants={lineVariants}
            />

            {/* Loop track for signal dot path React -> REST API -> Node.js -> MongoDB */}
            <motion.circle
              r="4"
              fill="#2563EB"
              style={{ filter: "drop-shadow(0 0 8px rgba(37,99,235,0.3))" }}
            >
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M 200 45 V 195 L 110 220 V 270 L 200 300 L 290 270 V 220 L 200 195 V 45"
              />
            </motion.circle>
          </svg>

          {/* Nodes absolute container */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between items-center">
            
            {/* Node: React */}
            <motion.div
              custom={nodesDelay + 0.1}
              variants={itemReveal}
              initial="hidden"
              animate="visible"
              onMouseEnter={() => setHoveredNode("react")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`flex items-center gap-3 bg-white/92 border px-4 py-2.5 rounded-[14px] w-[150px] shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-all duration-300 ${
                hoveredNode === "react" ? "border-[#2563EB]/40 shadow-[0_8px_22px_rgba(37,99,235,0.1)]" : "border-[#D9E5F5]"
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0">
                <Blocks size={16} className="stroke-[1.8]" />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[14px] font-bold text-[#0F172A] leading-none mb-1">React</span>
                <span className="text-[10px] font-mono text-[#7C8BA1] leading-none">UI Engine</span>
              </div>
            </motion.div>

            {/* Node: Client State */}
            <motion.div
              custom={nodesDelay + 0.2}
              variants={itemReveal}
              initial="hidden"
              animate="visible"
              onMouseEnter={() => setHoveredNode("state")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`flex items-center gap-3 bg-white/92 border px-4 py-2.5 rounded-[14px] w-[150px] shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-all duration-300 ${
                hoveredNode === "state" ? "border-[#2563EB]/40 shadow-[0_8px_22px_rgba(37,99,235,0.1)]" : "border-[#D9E5F5]"
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#06B6D4] shrink-0">
                <Network size={16} className="stroke-[1.8]" />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[14px] font-bold text-[#0F172A] leading-none mb-1">State</span>
                <span className="text-[10px] font-mono text-[#7C8BA1] leading-none">Redux Store</span>
              </div>
            </motion.div>

            {/* Central node: REQUEST LIFECYCLE */}
            <motion.div
              custom={nodesDelay + 0.3}
              variants={itemReveal}
              initial="hidden"
              animate="visible"
              className="bg-[#2563EB] text-white px-5 py-2.5 rounded-full font-mono text-[9px] font-bold tracking-widest uppercase shadow-md select-none z-10"
            >
              REQUEST LIFECYCLE
            </motion.div>

            {/* Row: REST API & Node.js */}
            <div className="flex justify-between w-full px-2">
              {/* Node: REST API */}
              <motion.div
                custom={nodesDelay + 0.4}
                variants={itemReveal}
                initial="hidden"
                animate="visible"
                onMouseEnter={() => setHoveredNode("api")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`flex items-center gap-3 bg-white/92 border px-4 py-2.5 rounded-[14px] w-[150px] shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-all duration-300 ${
                  hoveredNode === "api" ? "border-[#2563EB]/40 shadow-[0_8px_22px_rgba(37,99,235,0.1)]" : "border-[#D9E5F5]"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0">
                  <Cpu size={16} className="stroke-[1.8]" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[14px] font-bold text-[#0F172A] leading-none mb-1">REST API</span>
                  <span className="text-[10px] font-mono text-[#7C8BA1] leading-none">Express</span>
                </div>
              </motion.div>

              {/* Node: Node.js */}
              <motion.div
                custom={nodesDelay + 0.5}
                variants={itemReveal}
                initial="hidden"
                animate="visible"
                onMouseEnter={() => setHoveredNode("node")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`flex items-center gap-3 bg-white/92 border px-4 py-2.5 rounded-[14px] w-[150px] shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-all duration-300 ${
                  hoveredNode === "node" ? "border-[#2563EB]/40 shadow-[0_8px_22px_rgba(37,99,235,0.1)]" : "border-[#D9E5F5]"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#22C55E] shrink-0">
                  <Server size={16} className="stroke-[1.8]" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[14px] font-bold text-[#0F172A] leading-none mb-1">Node.js</span>
                  <span className="text-[10px] font-mono text-[#7C8BA1] leading-none">Runtime</span>
                </div>
              </motion.div>
            </div>

            {/* Node: MongoDB */}
            <motion.div
              custom={nodesDelay + 0.6}
              variants={itemReveal}
              initial="hidden"
              animate="visible"
              onMouseEnter={() => setHoveredNode("db")}
              onMouseLeave={() => setHoveredNode(null)}
              className={`flex items-center gap-3 bg-white/92 border px-4 py-2.5 rounded-[14px] w-[150px] shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-all duration-300 ${
                hoveredNode === "db" ? "border-[#2563EB]/40 shadow-[0_8px_22px_rgba(37,99,235,0.1)]" : "border-[#D9E5F5]"
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#22C55E] shrink-0">
                <Database size={16} className="stroke-[1.8]" />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[14px] font-bold text-[#0F172A] leading-none mb-1">MongoDB</span>
                <span className="text-[10px] font-mono text-[#7C8BA1] leading-none">Database</span>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
