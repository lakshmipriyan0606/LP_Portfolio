import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, FileText, ArrowRight, Laptop, Server, Database } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-20 bg-[#FCFCFD] px-8 md:px-16 overflow-hidden flex flex-col justify-between"
      ref={ref}
    >
      {/* Blueprint background grid pattern */}
      <div className="absolute inset-0 thin-grid opacity-[0.4]" />
      
      {/* Huge Background Watermark Text in light gray */}
      <div className="absolute bottom-0 right-0 left-0 text-center select-none pointer-events-none z-0 overflow-hidden leading-none h-[180px] md:h-[260px] opacity-[0.02] flex items-end justify-center">
        <span className="font-extrabold tracking-tighter text-[90px] md:text-[180px] text-[#0F172A]">
          BUILD.SHIP.IMPROVE.
        </span>
      </div>

      <motion.div
        className="max-w-[1200px] mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 my-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ hidden: {}, visible: {} }}
      >
        {/* Left Column — slides in from left */}
        <motion.div
          className="lg:col-span-6 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -48 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-[10px] tracking-[0.25em] text-[#8491A6] uppercase block mb-4 font-bold"
          >
            05 / CONTACT
          </motion.span>

          <div className="overflow-hidden mb-6">
            <motion.h2
              className="text-3xl md:text-[52px] font-extrabold text-[#0F172A] leading-[1.05] tracking-tighter"
              initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
              animate={isInView ? { clipPath: "inset(0 0 0% 0)", opacity: 1 } : {}}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              Looking for an engineer<br />
              who can ship?<br />
              <motion.span
                className="text-[#2563EB] inline-block"
                animate={{ textShadow: ["0 0 0px rgba(37,99,235,0)", "0 0 20px rgba(37,99,235,0.3)", "0 0 0px rgba(37,99,235,0)"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                Let's talk.
              </motion.span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-[#475569] leading-relaxed mb-10 max-w-[460px]"
          >
            I'm open to React.js, MERN, and Full-Stack opportunities where I can build, ship, and make an impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col gap-4 w-full max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <motion.a
              href="mailto:lakshmipriyan0606@gmail.com"
              className="relative flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-[#2563EB] text-white font-bold text-xs tracking-wider uppercase shadow-md overflow-hidden"
              whileHover={{ y: -3, boxShadow: "0 16px 36px rgba(37,99,235,0.32)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              {/* shimmer */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 3 }}
              />
              <Mail size={16} />
              <span className="relative">Email Me</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
              >
                <ArrowRight size={14} />
              </motion.span>
            </motion.a>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <motion.a
                href="https://www.linkedin.com/in/lakshmipriyan0606/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 border border-[#D5DDE8] bg-white text-xs font-bold uppercase tracking-wider text-[#475569] rounded-lg shadow-xs grow"
                whileHover={{ y: -2, borderColor: "#2563EB", color: "#2563EB" }}
                whileTap={{ scale: 0.97 }}
              >
                <Linkedin size={12} className="text-[#2563EB]" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/lakshmipriyan0606" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 border border-[#D5DDE8] bg-white text-xs font-bold uppercase tracking-wider text-[#475569] rounded-lg shadow-xs grow"
                whileHover={{ y: -2, borderColor: "#0F172A", color: "#0F172A" }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={12} />
                <span>GitHub</span>
              </motion.a>
            </div>

            <motion.a
              href="/resume.pdf" download="Resume.pdf"
              className="flex items-center justify-center gap-2 px-4 py-3 border border-[#D5DDE8] bg-white text-xs font-bold uppercase tracking-wider text-[#475569] rounded-lg shadow-xs w-full"
              whileHover={{ y: -2, borderColor: "#22C55E", color: "#16A34A" }}
              whileTap={{ scale: 0.97 }}
            >
              <FileText size={12} className="text-[#22C55E]" />
              <span>Download Résumé</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Panel — scales up from center + staggered rows */}
        <motion.div
          className="lg:col-span-6 w-full flex flex-col justify-center items-center relative h-[360px] bg-white border border-[#E4EAF2] rounded-2xl shadow-sm p-6 overflow-hidden"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="absolute inset-0 light-blueprint opacity-[0.1]" />
          
          <div className="w-full max-w-[340px] flex flex-col bg-white border border-[#D5DDE8] rounded-xl shadow-xs overflow-hidden z-10">
            <div className="h-8 border-b border-[#E4EAF2] bg-[#F8FAFC] px-4 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>

            <div className="p-5 flex flex-col gap-4 text-left font-mono text-[10px] text-[#475569]">
              {[
                { icon: Laptop, label: "GET /api/v1/projects", value: "200 OK", valueClass: "text-[#22C55E] font-bold", bg: "bg-[#F1F6FF] border-[#2563EB]/10" },
                { icon: Server, label: "Express Controller", value: "12ms", bg: "bg-[#F8FAFC] border-[#E4EAF2]" },
                { icon: Database, label: "MongoDB Atlas query", value: "4ms", bg: "bg-[#F8FAFC] border-[#E4EAF2]", iconClass: "text-[#22C55E]" },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  className={`flex justify-between items-center p-2.5 rounded-lg border ${row.bg}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                >
                  <div className="flex items-center gap-2">
                    <row.icon size={14} className={row.iconClass || "text-[#2563EB]"} />
                    <span className="font-bold text-[#0F172A]">{row.label}</span>
                  </div>
                  <span className={row.valueClass || ""}>{row.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Minimal Footer Info */}
      <div className="max-w-[1200px] mx-auto w-full border-t border-[#E4EAF2] mt-24 pt-6 flex justify-between items-center text-[10px] font-mono tracking-wider text-[#8491A6] z-10 text-left">
        <span>DESIGNED & CODED BY LAKSHMI PRIYAN</span>
        <span>2026 EDITION</span>
      </div>
    </section>
  );
};

export default ContactSection;