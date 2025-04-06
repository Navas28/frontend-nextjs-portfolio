import { IconCloud } from "./ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "css3",
    "react",
    "html5",
    "nextdotjs",
    "express",
    "vercel",
    "github",
    "visualstudiocode",
    "stripe",
    "jwt",
    "prettier",
    "vite",
    "postman",
    "npm",
    "sass",
    "netlify",
    "tailwindcss",
    "bootstrap",
    "mongodb",
    "mongoose",
    "git",
    "nodejs",
    "aws",
    "render",
    "scss",
    "angular",
    "framer-motion",
    "animatecss",
    "axios",
    "dotenv",
    "cors",
    "multer",
    "shadcn",
    "acuternity",
    "magicui",
    "gsap",
    "reactbits",
    "reacthottoast",
];

export function IconCloudDemo() {
    const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

    return (
        <div className="relative flex size-full  items-center justify-center overflow-hidden">
            <IconCloud images={images} />
        </div>
    );
}
