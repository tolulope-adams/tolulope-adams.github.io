"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Tag from "./Tag";

import "./carousel.css";

export default function Carousel(props: {
  className: string;
}) {
  const items = [
    {
      title: "Mobile Development",
      description: "Like a digital chef, I blend ingredients of raw data, seasoning with statistical methods, and serve up mouth-watering insights that decision-makers cannot resist",
      tags: ["Java", "Kotlin", "Jetpack Compose", "Firebase", "Mockito"]
    },
    {
      title: "Backend Engineering",
      description: "Like a digital chef, I blend ingredients of raw data, seasoning with statistical methods, and serve up mouth-watering insights that decision-makers cannot resist",
      tags: ["HTML", "CSS", "Typescript", "React.js", "Tailwind", "Spring Boot"],
    },
    {
      title: "Data Analysis",
      description: "Like a digital chef, I blend ingredients of raw data, seasoning with statistical methods, and serve up mouth-watering insights that decision-makers cannot resist",
      tags: ["Python", "MS Excel", "PostgreSQL", "SAS", "Jupyter Notebook"]
    },
  ];

  const colorInactive: string = "bg-gray-300";

  const colorActive: string = "bg-blue-500";

  const [activeIndex, setActiveIndex] = useState(2);

  const carouselDivRef = useRef<HTMLDivElement>(null);

  const carouselDiv = carouselDivRef.current;

  const updateIndex = () => {
    if (carouselDiv) {
      let index = Math.round(carouselDiv.scrollLeft / carouselDiv.clientWidth);
      setActiveIndex(index);
    }
  };


  useEffect(() => {

    if (carouselDiv) {
      carouselDiv.addEventListener('scroll', updateIndex);
    }

    return () => {
      if (carouselDiv) {
        carouselDiv.removeEventListener('scroll', updateIndex);
      }
    };
  }, []);



  return (
    <div className={`${props.className} relative flex flex-col gap-y-6 items-center `}>

      <div ref={carouselDivRef} className="w-full flex flex-row gap-x-6 z-0 lg:gap-x-12 justify-between overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">
        {items.map((item, index) => (

          <div key={index} className="carousel-item flex flex-col shrink-0 lg:shrink gap-y-2 p-6 rounded snap-center" onClick={() => null}>

            <p className="uppercase font-jost text-base font-medium tracking-wider text-truncate wrap-text">{item.title}</p>

            <p className="mt-10 text-2xl font-jost font-bold tracking-wider text-truncate wrap-text">API Development</p>

            <p className="mb-4 text-lg font-jost font-normal tracking-wide leading-8">{item.description}</p>

            <div className="flex flex-row flex-wrap mb-1 justify-items-center gap-4">

              {item.tags.map((tag, index) => (

                <Tag key={index} name={tag} className="px-6 py-3 rounded-full bg-black text-white" />

              ))}

            </div>

            <p className="mt-8 text-center">Click to see projects</p>

          </div>

        ))}

      </div>

      <div className="flex flex-row gap-x-6 lg:hidden">
        <div className={`w-4 h-4 rounded-full ${activeIndex == 0 ? colorActive : colorActive}`}></div>
        <div className={`w-4 h-4 relative flex items-center justify-content-center x-shape ${activeIndex == 1 ? `before:${colorActive} after:${colorActive}` : `before:${colorActive} after:${colorActive}`}`}></div>
        <div className={`w-4 h-4 ${activeIndex == 2 ? colorActive : colorActive}`}></div>
      </div>

    </div>
  );
}


