"use client";

import Header from "./customComponents/Header";
import { NavbarDemo } from "@/components/NavbarDemo";
import { TimelineDemo } from "@/components/TimelineDemo";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Skills from "./customComponents/Skills";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import Particles from "@/src/blocks/Backgrounds/Particles/Particles";
import { Pointer } from "@/components/ui/pointer";
import OtherProjects from "./customComponents/OtherProjects";
import SignupFormDemo from "@/components/SignupFormDemo";
import { DockDemo } from "@/components/DockDemo";
import Footer from "./customComponents/Footer";

export default function Home() {
    return (
        <>
            <div className="relative w-full min-h-screen bg-black overflow-hidden">
                {/* Particle Background */}
                <div className="absolute inset-0 z-0">
                    <Particles />
                </div>

                {/* Content on top of particles */}
                <div className="relative">
                    <Pointer>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="8" className="fill-white" />
                            <circle cx="12" cy="12" r="5" className="fill-black" />
                        </svg>
                    </Pointer>

                    <ScrollProgress className="top-[0px]" />

                    <NavbarDemo />
                    <Header />
                    <TimelineDemo />
                    <Skills />
                    <CanvasRevealEffectDemo />
                    <OtherProjects />

                    <SignupFormDemo />
                    <DockDemo />
                    <Footer />
                </div>
            </div>
        </>
    );
}
