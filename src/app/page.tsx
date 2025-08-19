'use client'

import { useEffect, useState } from "react";
import Projects from "./components/CardsScreen/Cards";
import Hero
 from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionIds = ["hero", "projects", "contact"];

  useEffect(() => {
    // This function handles the scroll wheel event to snap to sections
    const handleScroll = (e: WheelEvent) => {
      // Prevent the default browser scroll behavior
      e.preventDefault();

      // If a scroll action is already in progress, ignore subsequent events
      if (isScrolling) {
        return;
      }

      // Determine the current section based on scroll position
      const currentSectionIndex = sectionIds.findIndex(id => {
        const section = document.getElementById(id);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      let nextSectionIndex = currentSectionIndex;

      // Check scroll direction (e.deltaY > 0 for down, e.deltaY < 0 for up)
      if (e.deltaY > 0) {
        // Scrolling down
        nextSectionIndex = Math.min(currentSectionIndex + 1, sectionIds.length - 1);
      } else {
        // Scrolling up
        nextSectionIndex = Math.max(currentSectionIndex - 1, 0);
      }

      // Get the target section element and its position
      const nextSectionId = sectionIds[nextSectionIndex];
      const nextSection = document.getElementById(nextSectionId);

      if (nextSection) {
        setIsScrolling(true);
        window.scrollTo({
          top: nextSection.offsetTop,
          behavior: "smooth"
        });

        // Use a timeout to reset the scrolling state after the animation finishes
        // This prevents multiple scroll actions from firing in rapid succession
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000); // 1000ms, matching the smooth scroll duration
      }
    };

    // Add the wheel event listener to the window
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleScroll, { passive: false });
    };
  }, [isScrolling]); // Dependency on isScrolling to prevent re-creating the handler

  return (
    
    <div>
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
