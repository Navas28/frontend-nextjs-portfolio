"use client";

import React, { useState } from "react";
import { Timeline } from "./ui/timeline";
import { TextHoverEffect } from "./ui/text-hover-effect";
import FadeContent from "@/app/components/ui/FadeContent";

export function Education() {
    const data = [
        {
            title: <TextHoverEffect text="2017" />,
            content: (
                <FadeContent className="font-para mt-3">
                    <p className="text-xl font-semibold">10th Grade</p>
                    <p>G.H.S.S Kuttikkattooor</p>
                </FadeContent>
            ),
        },
        {
            title: <TextHoverEffect text="2019" />,
            content: (
                <FadeContent className="font-para">
                    <p className="text-xl font-semibold">12th Grade</p>
                    <span>Humanities</span>
                    <p>G.H.S.S Kuttikkattooor</p>
                </FadeContent>
            ),
        },
        {
            title: <TextHoverEffect text="2022" />,
            content: (
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="font-para">
                    <p className="text-xl font-semibold mt-3">Bachelor of Arts in Sociology</p>
                    <p>Calicut University</p>
                </FadeContent>
            ),
        },
    ];
    return (
        <div className="w-full text-white" id="education">
            <Timeline data={data} />
        </div>
    );
}
