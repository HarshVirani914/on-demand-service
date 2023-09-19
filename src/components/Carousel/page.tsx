'use client'
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import CarService from 'public/OurServices/8227.jpg'
import HomeService from 'public/OurServices/5258.jpg'

export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image
        src={CarService}
        alt=""
        className="h-full w-full object-cover"
      />
      <Image
        src={HomeService}
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}