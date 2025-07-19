import { useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Navigation from "../components/Navigation";
import HeroSection from "../components/sections/HeroSection";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useGSAP(() => {
    const sections = ["hero", "about", "experience", "contact"];

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 0 },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="relative">
        <div id="hero">
          <HeroSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
