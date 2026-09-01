import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ArrowRight, Server, Cpu, Database, Blocks, Network } from "lucide-react";

/* ── word-split helper ── */
const SplitWords = ({ text, baseDelay = 0, className = "", wordClass = "" }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: i < words.length - 1 ? "0.28em" : 0 }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: baseDelay + i * 0.08,
            }}
            className={wordClass}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/* ── animated underline stroke ── */
const UnderlineStroke = ({ delay = 0 }) => (
  <svg
    viewBox="0 0 320 12"
    className="absolute -bottom-2 left-0 w-full"
    fill="none"
    style={{ overflow: "visible" }}
  >
    <motion.path
      d="M4 8 Q80 4 160 8 Q240 12 316 6"
      stroke="#2563EB"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    />
  </svg>
);

/* ── typewriter cursor — pure CSS blink (no framer-motion ease issue) ── */
const Cursor = () => (
  <span
    className="inline-block w-[3px] ml-1 align-middle bg-[#2563EB]"
    style={{
      height: "0.85em",
      animation: "blink 0.9s step-end infinite",
    }}
  />
);

/* inject blink keyframes once */
if (typeof document !== "undefined" && !document.getElementById("cursor-blink-style")) {
  const s = document.createElement("style");
  s.id = "cursor-blink-style";
  s.textContent = "@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }";
  document.head.appendChild(s);
}

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState(null);
  const [showCursor, setShowCursor] = useState(true);
  const panelRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setShowCursor(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  /* delays */
  const eyebrowDelay = 0.05;
  const h1Delay     = 0.20;
  const descDelay   = 0.70;
  const btnDelay    = 0.85;
  const panelDelay  = 0.55;
  const nodesDelay  = 0.75;

  const itemReveal = {
    hidden: { opacity: 0, y: 24 },
    visible: (d) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
    }),
  };

  const lineVariants = {
    hidden:  { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut", delay: nodesDelay } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FCFCFD] border-b border-[#E4EAF2] px-8 md:px-16"
    >
      {/* Background grids */}
      <div className="absolute inset-y-0 right-0 left-[45%] thin-grid opacity-[0.25] pointer-events-none" />
      <div className="absolute inset-y-0 left-0 right-[55%] thin-grid opacity-[0.08] pointer-events-none" />
      <div className="custom-spotlight hidden lg:block" />

      {/* Ambient blue glow */}
      <motion.div
        className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-[1200px] grid lg:grid-cols-12 gap-12 items-center py-20">

        {/* ── LEFT COLUMN ── */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Eyebrow */}
          <motion.div
            custom={eyebrowDelay}
            variants={itemReveal}
            initial="hidden"
            animate="visible"
            className="mb-5 flex items-center gap-2"
          >
            <motion.span
              className="h-[1.5px] bg-[#2563EB]"
              initial={{ width: 0 }}
              animate={{ width: 24 }}
              transition={{ duration: 0.5, delay: eyebrowDelay }}
            />
            <span className="font-mono text-[12px] tracking-[0.18em] text-[#2563EB] uppercase font-bold">
              01 / PRODUCT ENGINEER / REACT + MERN
            </span>
          </motion.div>

          {/* Headline — word-by-word clip reveal */}
          <div className="mb-6 flex flex-col items-start">

            <h1 className="text-4xl md:text-[64px] lg:text-[70px] font-extrabold text-[#0F172A] leading-[0.96] tracking-tighter">
              <SplitWords text="BUILDING WEB" baseDelay={h1Delay} />
            </h1>

            <h1 className="text-4xl md:text-[64px] lg:text-[70px] font-extrabold text-[#0F172A] leading-[0.96] tracking-tighter">
              <SplitWords text="PRODUCTS THAT" baseDelay={h1Delay + 0.10} />
            </h1>

            <h1 className="text-4xl md:text-[64px] lg:text-[70px] font-extrabold leading-[0.96] tracking-tighter">
              <SplitWords text="HOLD UP IN" baseDelay={h1Delay + 0.20} className="text-[#0F172A]" />
              {" "}
              {/* Blue word with underline + cursor */}
              <span className="relative inline-block">
                <span style={{ overflow: "hidden", display: "inline-block" }}>
                  <motion.span
                    style={{ display: "inline-block" }}
                    className="text-[#2563EB]"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: h1Delay + 0.44 }}
                  >
                    PRODUCTION.
                  </motion.span>
                </span>
                {/* Animated underline */}
                <UnderlineStroke delay={h1Delay + 0.55} />
                {/* Blinking cursor after word loads */}
                <AnimatePresence>
                  {showCursor && (
                    <motion.span
                      key="cursor"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: h1Delay + 0.55 }}
                    >
                      <Cursor />
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </h1>
          </div>

          {/* Desc */}
          <motion.p
            custom={descDelay}
            variants={itemReveal}
            initial="hidden"
            animate="visible"
            className="text-base md:text-[18px] text-[#526079] max-w-[600px] mb-8 leading-[1.65] font-normal"
          >
            I am a{" "}
            <motion.span
              className="font-semibold text-[#0F172A] relative"
              initial={{ color: "#2563EB" }}
              animate={{ color: "#0F172A" }}
              transition={{ delay: descDelay + 0.6, duration: 0.5 }}
            >
              React.js
            </motion.span>{" "}
            &{" "}
            <motion.span
              className="font-semibold text-[#0F172A]"
              initial={{ color: "#2563EB" }}
              animate={{ color: "#0F172A" }}
              transition={{ delay: descDelay + 0.8, duration: 0.5 }}
            >
              MERN Full-Stack
            </motion.span>{" "}
            Developer focused on building production-ready web applications, reusable frontend systems, and API-driven products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={btnDelay}
            variants={itemReveal}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              onClick={handleScrollToProjects}
              className="h-12 px-6 bg-[#2563EB] text-white font-bold text-[13px] tracking-wider uppercase rounded-lg flex items-center gap-2 group shadow-[0_10px_28px_rgba(37,99,235,0.25)] relative overflow-hidden"
              whileHover={{ y: -2, boxShadow: "0 16px 36px rgba(37,99,235,0.35)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              {/* Shimmer sweep */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{ translateX: ["−100%", "200%"] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
              />
              <span className="relative">View Selected Work</span>
              <motion.div
                className="inline-flex relative"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
              >
                <ArrowRight size={14} />
              </motion.div>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Resume.pdf"
              className="h-12 px-6 border border-[#D8E0EB] text-[#1E293B] font-bold text-[13px] tracking-wider uppercase rounded-lg bg-white flex items-center gap-2"
              whileHover={{ y: -2, borderColor: "#2563EB", color: "#2563EB", boxShadow: "0 8px 20px rgba(37,99,235,0.08)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Download Résumé
            </motion.a>
          </motion.div>

        </div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          ref={panelRef}
          onMouseMove={handleMouseMove}
          custom={panelDelay}
          variants={itemReveal}
          initial="hidden"
          animate="visible"
          whileHover={{ y: -2 }}
          className="lg:col-span-5 relative w-full h-[430px] flex items-center justify-center rounded-[20px] border border-[#2563EB]/14 p-6 overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#F1F6FF] to-[#F8FBFF]"
          style={{ boxShadow: "0 18px 50px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.85)" }}
        >
          {/* Concentric circles */}
          <div className="absolute w-[320px] h-[320px] rounded-full border border-[#2563EB]/[0.05] pointer-events-none" />
          <div className="absolute w-[220px] h-[220px] rounded-full border border-[#2563EB]/[0.03] pointer-events-none" />
          <div className="absolute w-[120px] h-[120px] rounded-full border border-[#2563EB]/[0.015] pointer-events-none" />

          <span className="absolute top-4 left-4 font-mono text-[8px] text-[#7C8BA1]/50 select-none">X: 104.2 Y: 89.3</span>
          <span className="absolute bottom-4 right-4 font-mono text-[8px] text-[#7C8BA1]/50 select-none">SEC: 2026.08</span>

          {/* Connector SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 350" fill="none">
            <motion.path d="M 200 65 V 105" stroke="#C8D8EE" strokeWidth="1.25" variants={lineVariants} initial="hidden" animate="visible" />
            <motion.path d="M 200 155 V 170" stroke="#C8D8EE" strokeWidth="1.25" variants={lineVariants} initial="hidden" animate="visible" />
            <motion.path d="M 200 195 L 110 220" stroke="#C8D8EE" strokeWidth="1.25" variants={lineVariants} initial="hidden" animate="visible" />
            <motion.path d="M 200 195 L 290 220" stroke="#C8D8EE" strokeWidth="1.25" variants={lineVariants} initial="hidden" animate="visible" />
            <motion.path d="M 110 270 L 200 300" stroke="#C8D8EE" strokeWidth="1.25" variants={lineVariants} initial="hidden" animate="visible" />
            <motion.path d="M 290 270 L 200 300" stroke="#C8D8EE" strokeWidth="1.25" variants={lineVariants} initial="hidden" animate="visible" />

            {/* Primary signal — fast blue */}
            <motion.circle r="4" fill="#2563EB" style={{ filter: "drop-shadow(0 0 8px rgba(37,99,235,0.6))" }}>
              <animateMotion dur="5s" repeatCount="indefinite"
                path="M 200 45 V 195 L 110 220 V 270 L 200 300 L 290 270 V 220 L 200 195 V 45" />
            </motion.circle>

            {/* Secondary trailing dot — lighter, slower */}
            <motion.circle r="2.5" fill="#60A5FA" style={{ filter: "drop-shadow(0 0 5px rgba(96,165,250,0.5))" }}>
              <animateMotion dur="5s" begin="1.2s" repeatCount="indefinite"
                path="M 200 45 V 195 L 110 220 V 270 L 200 300 L 290 270 V 220 L 200 195 V 45" />
            </motion.circle>

            {/* Pulse rings on center node */}
            <motion.circle cx="200" cy="182" r="18" stroke="#2563EB" strokeWidth="1"
              initial={{ scale: 0.8, opacity: 0.6 }}
              animate={{ scale: [0.8, 1.6], opacity: [0.5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
            />
            <motion.circle cx="200" cy="182" r="18" stroke="#2563EB" strokeWidth="1"
              initial={{ scale: 0.8, opacity: 0.4 }}
              animate={{ scale: [0.8, 1.6], opacity: [0.4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 2.4 }}
            />
          </svg>

          {/* Nodes */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between items-center">

            <motion.div
              custom={nodesDelay + 0.1} variants={itemReveal} initial="hidden" animate="visible"
              onMouseEnter={() => setHoveredNode("react")} onMouseLeave={() => setHoveredNode(null)}
              className={`flex items-center gap-3 bg-white/92 border px-4 py-2.5 rounded-[14px] w-[150px] shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-all duration-300 ${hoveredNode === "react" ? "border-[#2563EB]/40 shadow-[0_8px_22px_rgba(37,99,235,0.12)] -translate-y-0.5" : "border-[#D9E5F5]"}`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0">
                <Blocks size={16} className="stroke-[1.8]" />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[14px] font-bold text-[#0F172A] leading-none mb-1">React</span>
                <span className="text-[10px] font-mono text-[#7C8BA1] leading-none">UI Engine</span>
              </div>
            </motion.div>

            <motion.div
              custom={nodesDelay + 0.2} variants={itemReveal} initial="hidden" animate="visible"
              onMouseEnter={() => setHoveredNode("state")} onMouseLeave={() => setHoveredNode(null)}
              className={`flex items-center gap-3 bg-white/92 border px-4 py-2.5 rounded-[14px] w-[150px] shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-all duration-300 ${hoveredNode === "state" ? "border-[#2563EB]/40 shadow-[0_8px_22px_rgba(37,99,235,0.12)] -translate-y-0.5" : "border-[#D9E5F5]"}`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#06B6D4] shrink-0">
                <Network size={16} className="stroke-[1.8]" />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[14px] font-bold text-[#0F172A] leading-none mb-1">State</span>
                <span className="text-[10px] font-mono text-[#7C8BA1] leading-none">Redux Store</span>
              </div>
            </motion.div>

            {/* Central pill — glows */}
            <motion.div
              custom={nodesDelay + 0.3}
              variants={itemReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative bg-[#2563EB] text-white px-5 py-2.5 rounded-full font-mono text-[9px] font-bold tracking-widest uppercase z-10 animate-glow-pulse"
            >
              REQUEST LIFECYCLE
            </motion.div>

            <div className="flex justify-between w-full px-2">
              <motion.div
                custom={nodesDelay + 0.4} variants={itemReveal} initial="hidden" animate="visible"
                onMouseEnter={() => setHoveredNode("api")} onMouseLeave={() => setHoveredNode(null)}
                className={`flex items-center gap-3 bg-white/92 border px-4 py-2.5 rounded-[14px] w-[150px] shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-all duration-300 ${hoveredNode === "api" ? "border-[#2563EB]/40 shadow-[0_8px_22px_rgba(37,99,235,0.12)] -translate-y-0.5" : "border-[#D9E5F5]"}`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0">
                  <Cpu size={16} className="stroke-[1.8]" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[14px] font-bold text-[#0F172A] leading-none mb-1">REST API</span>
                  <span className="text-[10px] font-mono text-[#7C8BA1] leading-none">Express</span>
                </div>
              </motion.div>

              <motion.div
                custom={nodesDelay + 0.5} variants={itemReveal} initial="hidden" animate="visible"
                onMouseEnter={() => setHoveredNode("node")} onMouseLeave={() => setHoveredNode(null)}
                className={`flex items-center gap-3 bg-white/92 border px-4 py-2.5 rounded-[14px] w-[150px] shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-all duration-300 ${hoveredNode === "node" ? "border-[#2563EB]/40 shadow-[0_8px_22px_rgba(37,99,235,0.12)] -translate-y-0.5" : "border-[#D9E5F5]"}`}
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

            <motion.div
              custom={nodesDelay + 0.6} variants={itemReveal} initial="hidden" animate="visible"
              onMouseEnter={() => setHoveredNode("db")} onMouseLeave={() => setHoveredNode(null)}
              className={`flex items-center gap-3 bg-white/92 border px-4 py-2.5 rounded-[14px] w-[150px] shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-all duration-300 ${hoveredNode === "db" ? "border-[#2563EB]/40 shadow-[0_8px_22px_rgba(37,99,235,0.12)] -translate-y-0.5" : "border-[#D9E5F5]"}`}
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
