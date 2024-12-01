"use client";

import { TouchEvent, useEffect, useRef, useState } from "react";

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
        "Github",
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


  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    if (carouselDivRef.current) {
        // const scrollableWidth = carouselDivRef.current.scrollWidth - carouselDivRef.current.clientWidth;
        // const scrollBy = (newIndex - activeIndex) * scrollableWidth / 2;
        // // const scrollBy = (percentage / 100) * scrollableWidth;
        // carouselDivRef.current.scrollLeft += scrollBy;
      }
    setActiveIndex(newIndex);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current &&
      touchEndX.current &&
      touchStartY.current &&
      touchEndY.current
    ) {
      const distanceX = touchEndX.current - touchStartX.current;
      const distanceY = touchEndY.current - touchStartY.current;
      const isLeftSwipe = distanceX < -minSwipeDistance;
      const isRightSwipe = distanceX > minSwipeDistance;

      if (isRightSwipe && distanceX > distanceY) {
        // swipe right
        updateIndex(activeIndex - 1);
      }

      if (isLeftSwipe && Math.abs(distanceX) > distanceY) {
        // swipe left
        updateIndex(activeIndex + 1);
      }

      // Reset touch positions
      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  const carouselDivRef = useRef(null);
  const scrollHorizontally = (percentage: number) => {
    // if (carouselDivRef.current) {
    //   const scrollableWidth = carouselDivRef.current.scrollWidth - carouselDivRef.current.clientWidth;
    //   const scrollBy = (percentage / 100) * scrollableWidth;
    //   carouselDivRef.current.scrollLeft += scrollBy;
    // }
  };

  return (
    <div className={props.className}>

      <div ref={carouselDivRef}  className="relative w-full z-10 flex flex-row gap-x-6 justify-between overflow-x-auto">
          {items.map((item, index) => (

            <div key={index} className="carousel-item shrink-0 lg:shrink">

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

            </div>
          ))}
      </div>
    </div>
    // <div className={props.className}>
        
        /* <div className="carousel-indicator"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
            <div className="circle active" onClick={() => {updateIndex(0)}}></div>
            <div className="circle" onClick={() => {updateIndex(1)}}></div>
            <div className="circle" onClick={() => {updateIndex(2)}}></div>
        </div> */
    // </div>
  );
}
