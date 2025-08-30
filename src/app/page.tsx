'use client'

import { useEffect, useState } from "react";
import Projects from "./components/CardsScreen/Cards";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = { hero: "hero", projects: "projects" };
  const scrollUpMinDistance = 0; // px from top before snapping up

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const hero = document.getElementById("hero");
      const projects = document.getElementById("projects");
      if (!hero || !projects) return;

      const heroRect = hero.getBoundingClientRect();
      const projectsRect = projects.getBoundingClientRect();

      let target: HTMLElement | null = null;

      if (e.deltaY > 0 && heroRect.bottom > 0) {
        target = projects;
      } else if (e.deltaY < 0 && projectsRect.top > scrollUpMinDistance) {
        target = hero;
      }

      if (target) {
        e.preventDefault();
        setIsScrolling(true);
        window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isScrolling]); // ✅ only include state that affects the effect


  return (
    <div>
      <Hero id={sections.hero} className="min-h-screen" />
      <Projects id={sections.projects} className="min-h-screen" />
      <Footer />
    </div>
  );
}
