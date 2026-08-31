import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Boxes, Gauge, ShieldCheck } from "lucide-react";

const AboutSection = () => {
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

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

  return (
    <section id="about" className="py-28 md:py-36 bg-[#FCFCFD] border-b border-[#E4EAF2] px-8 md:px-16" ref={ref}>
      <motion.div
        className="max-w-[1200px] mx-auto flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Label */}
        <motion.span variants={itemVariants} className="font-mono text-[10px] tracking-[0.25em] text-[#8491A6] uppercase block font-bold">
          05 / ABOUT ME
        </motion.span>

        {/* Editorial Split Screen */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-8">
          {/* Left Column Statement */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-start text-left">
            <h2 className="text-3xl md:text-[44px] font-extrabold text-[#0F172A] leading-[1.05] tracking-tight">
              I CARE ABOUT WHAT <span className="text-[#2563EB]">HAPPENS AFTER</span> THE UI LOOKS GOOD.
            </h2>
          </motion.div>

          {/* Right Column Content */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-8 text-[#526079] text-sm md:text-base leading-relaxed text-left">
            <p className="text-[15px] font-normal text-[#526079] mb-4">
              My focus is building high-quality frontend environments that remain maintainable, stable, and performant over time. I specialize in designing systems built on three core pillars:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#F6F9FF] border border-[#E1E9F5] flex items-center justify-center text-[#2563EB]">
                  <Boxes size={16} className="stroke-[1.5]" />
                </div>
                <h4 className="text-sm font-bold text-[#0F172A] tracking-wide">Architecture</h4>
                <p className="text-xs text-[#526079] leading-relaxed">
                  Modular component trees, typed interfaces, and predictable centralized client states.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#F6F9FF] border border-[#E1E9F5] flex items-center justify-center text-[#2563EB]">
                  <Gauge size={16} className="stroke-[1.5]" />
                </div>
                <h4 className="text-sm font-bold text-[#0F172A] tracking-wide">Performance</h4>
                <p className="text-xs text-[#526079] leading-relaxed">
                  Route code-splitting, bundle payload optimizations, and avoiding layout shifts.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#F6F9FF] border border-[#E1E9F5] flex items-center justify-center text-[#2563EB]">
                  <ShieldCheck size={16} className="stroke-[1.5]" />
                </div>
                <h4 className="text-sm font-bold text-[#0F172A] tracking-wide">Reliability</h4>
                <p className="text-xs text-[#526079] leading-relaxed">
                  Secure state authentication gates, robust full-stack API integration, and clean data caching.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Large Light Technical Diagram (Architecture visual block) */}
        <motion.div
          variants={itemVariants}
          className="mt-16 border border-[#E4EAF2] rounded-xl p-8 bg-white flex flex-col items-center justify-center w-full min-h-[160px] relative shadow-xs overflow-hidden"
        >
          <div className="absolute inset-0 light-blueprint opacity-[0.1]" />
          
          {/* Custom SVG connector pathways */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 120" fill="none">
            <motion.path d="M 170 60 H 330" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 3" variants={lineVariants} />
            <motion.path d="M 470 60 H 630" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 3" variants={lineVariants} />
            <motion.path d="M 770 60 H 830" stroke="#22C55E" strokeWidth="1" strokeDasharray="3 3" variants={lineVariants} />
          </svg>

          <div className="relative z-10 flex flex-wrap gap-8 justify-around items-center w-full">
            {[
              { title: "UI Components", label: "React System", color: "text-[#2563EB]" },
              { title: "State Management", label: "Redux / Query", color: "text-[#2563EB]" },
              { title: "API Integration", label: "Node & Express", color: "text-[#2563EB]" },
              { title: "Production Ready", label: "AWS Deploy", color: "text-[#22C55E]" },
            ].map((node) => (
              <div key={node.title} className="flex flex-col items-center bg-white border border-[#D5DDE8] px-5 py-3 rounded-lg shadow-xs min-w-[140px]">
                <span className={`text-[12px] font-bold ${node.color} mb-1`}>{node.title}</span>
                <span className="text-[10px] font-mono text-[#8491A6] font-semibold">{node.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default AboutSection;
