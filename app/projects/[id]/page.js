"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe, FaArrowLeft } from "react-icons/fa";
import { ProjectsData, PROJECTS } from "@/data/projects";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiStripe,
  SiClerk,
  SiReact,
  SiSwiper,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCloudinary,
} from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";

const techIcons = {
  "next js": <SiNextdotjs />,
  "tailwind css": <SiTailwindcss />,
  cloudinary: <SiCloudinary />,
  "express js": <SiExpress />,
  "mongo db": <SiMongodb />,
  mongodb: <SiMongodb />,
  stripe: <SiStripe />,
  clerk: <SiClerk />,
  react: <SiReact />,
  swiper: <SiSwiper />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white gap-4 bg-[#050505]">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link
          href="/"
          className="text-white/50 hover:text-white transition-colors"
        >
          Return to home
        </Link>
      </div>
    );
  }

  const desktopImages = project.images.filter((i) => i.type === "desktop");
  const mobileImages = project.images.filter((i) => i.type === "mobile");

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white/10">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="group flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/5 transition-all">
              <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            Back to home
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-xs font-bold text-white/40 uppercase tracking-[0.4em] border-l-2 border-white/20 pl-4">
                {project.subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-10 text-balance"
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
                >
                  Visit Live Project
                  <HiArrowUpRight className="w-5 h-5" />
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  className="flex items-center gap-3 px-10 py-4 rounded-full bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                >
                  <FaGithub className="w-5 h-5" />
                  View Source
                </a>
              )}
            </motion.div>
          </div>

          <div className="max-w-[1000px]">
            <div className="mb-24">
              <h2 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] mb-8">
                The Story
              </h2>
              <p className="text-2xl md:text-4xl text-white/80 leading-[1.3] font-medium tracking-tight mb-12">
                {project.description}
              </p>

              {project.adminCredentials && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-6 text-white/5 group-hover:text-white/20 transition-colors">
                    <svg
                      className="w-24 h-24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                    </svg>
                  </div>

                  <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-4">
                    Admin Dashboard Access
                  </h3>
                  <p className="text-white/60 mb-10 max-w-lg text-sm leading-relaxed">
                    {project.adminCredentials.instruction}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <span className="text-[10px] text-white/20 uppercase font-bold block mb-2 tracking-widest">
                        Login Email
                      </span>
                      <div className="px-4 py-3 rounded-xl bg-white/[0.05] border border-white/5 text-white font-mono text-lg select-all cursor-copy">
                        {project.adminCredentials.email}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/20 uppercase font-bold block mb-2 tracking-widest">
                        Secret Password
                      </span>
                      <div className="px-4 py-3 rounded-xl bg-white/[0.05] border border-white/5 text-white font-mono text-lg select-all cursor-copy">
                        {project.adminCredentials.password}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="mb-32">
              <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] mb-10">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-4">
                {project.tech.map((t) => {
                  const icon =
                    techIcons[t.toLowerCase()] ||
                    techIcons[t.toLowerCase().replace(/\s/g, "")];
                  return (
                    <div
                      key={t}
                      className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all"
                    >
                      <div className="text-2xl text-white/30 lowercase">
                        {icon || <HiArrowUpRight />}
                      </div>
                      <span className="text-sm font-medium text-white/50">
                        {t}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {(desktopImages.length > 0 || project.webVideoUrl) && (
              <div className="mb-40">
                <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                  Web Experience <span className="h-px flex-1 bg-white/5" />
                </h3>

                <div className="flex flex-col gap-20">
                  {project.webVideoUrl && (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
                    >
                      <video
                        src={project.webVideoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 gap-12">
                    {desktopImages.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] group"
                      >
                        <div className="absolute top-0 inset-x-0 h-8 bg-white/[0.05] flex items-center px-6 gap-2 z-10">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        </div>
                        <Image
                          src={img.src}
                          alt={`Web interface ${i}`}
                          fill
                          className="object-cover object-top pt-8 group-hover:scale-[1.01] transition-transform duration-700"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {(mobileImages.length > 0 || project.mobileVideoUrl) && (
              <div className="mb-40">
                <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                  Mobile Experience <span className="h-px flex-1 bg-white/5" />
                </h3>

                <div className="flex flex-col gap-20">
                  {project.mobileVideoUrl && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="flex justify-center"
                    >
                      <div className="relative w-[300px] md:w-[380px] aspect-[9/19] rounded-[3.5rem] overflow-hidden border-8 border-white/10 bg-black shadow-2xl">
                        <video
                          src={project.mobileVideoUrl}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20" />
                      </div>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {mobileImages.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[9/19] rounded-[3.5rem] overflow-hidden border-8 border-white/10 bg-black shadow-2xl group"
                      >
                        <Image
                          src={img.src}
                          alt={`Mobile app ${i}`}
                          fill
                          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                        />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="py-40 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
              Looking for something similar?
            </h2>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-4 px-12 py-5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all text-xl font-medium"
            >
              Explore all works
              <HiArrowUpRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
