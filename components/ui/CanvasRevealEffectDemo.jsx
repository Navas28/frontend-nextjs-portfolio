"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
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
import Link from "next/link";
import { SparklesText } from "./sparkles-text";
import { PROJECTS } from "@/data/projects";

const techIcons = {
  "next js": <SiNextdotjs />,
  "tailwind css": <SiTailwindcss />,
  cloudinary: <SiCloudinary />,
  "express js": <SiExpress />,
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

// ─── Image Preview Zone ───────────────────────────────────────────────────────
// Handles both desktop-only and desktop+mobile gracefully in a fixed-height box

const PreviewZone = ({ images }) => {
  const desktop = images.find((i) => i.type === "desktop");

  return (
    <div className="relative w-full h-72 flex items-end justify-center overflow-visible px-4 pb-0">
      {/* Desktop frame */}
      {desktop && (
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
      )}
    </div>
  );
};

// ─── Card ─────────────────────────────────────────────────────────────────────

const Card = ({ project, index }) => {
  const [hovered, setHovered] = React.useState(false);

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
        whileHover={{ y: -4 }}
        className="flex flex-col rounded-xl overflow-hidden border border-white/[0.08] bg-[#0e0e0e]
          transition-all duration-300 hover:border-white/[0.16] cursor-pointer h-full"
        style={{
          boxShadow: hovered
            ? "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)"
            : "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* ── Image Zone ── */}
        <div className="w-full bg-[#0a0a0a] pt-5 border-b border-white/[0.06]">
          <PreviewZone images={project.images} />
        </div>

        {/* ── Info Zone ── */}
        <div className="flex flex-col flex-1 px-5 py-4 gap-3">
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

          {/* Tech icons */}
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

          {/* Divider */}
          <div className="h-px bg-white/[0.05]" />

          {/* Footer */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                Details
              </span>
              <HiArrowUpRight size={10} className="text-white/30" />
            </div>

            <motion.div
              animate={{ x: hovered ? 4 : 0 }}
              className="text-white/20"
            >
              <HiArrowUpRight size={14} />
            </motion.div>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
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
