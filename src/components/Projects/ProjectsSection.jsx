import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, X, Cpu, CheckCircle } from "lucide-react";
import img1 from "../../assets/images/daily.png"; // DailyTracker
import img2 from "../../assets/images/travel.png"; // Travel

const ProjectsSection = () => {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: "dailytracker",
      title: "DailyTracker",
      category: "COLLABORATIVE HUB / 2026",
      oneLiner: "Collaborative DSA and knowledge tracking platform designed to help developers practice and share solutions.",
      image: img1,
      badge: "DSA PRACTICE",
      technologies: ["Next.js", "React.js", "Redux Toolkit", "NextAuth.js", "MongoDB"],
      liveUrl: "https://solvedaily.vercel.app/",
      githubUrl: "https://github.com/lakshmipriyan0606/DailyTracker",
      problem: "Traditional DSA prep is isolating, with developers lacking synchronized dashboards to track concept MCQs, verify server-side answers, and maintain team coding streaks.",
      solution: "Created a room-based tracking application with secure auth, server-verified conceptual tests, streak validations, and community bookmarks.",
      architecture: "Next.js App Router for server rendering, Redux Toolkit for UI room states, and MongoDB indexing to keep leaderboard queries sub-100ms.",
      challenge: "Handling concurrent answer evaluations and calculating streak breaks reliably without overloading database connections.",
      outcome: "Successfully scaled to support real-time team rooms with instant verification feedback and synchronous comment updates."
    },
    {
      id: "travelplatform",
      title: "Sastikaa Travel",
      category: "BOOKING ENGINE / 2026",
      oneLiner: "Full-stack travel booking platform that helps users discover destinations, packages, and manage bookings.",
      image: img2,
      badge: "TRAVEL BOOKING",
      technologies: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      liveUrl: "https://www.sastikaatravel.com/",
      githubUrl: "https://github.com/lakshmipriyan0606/travelagency",
      problem: "Frequent API calls to fetch travel bookings and accommodations caused layout shifts, sluggish search inputs, and database connection overheads.",
      solution: "Engineered a clean caching system via TanStack Query and indexed MongoDB search to fetch destinations with instant responsive filtering.",
      architecture: "Express modular backend endpoints with JWT session states, connected to a Next.js/React layout running Tailwind CSS layers.",
      challenge: "Caching live availability states without displaying stale room listings to active booking users.",
      outcome: "Decreased dashboard load time by 40% and removed double-booking scenarios using atomic database transactions."
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-[#FCFCFD] border-b border-[#E4EAF2] px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-4">
        
        {/* Section Label */}
        <span className="font-mono text-[10px] tracking-[0.25em] text-[#8491A6] uppercase block font-bold text-left">
          02 / SELECTED WORK
        </span>

        {/* Section Header */}
        <div className="mb-20 text-left">
          <h2 className="text-3xl md:text-[44px] font-extrabold text-[#0F172A] leading-tight tracking-tight">
            Products I've built<br />
            and problems I've solved.
          </h2>
        </div>

        {/* 2-Column Grid Layout (Optimized for 2 Projects) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col justify-between bg-white border border-[#E4EAF2] rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.01)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.06)] hover:border-[#2563EB]/25 hover:-translate-y-1.5 transition-all duration-300 text-left h-full"
            >
              <div>
                {/* Browser Mockup Image Container */}
                <div className="relative border-b border-[#E4EAF2] bg-[#F8FAFC] overflow-hidden shrink-0">
                  {/* Browser Window Control Header */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-[#EFF4F9] border-b border-[#E4EAF2] select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  
                  {/* Screenshot Image with Badge */}
                  <div className="relative h-[180px] overflow-hidden">
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 bg-white/95 backdrop-blur-xs border border-[#2563EB]/15 rounded-full font-mono text-[8px] font-bold text-[#2563EB] tracking-widest uppercase shadow-2xs">
                      {project.badge}
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top scale-100 group-hover:scale-103 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Card Context Information */}
                <div className="p-6">
                  <span className="font-mono text-[9px] tracking-wider text-[#2563EB] uppercase font-bold block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A] leading-tight mb-2.5 group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-[#526079] leading-relaxed mb-6 font-normal min-h-[58px]">
                    {project.oneLiner}
                  </p>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[9.5px] font-mono bg-[#F1F6FF] border border-[#2563EB]/10 text-[#2563EB] rounded font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-4 border-t border-[#EDF1F6] flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#2563EB] transition-colors flex items-center gap-1 group/link"
                  >
                    <span>Explore Product</span>
                    <motion.div
                      className="inline-flex"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={14} />
                    </motion.div>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-[#8491A6] hover:text-[#0F172A] transition-colors flex items-center gap-1"
                  >
                    <Github size={14} />
                    <span>Source</span>
                  </a>
                </div>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2 bg-[#F8FAFC] border border-[#E4EAF2] hover:bg-[#F1F6FF] hover:border-[#2563EB]/20 text-[#526079] hover:text-[#2563EB] rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Explore Case Study
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* OVERLAY MODAL CASE STUDY DRAWER */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-xs"
              onClick={() => setActiveModalProject(null)}
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="bg-white border border-[#E4EAF2] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl p-8 text-left max-h-[85vh] overflow-y-auto z-10 relative"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[#E4EAF2] pb-5 mb-6">
                <div>
                  <span className="font-mono text-[9px] font-bold text-[#2563EB] uppercase tracking-wider">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0F172A] mt-1">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="w-8 h-8 rounded-lg bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#0F172A] transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Case Study Details Grid */}
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column - Tech details */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <h4 className="text-xs font-mono font-bold text-[#8491A6] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Cpu size={13} className="text-[#2563EB]" />
                        <span>THE PROBLEM</span>
                      </h4>
                      <p className="text-[13px] text-[#526079] leading-relaxed">
                        {activeModalProject.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-[#8491A6] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle size={13} className="text-[#2563EB]" />
                        <span>THE SOLUTION</span>
                      </h4>
                      <p className="text-[13px] text-[#526079] leading-relaxed">
                        {activeModalProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Engineering details */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <h4 className="text-xs font-mono font-bold text-[#8491A6] uppercase tracking-wider mb-2">
                        SYSTEM ARCHITECTURE
                      </h4>
                      <p className="text-[13px] text-[#526079] leading-relaxed">
                        {activeModalProject.architecture}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-[#8491A6] uppercase tracking-wider mb-2">
                        ENGINEERING CHALLENGE
                      </h4>
                      <p className="text-[13px] text-[#526079] leading-relaxed">
                        {activeModalProject.challenge}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Outcome block */}
                <div className="bg-[#F8FAFC] border border-[#E4EAF2] rounded-xl p-5 mt-2">
                  <h4 className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1.5">
                    PROJECT OUTCOME
                  </h4>
                  <p className="text-[13px] text-[#526079] leading-relaxed">
                    {activeModalProject.outcome}
                  </p>
                </div>

                {/* Tags Footer */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#EDF1F6]">
                  {activeModalProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-white border border-[#E4EAF2] text-[#475569] rounded font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
