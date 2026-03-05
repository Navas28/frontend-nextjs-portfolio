import React from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { TextGenerateEffectDemo } from "@/components/ui/TextGenerateEffectDemo";
import BlurText from "@/components/ui/BlurText";

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto pt-24 min-h-screen flex flex-col items-center justify-center gap-4"
      id="home"
    >
      <div>
        <Image
          src="/images/profile-2-bg.png"
          alt="profile image"
          className="rounded-full border-white border-2"
          style={{ width: "auto", height: "auto" }}
          priority
          width={150}
          height={100}
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl  font-para text-white">
        Hi! I am Navas
      </h3>
      <TextGenerateEffectDemo />
      <BlurText
        className="max-w-xl md:text-lg justify-center text-center mx-auto text-white"
        text="A dedicated developer from a non-IT background who transitioned into tech through passion and hard work. Having successfully completed a full-stack internship, build high-performance, SEO-optimized web applications with a focus on clean code and user experience."
      />

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="cursor-none px-6 py-3  flex gap-3 items-center md:text-lg text-md rounded-lg border border-black/50 bg-white text-black  hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition duration-200 font-bold"
        >
          Contact me <ArrowRight />
        </a>
        <a
          href="/pdf/navas-resume.pdf"
          download
          className="cursor-none px-6 py-3 flex gap-3 items-center md:text-lg font-bold text-md rounded-lg border border-black/50 bg-white text-black  hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition duration-200"
        >
          My resume <Download />
        </a>
      </div>
    </div>
  );
};

export default Header;
