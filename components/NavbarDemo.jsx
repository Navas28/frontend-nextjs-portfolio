"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function NavbarDemo() {
    const navItems = [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "Education",
            link: "#education",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className=" w-full">
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4 ">
                        <NavbarButton variant="primary" className="flex gap-2 items-center">Contact <ArrowRight size={20}/></NavbarButton>
                    </div>
                </NavBody>
            
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                    </MobileNavHeader>

                    <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-black cursor-none"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
