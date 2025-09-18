"use client";
import { motion } from "motion/react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiMongodb,
    SiExpress,
    SiPostman,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiStripe,
    SiCloudinary,
    SiVercel,
    SiClerk,
    SiSwiper,
} from "react-icons/si";
import { SparklesText } from "./ui/sparkles-text";

const skillCategories = [
    {
        title: "Frontend Development",
        skills: [
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss3, color: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Swiper", icon: SiSwiper, color: "#6332F6" },
        ],
    },
    {
        title: "Backend & Database",
        skills: [
            { name: "Express.js", icon: SiExpress, color: "#ffffff" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Stripe", icon: SiStripe, color: "#008CDD" },
            { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
            { name: "Clerk", icon: SiClerk, color: "#6C47FF" },
        ],
    },
    {
        title: "Development Tools",
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#ffffff" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Vercel", icon: SiVercel, color: "#ffffff" },
        ],
    },
];

export default function SkillsShowcase() {
    return (
        <section className="flex flex-col items-center justify-center px-4 md:px-6 py-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="flex justify-center mb-12">
                    <SparklesText text="Skills & Tools" className="text-white" />
                </div>
            </motion.div>

            {/* Horizontal Layout for Categories */}
            <div className="w-full max-w-7xl">
                {/* Desktop: Horizontal Layout */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                            className="p-4"
                        >
                            {/* Category Title */}
                            <h3 className="text-2xl font-semibold text-white mb-8 text-center">{category.title}</h3>

                            {/* Skills Grid - Minimum 3 columns for desktop */}
                            <div className="grid grid-cols-3 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                            ease: "easeOut",
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            y: -10,
                                            transition: { duration: 0.2 },
                                        }}
                                        className="group relative cursor-pointer"
                                    >
                                        <div className="flex flex-col items-center justify-center space-y-4 p-4">
                                            <skill.icon 
                                                className="text-4xl transition-all duration-300 group-hover:scale-125" 
                                                style={{ color: skill.color }}
                                            />
                                            <span className="text-white text-base font-medium text-center opacity-90 group-hover:opacity-100 transition-all duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile/Tablet: Vertical Layout */}
                <div className="lg:hidden space-y-10">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                            className="p-4"
                        >
                            {/* Category Title */}
                            <h3 className="text-xl font-semibold text-white mb-8 text-center">{category.title}</h3>

                            {/* Skills Grid - 2 columns for mobile */}
                            <div className="grid grid-cols-2 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                            ease: "easeOut",
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            y: -10,
                                            transition: { duration: 0.2 },
                                        }}
                                        className="group relative cursor-pointer"
                                    >
                                        <div className="flex flex-col items-center justify-center space-y-3 p-4">
                                            <skill.icon 
                                                className="text-3xl transition-all duration-300 group-hover:scale-125" 
                                                style={{ color: skill.color }}
                                            />
                                            <span className="text-white text-sm font-medium text-center opacity-90 group-hover:opacity-100 transition-all duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
