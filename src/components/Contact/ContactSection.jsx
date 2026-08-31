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
      className="relative py-32 md:py-40 bg-[#FCFCFD] px-8 md:px-16 overflow-hidden flex flex-col justify-between min-h-[90vh]"
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
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Column: Context Call */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <motion.span variants={itemVariants} className="font-mono text-[10px] tracking-[0.25em] text-[#8491A6] uppercase block mb-4 font-bold">
            05 / CONTACT
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-[52px] font-extrabold text-[#0F172A] leading-[1.05] tracking-tighter mb-6">
            Looking for an engineer<br />
            who can ship?<br />
            <span className="text-[#2563EB]">Let's talk.</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base text-[#475569] leading-relaxed mb-10 max-w-[460px]">
            I'm open to React.js, MERN, and Full-Stack opportunities where I can build, ship, and make an impact.
          </motion.p>

          {/* Primary & Secondary CTA list */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full max-w-sm">
            {/* Primary Email button */}
            <a
              href="mailto:lakshmipriyan0606@gmail.com"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-[#2563EB] hover:bg-[#3B82F6] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:translate-y-[-1px]"
            >
              <Mail size={16} />
              <span>Email Me</span>
              <ArrowRight size={14} />
            </a>

            {/* Secondary CTAs row */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a
                href="https://www.linkedin.com/in/lakshmipriyan0606/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 border border-[#D5DDE8] hover:border-[#8491A6] bg-white text-xs font-bold uppercase tracking-wider text-[#475569] hover:text-[#0F172A] transition-all rounded-lg shadow-xs grow"
              >
                <Linkedin size={12} className="text-[#2563EB]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/lakshmipriyan0606"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 border border-[#D5DDE8] hover:border-[#8491A6] bg-white text-xs font-bold uppercase tracking-wider text-[#475569] hover:text-[#0F172A] transition-all rounded-lg shadow-xs grow"
              >
                <Github size={12} />
                <span>GitHub</span>
              </a>
            </div>

            <a
              href="/resume.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 border border-[#D5DDE8] hover:border-[#8491A6] bg-white text-xs font-bold uppercase tracking-wider text-[#475569] hover:text-[#0F172A] transition-all rounded-lg shadow-xs w-full"
            >
              <FileText size={12} className="text-[#22C55E]" />
              <span>Download Résumé</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Clean Light Technical Illustration */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 w-full flex flex-col justify-center items-center relative h-[360px] bg-white border border-[#E4EAF2] rounded-2xl shadow-sm p-6 overflow-hidden"
        >
          <div className="absolute inset-0 light-blueprint opacity-[0.1]" />
          
          {/* Mock Browser/API illustration in royal blue */}
          <div className="w-full max-w-[340px] flex flex-col bg-white border border-[#D5DDE8] rounded-xl shadow-xs overflow-hidden z-10">
            {/* Browser titlebar */}
            <div className="h-8 border-b border-[#E4EAF2] bg-[#F8FAFC] px-4 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E4EAF2]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E4EAF2]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E4EAF2]" />
            </div>

            {/* Browser body node details */}
            <div className="p-5 flex flex-col gap-4 text-left font-mono text-[10px] text-[#475569]">
              <div className="flex justify-between items-center bg-[#F1F6FF] p-2.5 rounded-lg border border-[#2563EB]/10">
                <div className="flex items-center gap-2">
                  <Laptop size={14} className="text-[#2563EB]" />
                  <span className="font-bold text-[#0F172A]">GET /api/v1/projects</span>
                </div>
                <span className="text-[#22C55E] font-bold">200 OK</span>
              </div>

              <div className="flex justify-between items-center bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E4EAF2]">
                <div className="flex items-center gap-2">
                  <Server size={14} className="text-[#2563EB]" />
                  <span>Express Controller</span>
                </div>
                <span>12ms</span>
              </div>

              <div className="flex justify-between items-center bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E4EAF2]">
                <div className="flex items-center gap-2">
                  <Database size={14} className="text-[#22C55E]" />
                  <span>MongoDB Atlas query</span>
                </div>
                <span>4ms</span>
              </div>
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