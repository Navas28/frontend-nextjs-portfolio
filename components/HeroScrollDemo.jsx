"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { SparklesText } from "./ui/sparkles-text";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden" id="certification">
      <ContainerScroll
        titleComponent={
          <div className="mb-10"> 
           <SparklesText text="Certification" className="text-white" />
          </div>
        }>
        <Image
          src="/images/udemy.jpg"
          alt="hero"
          height={100}
          width={1000}
          className="mx-auto rounded-2xl bg-cover  h-full w-full "
          draggable={false} />
      </ContainerScroll>
    </div>
  );
}
