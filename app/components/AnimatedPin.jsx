"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
    const cards = [
        {
          title: "carsss",
          href: "cars.github.com",
          images: ["/images/car-1.png", "/images/car-3.png"],
        },
        {
          title: "Lamborghini Zone",
          href: "https://lamborghini.com",
          images: ["/images/gameverse-1.png", "/images/gameverse-2.png"],
        },
        {
          title: "Porsche World",
          href: "https://porsche.com",
          images: ["/images/porsche1.png", "/images/porsche2.png"],
        },
        {
            title: "Porsche World",
            href: "https://porsche.com",
            images: ["/images/porsche1.png", "/images/porsche2.png"],
          },
          {
            title: "Porsche World",
            href: "https://porsche.com",
            images: ["/images/porsche1.png", "/images/porsche2.png"],
          },
      ];
    return (
        <div className="w-full my-30 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-y-10 sm:gap-20 justify-items-center">
          {cards.map((card, index) => (
            <PinContainer
              key={index}
              title={card.title}
              href={card.href}
              containerClassName="w-full"
            >
              <div className="flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[19rem]  bg-white rounded-2xl overflow-hidden">
                {card.images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`image-${idx}`}
                    className="object-cover w-full h-1/2"
                  />
                ))}
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
      
    );
}
