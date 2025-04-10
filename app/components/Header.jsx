import React from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { TextGenerateEffectDemo } from "@/app/components/TextGenerateEffectDemo";
import BlurText from "@/app/components/ui/BlurText";

const Header = () => {
    return (
        <div
            className="w-11/12 max-w-3xl text-center mx-auto pt-24 min-h-screen flex flex-col items-center justify-center gap-4"
            id="home"
        >
            <div>
                <Image
                    src="/images/demo.jpeg"
                    alt="profile image"
                    className="rounded-full"
                    style={{ width: "auto", height: "auto" }}
                    priority
                    width={100}
                    height={100}
                />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl  font-para text-white">Hi! Iam Navas</h3>
            <TextGenerateEffectDemo />
            <BlurText
                className="max-w-xl md:text-lg justify-center text-center mx-auto text-white"
                text=" Passionate self-taught web developer from a non-IT background. I actively learn and work on projects to enhance my skills and gain experience in web development through self-learning. I also pursue opportunities to work on
                real-world projects through internships or employment."
            />

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a
                    href="#contact"
                    className="cursor-none px-4 py-3 flex gap-3 items-center text-md rounded-lg border border-black/50 bg-white text-black  hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition duration-200"
                >
                    Contact me <ArrowRight />
                </a>
                <a
                    href="/pdf/navas-resume.pdf"
                    download
                    className="cursor-none px-4 py-3 flex gap-3 items-center text-md rounded-lg border border-black/50 bg-white text-black  hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition duration-200"
                >
                    My resume <Download />
                </a>
            </div>
        </div>
    );
};

export default Header;
