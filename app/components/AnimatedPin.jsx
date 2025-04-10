"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
    const cards = [
        {
          title: "Race Car",
          href: "https://navas28.github.io/car-website/",
          images: ["/images/car-1.png", "/images/car-3.png"],
        },
        {
          title: "Game Verse",
          href: "https://navas28.github.io/Game-website/",
          images: ["/images/gameverse-1.png", "/images/gameverse-2.png"],
        },
        {
          title: "Grill House",
          href: "https://grillhouse-menucard.netlify.app/",
          images: ["/images/grill-1.png", "/images/grill-2.png"],
        },
        {
            title: "Ferrari",
            href: "https://ferrari-website.vercel.app/",
            images: ["/images/ferrari.png", "/images/ferrari1.png"],
          },
          {
            title: "Fresh Cart",
            href: "https://navas28.github.io/Fresh-cart-/",
            images: ["/images/fresh-1.png", "/images/fresh-2.png"],
          },
          {
            title: "Binge Nest",
            href: "https://navas28.github.io/Series-Movie-Website/#",
            images: ["/images/series-1.png", "/images/series-2.png"],
          },
          {
            title: "Cup Gallery",
            href: "https://navas28.github.io/world-cup-gallery/",
            images: ["/images/cup-1.png", "/images/cup-2.png"],
          },
          {
            title: "Indian Tandoor",
            href: "https://navas28.github.io/Restuarent-webpage/",
            images: ["/images/res-1.png", "/images/res-2.png"],
          },
          {
            title: "Travel With Us",
            href: "https://navas28.github.io/Travel-Agency-/",
            images: ["/images/travel-1.png", "/images/travel-2.png"],
          },
          {
            title: "Horizon Bliss",
            href: "https://navas28.github.io/Hotel-website/",
            images: ["/images/hotel-1.png", "/images/hotel-2.png"],
          },
         
      ];
    return (
        <div className="w-full my-30 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-y-8 justify-items-center">
          {cards.map((card, index) => (
            <PinContainer
              key={index}
              title={card.title}
              href={card.href}
              containerClassName="w-full"
            >
              <div className="flex flex-col tracking-tight w-[20rem] h-[19rem]  bg-white rounded-2xl overflow-hidden">
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
