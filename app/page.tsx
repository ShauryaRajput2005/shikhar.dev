"use client";

import { useState } from "react";
import { OpeningAnimation } from "@/components/sections/OpeningAnimation";
import { Hero } from "@/components/sections/Hero";

import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  return (
    <>
      {!isAnimationComplete && (
        <OpeningAnimation onComplete={() => setIsAnimationComplete(true)} />
      )}
      <div className={!isAnimationComplete ? "h-screen overflow-hidden" : ""}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </div>
    </>
  );
}
