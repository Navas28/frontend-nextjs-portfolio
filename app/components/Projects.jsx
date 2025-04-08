import React from "react";
import CircularGallery from "@/src/blocks/Components/CircularGallery/CircularGallery";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";

const Projects = () => {
    return (
        <div>
            <CanvasRevealEffectDemo />
            <div style={{ height: "600px", position: "relative" }}>
                <CircularGallery textColor="#ffffff" borderRadius={0.05} />
            </div>
        </div>
    );
};

export default Projects;
