'use client'

import { useEffect, useState } from "react";
import Projects from "./components/CardsScreen/Cards";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const sectionIds = ["hero", "projects"];
  const snapDownBuffer = 150; // px from top to snap down
  const snapUpMinDistance = window.innerHeight * 0.8; // 80% of viewport
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const currentSectionIndex = sectionIds.findIndex(id => {
        const section = document.getElementById(id);
        if (!section) return false;
        const rect = section.getBoundingClientRect();

        if (e.deltaY > 0) {
          // scroll down, snap quickly
          return rect.top <= snapDownBuffer && rect.bottom >= snapDownBuffer;
        } else if (e.deltaY < 0) {
          // scroll up, only snap if section top is far enough down
          return rect.top > snapUpMinDistance && rect.top <= snapUpMinDistance + 100; 
        }
        return false;
      });

      if (currentSectionIndex === -1) return; // no snap, normal scrolling

      let nextSectionIndex = currentSectionIndex;

      if (e.deltaY > 0) {
        nextSectionIndex = Math.min(currentSectionIndex + 1, sectionIds.length - 1);
      } else if (e.deltaY < 0) {
        nextSectionIndex = Math.max(currentSectionIndex - 1, 0);
      }

      if (nextSectionIndex === currentSectionIndex) return;

      const nextSection = document.getElementById(sectionIds[nextSectionIndex]);
      if (nextSection) {
        e.preventDefault();
        setIsScrolling(true);
        window.scrollTo({
          top: nextSection.offsetTop,
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
