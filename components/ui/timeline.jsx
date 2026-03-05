"use client";
import React, { useRef } from "react";
import { SparklesText } from "./sparkles-text";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);

    return (
        <div className="flex justify-center items-center">
            <div className="font-sans px-4 md:px-10 flex flex-col" ref={containerRef}>
                <div className="max-w-7xl mx-auto pt-10 md:pt-20 px-4 md:px-8 lg:px-10">
                    <SparklesText text="Learning Journey" className="text-white text-2xl md:text-4xl" />
                </div>
                <div ref={ref} className="relative max-w-9xl mx-auto pb-10 md:pb-20 overflow-x-auto">
                    {/* Desktop: Horizontal layout */}
                    <div className="hidden md:flex gap-8 lg:gap-40 min-w-max pt-10">
                        {data.map((item, index) => (
                            <div key={index} className="flex flex-col items-center min-w-[250px] lg:min-w-[300px]">
                                <div className="mb-6 md:mb-8">
                                    {item.title}
                                </div>
                                <div className="w-full h-[3px] md:h-[5px] bg-neutral-200 dark:bg-neutral-700 mb-6 md:mb-8 rounded-md"></div>
                                <div className="text-center max-w-xs">
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Vertical layout */}
                    <div className="md:hidden space-y-8 pt-10">
                        {data.map((item, index) => (
                            <div key={index} className="flex flex-col items-center px-4">
                                <div className="mb-4">
                                    {item.title}
                                </div>
                                <div className="w-20 h-[3px] bg-neutral-200 dark:bg-neutral-700 mb-4 rounded-md"></div>
                                <div className="text-center max-w-sm">
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
