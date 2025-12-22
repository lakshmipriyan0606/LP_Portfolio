import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const experiences = [
    {
      id: 1,
      company: "Resulticks Edge Solution Technologies",
      position: "Software Engineer",
      period: "Jan 2023 - Present",
      description:
        "Currently working as a software engineer at a product-based web application company, focusing on building responsive and scalable user interfaces using React, HTML, CSS, and JavaScript. Applying core software engineering principles to create clean, modular, and maintainable code. Collaborating closely with UI/UX designers, backend developers, and QA teams to deliver high-quality, user-centric web applications aligned with product goals and business requirements.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Git"],
      isLatest: true,
    },
    {
      id: 2,
      company: "Cryptographic Solutions",
      position: "Full Stack Developer",
      period: "Dec 2023 - Jan 2024",
      description:
        "Contributed to a React project with Tailwind CSS for the frontend and Node.js with Express for the backend. Implemented a Kanban board for efficient project management using Socket.io for real-time collaboration.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "SQL",
        "Socket.io",
        "Tailwind CSS",
      ],
      isLatest: false,
    },
    {
      id: 3,
      company: "Mother Software and Technology Services",
      position: "MERN Stack Developer",
      period: "Nov 2023 - Dec 2023",
      description:
        "Worked in a dynamic environment, honing skills in React and Tailwind CSS for frontend development. On the backend, worked with Node.js and Express, utilizing SQL databases to optimize data handling.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      isLatest: false,
    },
    {
      id: 4,
      company: "Atrifix Information Technology",
      position: "Frontend Developer Intern",
      period: "March 2023 - May 2023",
      description:
        "Engaged in front-end development focusing on HTML, CSS, React.js, and utilizing UI design with Tailwind CSS and Bootstrap. Actively contributed to the development of React.js components.",
      technologies: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
      isLatest: false,
    },
  ];

  return (
    <div className="py-20 relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section id="experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium mb-4"
              >
                Career Journey
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-gray-300 mb-6"
              >
                Work Experience
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-200 text-gray-300 max-w-3xl mx-auto"
              >
                My professional journey through various roles and companies,
                each contributing to my growth as a developer and shaping my
                expertise in modern web technologies.
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

              {/* Experience Cards */}
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <ExperienceCard
                    key={experience.id}
                    experience={experience}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="education" className="min-h-screen pt-20">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-300 mb-12">
            Education
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                degree: "Bachelor of Engineering",
                field: "Electrical and Electronics Engineering",
                school: "Government College of Engineering Bargur",
                year: "2019 - 2023",
                grade: "85%",
              },
              {
                degree: "Higher Secondary Certificate",
                field: "Maths-Biology",
                school: "Sacred Heart Higher Secondary School",
                year: "2018 - 2019",
                grade: "82%",
              },
              {
                degree: "Secondary School Leaving Certificate",
                field: "",
                school: "Sacred Heart Higher Secondary School",
                year: "2016 - 2017",
                grade: "94%",
              },
            ].map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 1.2 + index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {edu.grade}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{edu.degree}</h4>
                  {edu.field && (
                    <p className="text-purple-600 text-purple-400 mb-2">
                      {edu.field}
                    </p>
                  )}
                  <p className="text-gray-200 text-gray-300 text-sm mb-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ExperienceSection;
