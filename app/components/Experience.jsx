import { SparklesText } from "./ui/sparkles-text";
import { SiNextdotjs, SiReact, SiTailwindcss, SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";

const Experience = () => {
    const technologies = [
        { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white" },
        { name: "React", icon: SiReact, color: "hover:text-cyan-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-sky-400" },
        { name: "MongoDB", icon: SiMongodb, color: "hover:text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "hover:text-gray-300" },
        { name: "Node.js", icon: SiNodedotjs, color: "hover:text-green-600" },
    ];

    return (
        <section className="min-h-screen py-20 px-6 lg:px-20 flex items-center" id="experience">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-16 flex justify-center flex-col items-center">
                    <SparklesText text="Experience" className="text-white" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative z-10 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-12 border border-zinc-800">
                            <div className="text-center space-y-6">
                                <div className="relative">
                                    <div className="text-[120px] lg:text-[160px] font-bold bg-white bg-clip-text text-transparent leading-none">
                                        6
                                    </div>
                                    <p className="text-2xl text-zinc-400 font-semibold -mt-1">Months</p>
                                </div>
                                <div className="pt-6 border-t border-zinc-800">
                                    <p className="text-zinc-500 text-sm mb-2">Duration</p>
                                    <p className="text-white text-xl font-semibold">Jun 2025 - Dec 2025</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl -z-10" />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="inline-block px-4 py-1.5 text-white text-sm font-semibold rounded-full border border-purple-500/30 mb-4">
                                Internship
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-3">Full Stack Web Developer</h3>
                            <div className="flex items-center gap-3 text-zinc-400 mb-6">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                                <span className="text-xl">Superhhero Learning • Kollam, Kerala</span>
                            </div>
                        </div>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Specialized in building high-performance, SEO-focused web applications. I led the development of
                            a dynamic educational platform and a custom admin dashboard, bridging the gap between complex
                            backend logic and user-friendly frontend designs.
                        </p>
                        <div className="space-y-3 pt-4">
                            <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Key Highlights</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                    </div>
                                    <span className="text-zinc-300">
                                        Built an SEO-optimized web platform using <strong>Next.js</strong> and Server-Side
                                        Rendering (SSR).
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                    </div>
                                    <span className="text-zinc-300">
                                        Developed a custom Admin Dashboard with <strong>MongoDB</strong> to manage content
                                        and media assets.{" "}
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                    </div>
                                    <span className="text-zinc-300">
                                        Handled production deployment, including domain configuration and image
                                        optimization.{" "}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-6">
                            <p className="text-sm text-zinc-500 uppercase tracking-wider mb-3 font-semibold">
                                Technologies Used
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {technologies.map((tech) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div
                                            key={tech.name}
                                            className={`group relative p-4 bg-zinc-800/80 rounded-xl border border-zinc-700 hover:border-purple-500/50 hover:bg-zinc-800 transition-all duration-300 ${tech.color}`}
                                            title={tech.name}
                                        >
                                            <Icon className="w-8 h-8 text-zinc-300 group-hover:scale-110 transition-transform duration-300" />

                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-700">
                                                {tech.name}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
