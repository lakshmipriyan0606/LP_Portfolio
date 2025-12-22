import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Filter } from "lucide-react";
import img1 from "../../assets/images/project1.png";
import img2 from "../../assets/images/project2.png";
import img3 from "../../assets/images/project3.png";
import img4 from "../../assets/images/project4.png";
import img5 from "../../assets/images/project5.png";
import img6 from "../../assets/images/project6.png";
import img7 from "../../assets/images/project7.png";
import img8 from "../../assets/images/flexit.png";
import img9 from "../../assets/images/joylive.png";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with React and advanced animations",
      image: img1,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Web App",
      liveUrl: "https://moonlit-narwhal-f5e35d.netlify.app",
      githubUrl: "https://github.com/lakshmipriyan0606/trending.git",
    },
    {
      id: 2,
      title: "Tourism Website",
      description:
        "A modern and visually engaging tourism website featuring smooth animations, location highlights, and responsive design.",
      image: img2,
      technologies: ["React", "Tailwind CSS", "AOS"],
      category: "Website",
      liveUrl: "https://rainbow-mandazi-8afb8f.netlify.app",
      githubUrl: "https://github.com/lakshmipriyan0606/Heaven.git",
    },
    {
      id: 3,
      title: "FlexIT Fitness",
      description: "Fitness platform with interactive UI and responsive design",
      image: img8,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      category: "Web App",
      liveUrl: "https://flexit-ecru.vercel.app/",
      githubUrl: "https://github.com/lakshmipriyan0606/flexIT.git",
    },
    {
      id: 4,
      title: "Blockchain Landing",
      description: "Modern blockchain company landing page with animations",
      image: img3,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Landing Page",
      liveUrl: "https://lakshmipriyan0606.github.io/chain",
      githubUrl: "https://github.com/lakshmipriyan0606/chain.git",
    },
    {
      id: 5,
      title: "Food Delivery App",
      description: "Interactive food delivery platform with modern UI",
      image: img4,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Web App",
      liveUrl: "https://lakshmipriyan0606.github.io/Foody",
      githubUrl: "https://github.com/lakshmipriyan0606/Foody.git",
    },
    {
      id: 6,
      title: "Cleaning Service",
      description: "Professional cleaning service website with Tailwind CSS",
      image: img5,
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      category: "Website",
      liveUrl: "https://lakshmipriyan0606.github.io/Deepclean-Website",
      githubUrl: "https://github.com/lakshmipriyan0606/Deepclean-Website.git",
    },
    {
      id: 7,
      title: "Gaming Store",
      description:
        "A responsive gaming e-commerce template built with Tailwind CSS, showcasing trending games and accessories.",
      image: img6,
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      category: "E-Commerce",
      liveUrl: "https://lakshmipriyan0606.github.io/tailwindtemplate",
      githubUrl: "https://github.com/lakshmipriyan0606/tailwindtemplate.git",
    },
    {
      id: 8,
      title: "MultiShop",
      description:
        "E-commerce UI layout using pure HTML and CSS. Features a clean product grid, responsive design, and user-friendly ",
      image: img7,
      technologies: ["HTML", "CSS"],
      category: "Website",
      liveUrl: "https://lakshmipriyan0606.github.io/multishop",
      githubUrl: "https://github.com/lakshmipriyan0606/multishop.git",
    },
    {
      id: 9,
      title: "JoyLive Event",
      description:
        "Static event or music show landing page designed to promote live performances, featuring bold visuals",
      image: img9,
      technologies: ["HTML", "CSS"],
      category: "Landing Page",
      liveUrl: "https://lakshmipriyan0606.github.io/JoyLive/",
      githubUrl: "https://github.com/lakshmipriyan0606/JoyLive.git",
    },
  ];

  const categories = ["All", "Web App", "Website", "Landing Page"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium mb-4"
            >
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-300 mb-6"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-200 text-gray-300 max-w-3xl mx-auto"
            >
              A showcase of my latest work, featuring modern web applications
              and websites built with cutting-edge technologies and innovative
              design approaches.
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Filter className="w-5 h-5 text-gray-500 self-center mr-2" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "glass-effect hover:glow-effect"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/lakshmipriyan0606?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 glass-effect rounded-full font-semibold hover:glow-effect transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
