"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";


interface HeroProps {
  id?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ id, className }) => {
  const { theme } = useTheme();

  // Section wrapper
  const mainClasses =
    "flex flex-col items-center justify-center h-screen px-4 text-center transition-colors duration-300 " +
    (theme === "dark" ? "bg-gray-800" : "bg-white");

  const nameClasses =
    "mt-6 text-4xl md:text-6xl font-bold text-transparent bg-clip-text animate-rainbow " +
    (theme === "dark"
      ? "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
      : "bg-gradient-to-r from-blue-400 via-emerald-400 to-yellow-400");

  const subtitleClasses =
    "mt-4 text-lg md:text-xl max-w-2xl " +
    (theme === "dark" ? "text-gray-300" : "text-gray-600");

  const skillClasses =
    "px-3 py-1 text-sm rounded-full transition-colors duration-300 " +
    (theme === "dark"
      ? "bg-blue-800 text-blue-100"
      : "bg-blue-200 text-blue-800");

  const socialClasses =
    theme === "dark"
      ? "flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-200 border-gray-700 hover:bg-gray-800"
      : "flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100";

  const workButtonClasses =
    theme === "dark"
      ? "px-6 py-3 rounded-lg font-medium bg-white text-black hover:bg-gray-200"
      : "px-6 py-3 rounded-lg font-medium bg-black text-white hover:bg-gray-800";

  const blogButtonClasses =
    theme === "dark"
      ? "px-6 py-3 rounded-lg border text-gray-200 border-gray-700 hover:bg-gray-800"
      : "px-6 py-3 rounded-lg border text-gray-700 hover:bg-gray-100";

  return (
    <section
      id={id}
      className={`${mainClasses}`}
    >      <Image
        src="/image/linkedin.jpg"
        alt="Bill Xu"
        width={128}
        height={128}
        className="rounded-full shadow-md"
        unoptimized
      />
      <h1 className={nameClasses}>Hi, I&apos;m Bill Xu</h1>

      <p className={subtitleClasses}>
        This website is a work in progress!
        <br />
        Full-stack developer driven by curiosity, connection, and continuous
        improvement
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {[
          "React",
          "TypeScript",
          "Node.js",
          "Python",
          "Tailwind CSS",
          "Next.js",
        ].map((skill) => (
          <span key={skill} className={skillClasses}>
            {skill}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <a
          href="https://github.com/billxu1/home"
          target="_blank"
          className={socialClasses}
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/billxu44/"
          target="_blank"
          className={socialClasses}
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>

      <div className="flex gap-4 mt-8">
        <a href="portfolio" className={workButtonClasses}>
          View My Work (pages under construction)
        </a>
        <a href="blog" className={blogButtonClasses}>
          Read My Blog (pages under construction)
        </a>
      </div>
      <div className="mt-8">

        {/* Scroll-to-next button */}
        {/* <a
          href="#projects"
          className={`flex items-center justify-center w-12 h-12 rounded-lg  transition-colors duration-200 ${theme === "dark"
            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          <span>↓</span>
        </a> */}
      </div>

    </section>
  );
};

export default Hero;
