"use client";

import Header from "./components/Header";
import { NavbarDemo } from "@/app/components/Navbar";
import { Education } from "@/app/components/Education";
import { ScrollProgress } from "@/app/components/scroll-progress";
import Skills from "./components/Skills";
import Particles from "@/app/components/Particles";
import { Pointer } from "@/app/components/CursorPointer";
import { SocialLinks } from "@/app/components/SocialLinks";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
    return (
        <>
            <div className="relative w-full min-h-screen bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Particles />
                </div>
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
                    <Education/>
                    <Skills />
                    <Projects/>
                    <Contact/>
                    <SocialLinks/>
                    <Footer />
                </div>
            </div>
        </>
    );
}
