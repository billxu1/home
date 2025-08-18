"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";

const sections = ["about", "portfolio", "blog", "contact"];

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Load theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Track active section with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <nav className="w-full border-b bg-white dark:bg-black dark:border-gray-800 transition-colors duration-300 fixed top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-gray-900 dark:text-white">
          Bill <span className="font-normal">Xu</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:text-blue-500 transition-colors ${
                activeSection === id
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-all">
          <div className="flex flex-col items-start px-6 py-4 gap-4">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-blue-500 transition-colors ${
                  activeSection === id
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : ""
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-2"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
