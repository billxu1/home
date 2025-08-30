'use client'

import { useEffect, useState } from "react";
import Projects from "./components/CardsScreen/Cards";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const sectionIds = ["hero", "projects"];
  const snapBuffer = 150; // px from top to trigger snapping
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      // Determine which section is near the top
      const currentSectionIndex = sectionIds.findIndex(id => {
        const section = document.getElementById(id);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        // trigger snap if section top is within snapBuffer
        return rect.top <= snapBuffer && rect.bottom >= snapBuffer;
      });

      if (currentSectionIndex === -1) return; // no section near top, normal scrolling

      let nextSectionIndex = currentSectionIndex;

      if (e.deltaY > 0) {
        // scrolling down
        nextSectionIndex = Math.min(currentSectionIndex + 1, sectionIds.length - 1);
      } else if (e.deltaY < 0) {
        // scrolling up
        nextSectionIndex = Math.max(currentSectionIndex - 1, 0);
      }

      if (nextSectionIndex === currentSectionIndex) return; // already at target

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
