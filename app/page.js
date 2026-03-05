"use client";

import Header from "@/components/sections/Header";
import { NavbarDemo } from "@/components/sections/Navbar";
import { Education } from "@/components/sections/Education";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Particles from "@/components/ui/Particles";
import { SocialLinks } from "@/components/sections/SocialLinks";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import RippleWaveLoader from "@/components/ui/RippleWaveLoader";
import { Suspense } from "react";
import SkillsShowcase from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

function PortfolioContent() {
  return (
    <>
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Particles />
        </div>
        <div className="relative">
          <ScrollProgress className="top-[0px]" />
          <NavbarDemo />
          <Header />
          <Experience />
          <Education />
          <SkillsShowcase />
          <Projects />
          <Contact />
          <SocialLinks />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center bg-black">
          <RippleWaveLoader />
        </div>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}
