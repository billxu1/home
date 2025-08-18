"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Hero: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // CSS class strings
  const mainClasses =
    "flex flex-col items-center justify-center min-h-screen px-4 text-center transition-colors duration-300 " +
    (theme === "dark" ? "bg-gray-800" : "bg-white");

  const nameClasses =
    "mt-6 text-4xl md:text-6xl font-bold " + (theme === "dark" ? "text-white" : "text-gray-900");

  const subtitleClasses =
    "mt-4 text-lg md:text-xl max-w-2xl " + (theme === "dark" ? "text-gray-300" : "text-gray-600");

  const skillClasses = theme === "dark"
    ? "px-3 py-1 text-sm rounded-full bg-zinc-700 text-gray-200"
    : "px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700";

  const socialClasses = theme === "dark"
    ? "flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-200 border-gray-700 hover:bg-gray-800"
    : "flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100";

  const workButtonClasses = theme === "dark"
    ? "px-6 py-3 rounded-lg font-medium bg-white text-black hover:bg-gray-200"
    : "px-6 py-3 rounded-lg font-medium bg-black text-white hover:bg-gray-800";

  const blogButtonClasses = theme === "dark"
    ? "px-6 py-3 rounded-lg border text-gray-200 border-gray-700 hover:bg-gray-800"
    : "px-6 py-3 rounded-lg border text-gray-700 hover:bg-gray-100";

  const toggleButtonClasses = theme === "dark"
    ? "mt-8 px-4 py-2 rounded-lg border border-gray-600 text-gray-200"
    : "mt-8 px-4 py-2 rounded-lg border border-gray-300 text-gray-700";

  return (
    <main className={mainClasses}>
      <Image 
        src="https://media.licdn.com/dms/image/v2/D5603AQH_khTvM8m0GA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727917902527?e=1758153600&v=beta&t=qoEzYSc_NMSopKPPBeeVBI42ExkqMEVsX4nT1BfG9UY"
        alt="Bill Xu"
        className="w-32 h-32 rounded-full shadow-md"
      />

      <h1 className={nameClasses}>Hi, I&apos;m Bill Xu</h1>

      <p className={subtitleClasses}>
        this website is a work in progress!
        <br />
        Full-stack developer passionate about creating beautiful, functional web experiences
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {["React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "Next.js"].map((skill) => (
          <span key={skill} className={skillClasses}>
            {skill}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <a href="https://github.com/billxu1/home" target="_blank" className={socialClasses}>
          <Github className="w-4 h-4" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/billxu44/" target="_blank" className={socialClasses}>
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a href="mailto:john@example.com" className={socialClasses}>
          <Mail className="w-4 h-4" /> Contact
        </a>
      </div>

      <div className="flex gap-4 mt-8">
        <a href="#work" className={workButtonClasses}>
          View My Work
        </a>
        <a href="#blog" className={blogButtonClasses}>
          Read My Blog
        </a>
      </div>

      <button onClick={toggleTheme} className={toggleButtonClasses}>
        Toggle {theme === "dark" ? "Light" : "Dark"} Mode
      </button>

      <div className="mt-12 animate-bounce">
        <span className={theme === "dark" ? "text-gray-400" : ""}>↓</span>
      </div>
    </main>
  );
};

export default Hero;
