import { IconCloudDemo } from "@/components/IconCloudDemo";
import { BorderBeam } from "@/components/ui/border-beam";
import { SparklesText } from "@/components/ui/sparkles-text";
import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaSass, FaAngular, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={36} /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={36} /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={36} /> },
        { name: "React", icon: <FaReact className="text-[#61DAFB]" size={36} /> },
        { name: "Angular", icon: <FaAngular className="text-[#DD0031]" size={36} /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-[#ffff] dark:text-white" size={36} /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" size={36} /> },
        { name: "Express", icon: <SiExpress className="text-[#ffff] dark:text-gray-300" size={36} /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={36} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={36} /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" size={36} /> },
        { name: "SCSS", icon: <FaSass className="text-[#CD6799]" size={36} /> },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={36} /> },
    ];

    return (
        <section className="flex flex-col justify-center items-center" id="skills">
        <div className="py-16 w-[90%] dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-12">
                    <SparklesText text="Skills & Tools" className="text-white" />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-12 bg-black/70">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col items-center p-4 bg-black dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                                >
                                    <BorderBeam
                                        size={180}
                                        duration={6}
                                        className="from-transparent via-red-500 to-transparent"
                                    />
                                    <BorderBeam
                                        size={180}
                                        duration={6}
                                        delay={3}
                                        className="from-transparent via-blue-500 to-transparent"
                                    />
    
                                    <div className="mb-3 z-10">{skill.icon}</div>
                                    <h3 className="font-para font-semibold text-white dark:text-gray-200 z-10">
                                        {skill.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-black/50">
                        <IconCloudDemo />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Skills;
