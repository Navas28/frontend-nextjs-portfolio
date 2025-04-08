"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SparklesText } from "../app/components/ui/sparkles-text";

export function CanvasRevealEffectDemo() {
    return (
      <div className=" mx-auto" id="projects">
        <div className="text-center mb-8">
          <SparklesText text="Top Projects" className="text-white" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4">
          <Card title="Project 1" icon={<FaGithub size={50} />} imageSrc="/images/demo.jpeg" />
          <Card title="Project 2" icon={<FaGithub size={50} />} imageSrc="/images/demo.jpeg" />
          <Card title="Project 3" icon={<FaGithub size={50} />} imageSrc="/images/demo.jpeg" />
        </div>
      </div>
    );
}

const Card = ({ title, icon, imageSrc, children }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-white/40 group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
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
                        width={300}
                        height={240}
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
                        className="h-full w-full absolute inset-0 bg-white/70 dark:bg-white" 
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div
                    className={`text-center w-full mx-auto flex items-center justify-center ${
                        !hovered ? "opacity-0" : "opacity-100"
                    }`}
                >
                    {icon}
                </div>
                <h2
                    className={`text-xl text-black mt-4 font-bold text-center transition duration-200 ${
                        !hovered ? "opacity-0" : "opacity-100"
                    }`}
                >
                    {title}
                </h2>
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
