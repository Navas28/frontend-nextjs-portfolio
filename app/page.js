"use client";

import Header from "./components/Header";
import { NavbarDemo } from "@/app/components/Navbar";
import { Education } from "@/app/components/Education";
import { ScrollProgress } from "@/app/components/scroll-progress";
import Skills from "./components/Skills";
import Particles from "@/app/components/Particles";
import { SocialLinks } from "@/app/components/SocialLinks";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "@/app/components/Contact";
import RippleWaveLoader from "./components/ui/RippleWaveLoader";
import { Suspense } from "react";

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
                    <Education />
                    <Skills />
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
