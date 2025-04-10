import React from "react";
import CircularGallery from "./ui/CircularGallery";
import { CanvasRevealEffectDemo } from "./ui/CanvasRevealEffectDemo";
import { AnimatedPinDemo } from "./AnimatedPin";

const Projects = () => {
    return (
        <div>
            <CanvasRevealEffectDemo />
            <AnimatedPinDemo/>
        </div>
    );
};

export default Projects;
