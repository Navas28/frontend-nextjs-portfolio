"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsData, PROJECTS } from "@/data/projects";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiStripe,
  SiClerk,
  SiSwiper,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCloudinary,
  SiExpo,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact, FaGithub, FaGlobe, FaArrowLeft } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const techIcons = {
  "next js": <SiNextdotjs />,
  "tailwind css": <SiTailwindcss />,
  "react native": <TbBrandReactNative />,
  expo: <SiExpo />,
  cloudinary: <SiCloudinary />,
  "express js": <SiExpress />,
  "mongo db": <SiMongodb />,
  mongodb: <SiMongodb />,
  stripe: <SiStripe />,
  clerk: <SiClerk />,
  react: <FaReact />,
  swiper: <SiSwiper />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,
};

import { Android } from "@/components/ui/android";

export default function ProjectDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = React.useState(null);
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
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white/10 relative">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-7xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.type === "mobile" ? (
                <div className="h-full flex justify-center">
                  <div className="h-full aspect-[9/19.5]">
                    <Android
                      src={selectedImage.src}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              ) : (
                <Image
                  src={selectedImage.src}
                  alt="Full preview"
                  fill
                  className="object-contain"
                />
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase"
              >
                Close Esc
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center pointer-events-auto">
          <Link
            href="/#projects"
            className="group flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-white/5 transition-all">
              <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            Back to home
          </Link>
        </div>
      </nav>

      <div className="max-w-[1700px] mx-auto min-h-screen px-6 pt-16 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-12 lg:py-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-[0.9]"
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="max-w-xl">
                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-medium tracking-tight">
                  {project.description}
                </p>
              </div>

              {project.adminCredentials && (
                <div className="max-w-xl space-y-2 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.5em]">
                      Secure Dashboard Access
                    </h3>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed font-medium italic">
                    "{project.adminCredentials.instruction}"
                  </p>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-6 group/item">
                      <span className="text-[9px] text-white/20 uppercase font-bold w-12 tracking-widest">
                        Email
                      </span>
                      <div className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-white/90 font-mono text-xs select-all group-hover/item:border-white/10 group-hover/item:bg-white/[0.04] transition-all">
                        {project.adminCredentials.email}
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group/item">
                      <span className="text-[9px] text-white/20 uppercase font-bold w-12 tracking-widest">
                        Secret
                      </span>
                      <div className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-white/90 font-mono text-xs select-all group-hover/item:border-white/10 group-hover/item:bg-white/[0.04] transition-all">
                        {project.adminCredentials.password}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <div
                    key={t}
                    className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-bold text-white/40 uppercase tracking-widest"
                  >
                    {t}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
                  >
                    Visit Live <HiArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.repositories?.map((repo, idx) => (
                  <a
                    key={idx}
                    href={repo.url}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95 text-white/80 hover:text-white"
                  >
                    <FaGithub className="w-4 h-4" /> {repo.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 py-12 lg:py-32">
            <div className="flex flex-col gap-16 lg:gap-32">
              {(desktopImages.length > 0 || project.webVideoUrl) && (
                <div className="space-y-12">
                  {project.webVideoUrl && (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl group"
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

                  <div className="grid grid-cols-1 gap-8">
                    {desktopImages.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedImage(img)}
                        className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] group cursor-zoom-in"
                      >
                        <div className="absolute top-0 inset-x-0 h-10 bg-white/[0.05] flex items-center px-6 gap-2 z-10">
                          <div className="w-2 h-2 rounded-full bg-white/10" />
                          <div className="w-2 h-2 rounded-full bg-white/10" />
                          <div className="w-2 h-2 rounded-full bg-white/10" />
                        </div>
                        <Image
                          src={img.src}
                          alt={`Desktop ${i}`}
                          fill
                          className="object-cover object-top pt-10 group-hover:scale-[1.02] transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {mobileImages.length > 0 && (
                <div className="space-y-12 mb-24">
                  <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.5em] flex items-center gap-4">
                    Interface Preview{" "}
                    <span className="h-px flex-1 bg-white/5" />
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-items-center">
                    {mobileImages.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedImage(img)}
                        className="w-full max-w-[320px] relative group cursor-zoom-in"
                      >
                        <div className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all active:scale-[0.98]">
                          <Android src={img.src} className="w-full h-auto" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {project.mobileVideoUrl && (
                <div className="space-y-12 mb-24">
                  <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.5em] flex items-center gap-4">
                    Mobile Demo <span className="h-px flex-1 bg-white/5" />
                  </h3>

                  <div className="flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="w-full max-w-[320px] relative group"
                    >
                      {/* Video Glow */}
                      <div className="absolute inset-0 bg-blue-500/5 blur-[80px] rounded-full opacity-50 -z-10 group-hover:opacity-100 transition-opacity" />

                      <div className="drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                        <Android
                          videoSrc={project.mobileVideoUrl}
                          className="w-full h-auto"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
