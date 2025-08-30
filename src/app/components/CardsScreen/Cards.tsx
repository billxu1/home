"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/app/context/ThemeContext";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectsProps {
  id?: string;
  className?: string;
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "This portfolio website was a personal project to challenge my frontend skills and eye for design. Using a detailed Figma prototype as the blueprint, I used Next.js. This process allowed me to translate a precise visual design into a functional, performant web application, showcasing my curiosity and attention to detail in modern frontend development.",
    image: "/image/website-stock.jpg",
    tags: ["Next.js", "Figma", "Frontend Development"],
    link: "https://github.com/billxu1/home", // Add a live link to the portfolio site here
  },
  {
    title: "Discord Stats Analyser",
    description:
      "A Discord bot that uses a SQLite database to track server activity. It analyzes messages to generate leaderboards for the most active users and most frequently used words (data does not persist - unless deployed on a container). Initially developed for an inside joke, the project evolved into an interesting project teaching me data collection and analysis, providing valuable insights into server engagement.",
    image: "/image/discord-image.jpg",
    tags: ["Discord Bot", "SQLite", "Python", "Data Analysis"],
    link: "https://github.com/billxu1/discord-stats-analyser", // Add a live link to the portfolio site here
  },
  {
    title: "Recipe Backstory Skipper",
    description:
      "A Chrome extension that skips the lengthy backstories found on many recipe blogs, taking you directly to the instructions. It also adds a convenient 'back to top' button for easy navigation. This project was born from the need to quickly compare multiple recipes and is shared in hopes it provides value to others. It currently works on a select number of websites, with room for future extension.",
    image: "/image/chrome.jpg",
    tags: ["Chrome Extension", "HTML/CSS", "JavaScript", "Web Development"],
    link: "https://github.com/billxu1/recipe-chrome-extension", // Add a live link to the portfolio site here
  },
];

const Projects: React.FC<ProjectsProps> = ({
  id = "projects",
  className = "",
  projects = defaultProjects,
}) => {
  const { theme } = useTheme();

  const [showScroll, setShowScroll] = useState(false);
  // Function to scroll to the top of the page smoothly
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add and clean up the scroll event listener
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > window.innerHeight / 2) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= window.innerHeight / 2) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  // Dynamic classes for the section background
  const sectionClasses = theme === "dark" ? "bg-zinc-900" : "bg-gray-50";

  // Dynamic classes for cards
  const cardClasses =
    theme === "dark"
      ? "bg-zinc-800 border border-zinc-700 hover:border-zinc-500"
      : "bg-gray-50 border border-gray-200 hover:border-gray-300";

  // Dynamic classes for tags
  const tagClasses =
    theme === "dark"
      ? "bg-zinc-700 text-gray-200"
      : "bg-gray-200 text-gray-800";

  // Dynamic classes for heading text color
  const headingTextClasses =
    theme === "dark"
      ? "text-gray-100"
      : "text-gray-800";
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col items-center justify-start px-6 py-20 transition-colors duration-500 ${sectionClasses} ${className}`}
    >
      {/* Heading */}
      <motion.h2
        className={`text-3xl md:text-4xl font-bold ${headingTextClasses}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-gray-600 dark:text-gray-400 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Here are some of my recent projects that showcase my skills in
        full-stack development, design, and modern web technologies.
      </motion.p>

      {/* Project Cards */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full w-full"
          >
            <motion.div
              key={project.title}
              className={`rounded-2xl overflow-hidden shadow-md transition-all duration-200 cursor-pointer ${cardClasses}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={600}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className={`text-lg font-semibold ${headingTextClasses}`}>
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs rounded-full ${tagClasses}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollTop}
        className={`fixed bottom-4 right-4 p-4 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 z-50 ${showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        style={{
          backgroundColor: theme === "dark" ? "#6b7280" : "#4b5563",
        }}
      >
        {/* Replaced FaArrowUp with a simple inline SVG to remove the external dependency */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 4l-8 8h6v8h4v-8h6l-8-8z" />
        </svg>
      </motion.button>
    </section>
  );
};

export default Projects;


