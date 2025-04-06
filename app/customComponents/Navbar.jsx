"use client"

import React, { useRef } from "react";
import Image from "next/image";
import images from "@/assets";
import { ArrowUpRight, Logs, Moon, X } from "lucide-react";

const Navbar = () => {

    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    return (
        <>
            <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 font-para">
                <a href="#top">
                    <Image
                        src={images.demo}
                        alt="logo"
                        width={100}
                        height={100}
                        className="cursor-pointer mr-14 h-[150px] w-full"
                        priority
                    />
                </a>

                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
                    <li>
                        <a href="#top">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <button>
                        <Moon />
                    </button>
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 py-2.5 px-10 border border-gray-500 rounded-full ml-4"
                    >
                        Contact <ArrowUpRight />
                    </a>

                    <button onClick={openMenu} className="block md:hidden ml-3">
                        <Logs />
                    </button>
                </div>

                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">

                    <div onClick={closeMenu} className="cursor-pointer absolute right-6 top-6">
                    <X />
                    </div>
                    <li>
                        <a href="#top" onClick={closeMenu} >Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={closeMenu}>About</a>
                    </li>
                    <li>
                        <a href="#education" onClick={closeMenu}>Education</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={closeMenu}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
