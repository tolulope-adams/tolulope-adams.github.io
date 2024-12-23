"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Tag from "../tag";

import "./carousel.css";

export default function Carousel(props: {
  className: string;
}) {
  const items = [
    {
      id: "001",
      icon: require("../../../public/images/github.svg"),
      title: "Mobile Development",
      description: "Like a digital chef, I blend ingredients of raw data, seasoning with statistical methods, and serve up mouth-watering insights that decision-makers cannot resist",
      tags: ["Java", "Kotlin", "Jetpack Compose", "Firebase", "Mockito", "Android Studio"]
    },
    {
      id: "001",
      icon: require("../../../public/images/github.svg"),
      title: "Web Development",
      description:
        "Like a digital chef, I blend ingredients of raw data, seasoning with statistical methods, and serve up mouth-watering insights that decision-makers cannot resist",
      tags: [
        "HTML",
        "CSS",
        "Typescript",
        "React.js",
        "Tailwind",
        "Spring Boot",
        "Visual Studio",
      ],
    },
    {
      id: "001",
      icon: require("../../../public/images/github.svg"),
      title: "Data Analysis",
      description:
        "Like a digital chef, I blend ingredients of raw data, seasoning with statistical methods, and serve up mouth-watering insights that decision-makers cannot resist",
      tags: ["Python", "MS Excel", "PostgreSQL", "SAS", "GitHub", "Jupyter Notebook"]
    },
  ];


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
    <div className={`${props.className} relative flex flex-col gap-y-6 items-center z-10`}>

      <div ref={carouselDivRef}  className="carousel flex flex-row gap-x-6 z-0 lg:gap-x-12 justify-between snap-x snap-mandatory scroll-smooth">
          {items.map((item, index) => (

            <div key={index} className="carousel-item flex flex-col shrink-0 lg:shrink gap-y-4 px-3 py-6 rounded text-center items-center snap-center">

              <Image alt="My Logo" src="./images/github.svg" width={28} height={28} priority />

              <p className="uppercase text-center my-4 text-lg font-bold tracking-wider text-truncate wrap-text">
                {item.title}
              </p>

              <p className="mb-4 font-normal font-montserrat">{item.description}</p>

              <h3 className="uppercase text-center mb-4 text-lg font-bold tracking-wider">
                SKILLS &amp; TOOLS
              </h3>

              <div className="flex flex-row flex-wrap mb-1 justify-items-center justify-center gap-4">
                {item.tags.map((tag, index) => (
                  <Tag key={index} name={tag} className="px-6 py-3 rounded-full bg-black text-white"/>
                ))}
              </div>

              <p>Click to see projects</p>

            </div>
          ))}

      </div>

      <div className="flex flex-row gap-x-4 lg:hidden">
            <div className={`w-6 h-1 rounded-full ${activeIndex == 0 ? 'bg-blue-500': 'bg-red-500'}`}></div>
            <div className={`w-6 h-1 rounded-full ${activeIndex == 0 ? 'bg-blue-500': 'bg-red-500'}`}></div>
            <div className={`w-6 h-1 rounded-full ${activeIndex == 2 ? 'bg-blue-500': 'bg-red-500'}`}></div>
        </div>
    </div>
  );
}
