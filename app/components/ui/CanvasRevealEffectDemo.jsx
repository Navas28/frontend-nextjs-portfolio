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
            <div className="text-center mb-8 sm:mb-18">
                <SparklesText text="Top Projects" className="text-white" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-8 sm:gap-12 px-4 sm:px-18">
                <Card
                    title="Well Clean - Freelance [SEO]"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/well-clean.png"
                    tech={["Next Js", "Tailwind Css", "Cloudinary"]}
                    demoUrl="https://www.wellcleancalicut.com"
                />
                <Card
                    title="KeraFlour - Mill Website"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/Kera.png"
                    tech={["Next Js", "Express Js", "Mongo DB", "Cloudinary", "Stripe"]}
                    demoUrl="https://keraflour.vercel.app/"
                    sourceUrl="https://github.com/Navas28/KeraFlour-frontend.git"
                />
                <Card
                    title="Zyvol - Sneakers Store"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/zyvol.png"
                    tech={["Next Js", "Express Js", "Mongo DB", "Clerk", "Stripe"]}
                    demoUrl="https://zyvol.vercel.app/"
                    sourceUrl="https://github.com/Navas28/zyvol-frontend.git"
                />
                <Card
                    title="Animazia - Zoo Website"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/animazia.png"
                    tech={["React", "Express JS", "MongoDB", "Swiper", "Stripe"]}
                    demoUrl="https://frontend-zoo.vercel.app/"
                    sourceUrl="https://github.com/Navas28/Animazia-ZooProject.git"
                />
                <Card
                    title="Pixelx - Console Games"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/react-game-home(lite).png"
                    tech={["React", "Tailwind CSS", "RAWG API"]}
                    demoUrl="https://game-website-react.vercel.app/"
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
                <Card
                    title="Game Verse - Game Sales"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/gameverse-1.png"
                    tech={["HTML", "CSS"]}
                    demoUrl="https://navas28.github.io/Game-website"
                    sourceUrl="https://github.com/Navas28/Game-website.git"
                />
                <Card
                    title="Fresh Cart E-Commerce"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/fresh-1.png"
                    tech={["HTML", "CSS", "Bootstrap"]}
                    demoUrl="https://navas28.github.io/Fresh-cart-/"
                    sourceUrl="https://github.com/Navas28/Fresh-cart-.git"
                />
                <Card
                    title="Binge Nest - Movies & Series"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/series-1.png"
                    tech={["HTML", "CSS", "JavaScript"]}
                    demoUrl="https://navas28.github.io/Series-Movie-Website/#"
                    sourceUrl="https://github.com/Navas28/Series-Movie-Website.git"
                />
                <Card
                    title="Indian Tandoor - Restuarent"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/res-1.png"
                    tech={["HTML", "CSS"]}
                    demoUrl="https://navas28.github.io/Restuarent-webpage/"
                    sourceUrl="https://github.com/Navas28/Restuarent-webpage.git"
                />
                <Card
                    title="Horizon Bliss - Restuarent"
                    icon={<FaGithub size={50} />}
                    imageSrc="/images/hotel-1.png"
                    tech={["HTML", "CSS"]}
                    demoUrl="https://navas28.github.io/Hotel-website/"
                    sourceUrl="https://github.com/Navas28/Hotel-website.git"
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
            className="border border-white/40 group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-md sm:max-w-xl w-full mx-auto p-4 relative h-[15rem] sm:h-[20rem] overflow-hidden"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

            <div
                className={`absolute inset-0  flex items-center justify-center transition-opacity duration-300 ${
                    hovered ? "opacity-0" : "opacity-100"
                }`}
            >
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <div
                        className={`w-3 h-3 rounded-full ${
                            title.includes("Freelance") || title.includes("[SEO]")
                                ? "bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                                : title.includes("KeraFlour") || title.includes("Zyvol") || title.includes("Animazia")
                                ? "bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                                : "bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                        } animate-pulse`}
                    ></div>
                    <span
                        className={`text-xs font-semibold uppercase tracking-wider ${
                            title.includes("Freelance") || title.includes("[SEO]")
                                ? "text-green-400"
                                : title.includes("KeraFlour") || title.includes("Zyvol") || title.includes("Animazia")
                                ? "text-cyan-400"
                                : "text-amber-400"
                        }`}
                    >
                        {title.includes("Freelance") || title.includes("[SEO]")
                            ? "LIVE"
                            : title.includes("KeraFlour") || title.includes("Zyvol") || title.includes("Animazia")
                            ? "MERN"
                            : "UI"}
                    </span>
                </div>

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
                    <div className="hidden sm:flex p-3 mb-4 transition-all duration-300">
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
