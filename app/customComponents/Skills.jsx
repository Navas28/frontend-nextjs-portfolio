import { IconCloudDemo } from "@/components/IconCloudDemo";
import { BorderBeam } from "@/components/ui/border-beam";
import { SparklesText } from "@/components/ui/sparkles-text";
import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaSass, FaAngular, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={36} /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={36} /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={36} /> },
        { name: "React", icon: <FaReact className="text-blue-400" size={36} /> },
        { name: "Angular", icon: <FaAngular className="text-red-600" size={36} /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" size={36} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" size={36} /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" size={36} /> },
        { name: "SCSS", icon: <FaSass className="text-pink-500" size={36} /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={36} /> },
        { name: "Express", icon: <SiExpress className="text-gray-700 dark:text-gray-300" size={36} /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={36} /> },
        { name: "Git", icon: <FaGitAlt className="text-red-500" size={36} /> },
    ];

    return (
        <section className="py-16 bg-black dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <SparklesText text="Skills & Tools" className="text-white"/>
                        </div>

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
                                    <h3 className="font-medium text-gray-800 dark:text-gray-200 z-10">{skill.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <IconCloudDemo/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
