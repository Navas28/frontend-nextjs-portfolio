"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SparklesText } from "./sparkles-text";
import { BorderBeam } from "./border-beam";

export function CanvasRevealEffectDemo() {
    return (
        <div className="mx-auto" id="projects">
            <div className="text-center mb-8">
                <SparklesText text="Top Projects" className="text-white" />
            </div>

            <div className="flex flex-col justify-center gap-12">
                <Card
                    title=" Zyvol - Sneakers Store"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/zyvol.png"
                    tech={["Next Js", "Express Js", "Mongo DB", "Typescript", "Clerk", "Stripe", "Redux Toolkit", "Tailwind CSS", "Cloudinary", "ShadCN"]}
                    demoUrl="https://zyvol.vercel.app/"
                    sourceUrl="https://github.com/Navas28/zyvol-frontend.git"
                />
                <Card
                    title="Animazia - Zoo Website"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/animazia.png"
                    tech={["React", "Tailwind CSS", "Express JS", "MongoDB", "Swiper", "Stripe"]}
                    demoUrl="https://frontend-zoo.vercel.app/"
                    sourceUrl="https://github.com/Navas28/Animazia-ZooProject.git"
                />
                <Card
                    title="Pixelx - Console Games"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/pixelx1.png"
                    tech={["React", "Tailwind CSS", "GSAP"]}
                    demoUrl="https://staging.d1hd5ui2h3a3im.amplifyapp.com/"
                    sourceUrl="https://github.com/Navas28/Game-website-react.git"
                />
                <Card
                    title="Well Clean - Cleaning Service"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/wellclean1.png"
                    tech={["HTML", "CSS", "JavaScript"]}
                    demoUrl="https://navas28.github.io/well-clean/"
                    sourceUrl="https://github.com/Navas28/well-clean.git"
                />
                <Card
                    title="Golden Dairy - Dairy Products"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/dairy1.png"
                    tech={["HTML", "CSS", "JavaScript"]}
                    demoUrl="https://navas28.github.io/milk-product-website/"
                    sourceUrl="https://github.com/Navas28/milk-product-website.git"
                />
            </div>
        </div>
    );
}

const Card = ({ title, icon, imageSrc, tech = [], demoUrl, sourceUrl, children }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-white/40 group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl w-full mx-auto p-4 relative h-[18rem] sm:h-[22rem] lg:h-[30rem] xl:h-[40rem] overflow-hidden"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

            <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hovered ? "opacity-0" : "opacity-100"
                }`}
            >
                <div className="p-8 w-full h-full flex items-center justify-center">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={1200}
                        height={100}
                        className="object-cover max-w-full max-h-full"
                        priority
                    />
                </div>
            </div>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-full w-full absolute inset-0 bg-black/20"
                    >
                        <BorderBeam size={880} duration={6} className="from-transparent via-pink-500 to-transparent" />
                        <BorderBeam
                            size={880}
                            duration={6}
                            delay={3}
                            className="from-transparent via-cyan-500 to-transparent"
                        />

                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                className={`relative z-20 flex flex-col items-center justify-center h-full w-full transition-all duration-300 ${
                    !hovered ? "opacity-0" : "opacity-100"
                }`}
            >
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={hovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center flex flex-col items-center"
                >
                    <div className="p-3 mb-4 transition-all duration-300">
                        {React.cloneElement(icon, { className: "text-white" })}
                    </div>

                    <h2 className="font-para text-lg  sm:text-2xl font-bold text-white mb-3 px-4">{title}</h2>

                    <div className="flex flex-wrap justify-center gap-2 max-w-md mb-6">
                        {tech.map((tool, idx) => (
                            <span
                                key={idx}
                                className="bg-white/10 text-white text-xs px-3 py-1 rounded-sm  border border-white/10"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-2">
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-none px-2  sm:px-5 sm:py-2 flex gap-3 font-medium items-center text-md rounded-md border border-black/50 bg-white text-black hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition duration-200"
                            >
                                View Demo
                            </a>
                        )}
                        {sourceUrl && (
                            <a
                                href={sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-none px-2 sm:px-4 sm:py-1 flex gap-3 font-medium items-center text-md rounded-md border border-black/50 bg-white text-black hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition duration-200"
                            >
                                Source Code
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export const Icon = ({ className, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
