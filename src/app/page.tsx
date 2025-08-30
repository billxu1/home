'use client'

import { useEffect, useState } from "react";
import Projects from "./components/CardsScreen/Cards";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const hero = document.getElementById("hero");
      const projects = document.getElementById("projects");
      if (!hero || !projects) return;

      const heroRect = hero.getBoundingClientRect();
      const projectsRect = projects.getBoundingClientRect();

      let target: HTMLElement | null = null;

      if (e.deltaY > 0) {
        // Scroll down
        if (heroRect.bottom > 0) {
          target = projects; // snap Hero -> Projects
        }
      } else if (e.deltaY < 0) {
        // Scroll up
        if (projectsRect.top < window.innerHeight && projectsRect.top > 100) {
          target = hero; // snap Projects -> Hero
        }
      }

      if (target) {
        e.preventDefault();
        setIsScrolling(true);
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isScrolling]);

  return (
    <div>
      <Hero id="hero" className="min-h-screen" />
      <Projects id="projects" className="min-h-screen" />
      <Footer /> {/* slim static footer */}
    </div>
  );
}
