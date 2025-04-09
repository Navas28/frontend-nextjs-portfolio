import React from "react";
import CircularGallery from "./ui/CircularGallery";
import { CanvasRevealEffectDemo } from "./ui/CanvasRevealEffectDemo";
import { AnimatedPinDemo } from "./AnimatedPin";

const Projects = () => {
    return (
        <div>
            <CanvasRevealEffectDemo />
            <AnimatedPinDemo/>
            {/* <div style={{ height: "600px", position: "relative"}}>
                <CircularGallery textColor="#ffffff" borderRadius={0.05} />
            </div> */}
        </div>
    );
};

export default Projects;
