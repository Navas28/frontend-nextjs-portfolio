"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaReact } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
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
import Link from "next/link";
import { SparklesText } from "./sparkles-text";
import { PROJECTS } from "@/data/projects";

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

// ─── Image Preview Zone ───────────────────────────────────────────────────────

const PreviewZone = ({ project }) => {
  const { images } = project;
  const desktop = images.find((i) => i.type === "desktop");
  const mobile = images.find((i) => i.type === "mobile");

  const showMobile = (project.badge === "App" || !desktop) && mobile;

  return (
    <div className="relative w-full h-72 flex items-end justify-center overflow-hidden px-4 pb-0">
      {showMobile ? (
        <div className="relative w-[180px] h-full flex items-end justify-center overflow-hidden">
          <Android src={mobile.src} className="w-full h-auto mb-[-60px]" />
        </div>
      ) : desktop ? (
        <div
          className="relative flex flex-col rounded-t-lg overflow-hidden border border-white/5 shadow-2xl shadow-black/60"
          style={{ width: "100%", flexShrink: 0 }}
        >
          {/* Browser bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.04] flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="ml-2 flex-1 h-2.5 rounded-full bg-white/5" />
          </div>
          <div className="relative w-full" style={{ height: "250px" }}>
            <Image
              src={desktop.src}
              alt="desktop preview"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

// ─── Card ─────────────────────────────────────────────────────────────────────

const Card = ({ project, index }) => {
  const [hovered, setHovered] = React.useState(false);
  const isMobileApp = project.badge === "App";

  if (isMobileApp) {
    const mobile = project.images.find((i) => i.type === "mobile");
    return (
      <Link href={`/projects/${project.id}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex items-center justify-center h-full min-h-[430px] group cursor-pointer"
        >
          <div className="relative w-[270px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] transition-all duration-500">
            <Android src={mobile?.src} className="w-full h-auto" />
          </div>

          <div className="flex items-center gap-2 absolute bottom-0">
            <span className="text-[12px] text-white uppercase tracking-widest font-bold">
              Details
            </span>
            <HiArrowUpRight size={12} className="text-white" />
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.07,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col rounded-xl overflow-hidden border border-white/[0.08] bg-[#0e0e0e]
          transition-all duration-300 cursor-pointer h-fit"
        style={{
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <div className="w-full bg-[#0a0a0a] pt-5 border-b border-white/[0.06]">
          <PreviewZone project={project} />
        </div>

        <div className="flex flex-col px-5 py-4 gap-3">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-bold text-white/50 tracking-[0.15em] uppercase border-l-2 border-white/20 pl-2">
                  {project.subtitle}
                </span>
              </div>
              <h3 className="text-white text-xl font-bold tracking-tight leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 py-1">
            {project.tech.map((t, i) => {
              const normalized = t.toLowerCase();
              const icon =
                techIcons[normalized] ||
                techIcons[normalized.replace(/\s/g, "")];
              return (
                <div
                  key={i}
                  className="text-2xl text-white/30 hover:text-white/70 transition-all duration-300 hover:scale-110"
                >
                  {icon || <span className="text-[9px] font-bold">{t}</span>}
                </div>
              );
            })}
          </div>

          <div className="h-px bg-white/[0.05]" />

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-white uppercase tracking-widest font-bold">
                Details
              </span>
              <HiArrowUpRight size={12} className="text-white" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────

export function CanvasRevealEffectDemo() {
  return (
    <section className="mx-auto px-4 sm:px-8 lg:px-12" id="projects">
      <div className="text-center mb-12 sm:mb-16">
        <SparklesText text="Top Projects" className="text-white" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
        {PROJECTS.map((project, i) => (
          <Card key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export const Icon = ({ className, ...rest }) => (
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
