import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.15 });

  const metricsTop = [
    { value: "2.8+", label: "YEARS PRODUCTION EXPERIENCE" },
    { value: "20+", label: "REUSABLE REACT COMPONENTS" },
    { value: "5+", label: "ACTIVE PRODUCTION MODULES" },
  ];

  const metricsBottom = [
    { value: "10K+", label: "TOTAL ACTIVE USERS SUPPORTED" },
    { value: "98%", label: "FRONTEND PERFORMANCE AUDIT SCORE" },
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
    <section id="impact" className="py-28 md:py-36 bg-[#FCFCFD] border-b border-[#E4EAF2] px-8 md:px-16" ref={ref}>
      <motion.div
        className="max-w-[1200px] mx-auto flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Label */}
        <motion.span variants={itemVariants} className="font-mono text-[10px] tracking-[0.25em] text-[#8491A6] uppercase block font-bold">
          08 / IMPACT
        </motion.span>

        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 text-left">
          <h2 className="text-3xl md:text-[44px] font-bold text-[#0F172A] leading-tight tracking-tight">
            ENGINEERING METRICS.
          </h2>
        </motion.div>

        {/* Top Row: 3 Metrics */}
        <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-b border-[#E4EAF2]">
          {metricsTop.map((metric) => (
            <motion.div key={metric.label} variants={itemVariants} className="flex flex-col items-start text-left">
              <span className="text-[52px] lg:text-[64px] font-extrabold text-[#2563EB] tracking-tighter leading-none mb-3">
                {metric.value}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#475569] font-bold">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: 2 Metrics */}
        <div className="grid md:grid-cols-2 gap-8 py-8 border-b border-[#E4EAF2]">
          {metricsBottom.map((metric) => (
            <motion.div key={metric.label} variants={itemVariants} className="flex flex-col items-start text-left">
              <span className="text-[52px] lg:text-[64px] font-extrabold text-[#2563EB] tracking-tighter leading-none mb-3">
                {metric.value}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#475569] font-bold">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default ImpactSection;
