import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, Boxes, Code2, Puzzle, Gauge, Rocket, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "Analyze requirements, align database models, and map visual wireframes.",
      status: "COMPLETED",
      icon: Search,
    },
    {
      num: "02",
      title: "Model",
      desc: "Architect MERN models and build clean React interfaces.",
      status: "COMPLETED",
      icon: Boxes,
    },
    {
      num: "03",
      title: "Build",
      desc: "Develop robust, component-driven logic and set up REST APIs.",
      status: "COMPLETED",
      icon: Code2,
    },
    {
      num: "04",
      title: "Integrate",
      desc: "Connect React workflows with backend Node endpoints.",
      status: "ACTIVE",
      icon: Puzzle,
    },
    {
      num: "05",
      title: "Optimize",
      desc: "Profile page load performance, minimize bundle sizes, and cache queries.",
      status: "PENDING",
      icon: Gauge,
    },
    {
      num: "06",
      title: "Ship",
      desc: "Run end-to-end builds and deploy verified production bundles.",
      status: "PENDING",
      icon: Rocket,
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
    <section
      id="process"
      className="py-28 md:py-36 bg-[#FCFCFD] border-b border-[#E4EAF2] px-8 md:px-16"
      ref={containerRef}
    >
      <motion.div
        className="max-w-[1200px] mx-auto flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section Label */}
        <motion.span variants={itemVariants} className="font-mono text-[10px] tracking-[0.25em] text-[#8491A6] uppercase block font-bold">
          07 / PROCESS
        </motion.span>

        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 text-left">
          <h2 className="text-3xl md:text-[44px] font-bold text-[#0F172A] leading-tight tracking-tight">
            HOW I BUILD PRODUCTS.
          </h2>
        </motion.div>

        {/* Process Items list */}
        <div className="relative flex flex-col border-t border-[#E4EAF2]">
          
          {/* Vertical scroll progress indicator line */}
          <div className="absolute left-[20px] md:left-[25px] top-0 bottom-0 w-[2px] bg-[#E4EAF2] pointer-events-none origin-top">
            <motion.div
              style={{ scaleY }}
              className="w-full bg-[#2563EB] h-full origin-top"
            />
          </div>

          {steps.map((step) => {
            const IconComp = step.icon;
            const isCompleted = step.status === "COMPLETED";
            const isActive = step.status === "ACTIVE";

            return (
              <motion.div
                key={step.num}
                variants={itemVariants}
                className="relative grid grid-cols-12 py-8 items-center border-b border-[#E4EAF2] hover:bg-white hover:pl-2 transition-all duration-300 group text-left"
              >
                {/* Node icon with outline */}
                <div className="col-span-2 md:col-span-1 flex justify-start z-10 pl-1">
                  <div
                    className={`w-10 h-10 rounded-full bg-white border flex items-center justify-center transition-colors shadow-xs ${
                      isCompleted || isActive
                        ? "border-[#2563EB] text-[#2563EB]"
                        : "border-[#E4EAF2] text-[#8491A6]"
                    }`}
                  >
                    <IconComp size={16} className="stroke-[1.5]" />
                  </div>
                </div>

                {/* Number */}
                <div className={`col-span-2 md:col-span-1 pl-4 md:pl-2 font-mono text-xs font-bold ${isActive ? "text-[#2563EB]" : "text-[#8491A6]"}`}>
                  {step.num}
                </div>

                {/* Title */}
                <div className={`col-span-8 md:col-span-3 font-bold text-base transition-colors ${isActive ? "text-[#2563EB]" : "text-[#0F172A] group-hover:text-[#2563EB]"}`}>
                  {step.title}
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-5 text-sm text-[#526079] leading-relaxed mt-2 md:mt-0 pr-4">
                  {step.desc}
                </div>

                {/* Status indicator and Arrow */}
                <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-4 mt-2 md:mt-0">
                  <span
                    className={`text-[9px] font-mono tracking-widest px-2 py-0.5 rounded border font-bold ${
                      isCompleted
                        ? "bg-[#22C55E]/5 text-[#22C55E] border-[#22C55E]/10"
                        : isActive
                        ? "bg-[#2563EB]/5 text-[#2563EB] border-[#2563EB]/10 font-bold"
                        : "bg-[#8491A6]/5 text-[#8491A6] border-[#8491A6]/10"
                    }`}
                  >
                    {step.status}
                  </span>
                  <ArrowRight size={14} className="text-[#8491A6] group-hover:translate-x-1 transition-transform" />
                </div>

              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
