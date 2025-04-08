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
    "stripe",
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
    "render",
    "angular",
    "axios",
    "dotenv",
    "figma",
    "nodedotjs",
    "framer",
    "lucide",
    "redux",
    "nodemon",
    "daisyui",
    "shadcnui",
    "reactrouter",
    "swiper",
];

export function IconCloudDemo() {
    const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

    return (
        <div className="relative flex size-full  items-center justify-center overflow-hidden">
            <IconCloud images={images} />
        </div>
    );
}
