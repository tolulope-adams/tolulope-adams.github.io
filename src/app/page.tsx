"use client";

import { useState } from "react";
import "./page.css";
import Carousel from "./carousel";
import "./toggle-button";
import Tag from "./tag";
import { hobbies } from '../data/portfolio';

import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import BlogShowcase from "@/components/BlogShowcase";
import Footer from "@/components/Footer";
import AuraCursor from "@/components/AuraCursor";
import BentoBox from "@/components/BentoBox";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HomePage() {
    const [openNavDrawer, setOpenNavDrawer] = useState(true);

    return (
        <div className="relative w-full h-svh overflow-x-hidden text-black dark:text-white">
            <AuraCursor />
            <header className="absolute top-0 left-0 right-0 flex flex-row justify-between z-10 bg-transparent">
                <div className="w-full flex flex-row items-center justify-between px-6 py-4 lg:px-12 lg:py-8">
                    <a href="#" aria-label="Logo">
                        <div className="w-10 h-10 lg:w-10 lg:h-10 text-aura-cyan hover:scale-110 transition-transform">
                            <svg viewBox="0 0 48 48" className='fill-current'>
                                <path d="M0 47.7268C4.50012 47.7268 9.64055 41.7 14.0871 34.264C14.8109 17.2003 20.9469 -8.52111 25.1882 2.7768C27.8603 9.89454 23.0904 25.3918 16.141 36.2503C16.244 39.5766 16.5844 42.2043 16.9574 43.5078C18.235 47.9723 19.9825 43.0177 28.4559 27.0399C28.3382 33.6035 30.4845 44.3579 33.7045 45.2773C34.0265 45.3693 34.8653 45.7419 36.1506 45.2C33.3389 43.9227 33.1381 37.1457 37.7573 30.2C44.2748 20.4 47.3975 31.8 45.1883 37C45.3891 39 44.9874 42 48 47.6C46.5941 47.4 44.3849 43 43.5816 40.6C40.1674 47.4 36.7531 47.7268 33.7045 47.7268C28.6204 47.7268 26.0468 40.7203 26.7137 35.2444C24.9484 39.5201 20.6961 49.801 16.4055 47.7268C14.9133 47.0054 14.195 43.7665 14.0462 39.2886C9.58548 45.2732 4.5073 49.0659 0 47.7268Z" fill="currentColor" />
                            </svg>
                        </div>
                    </a>
                    <div className="flex flex-row gap-4 items-center">
                        <ThemeToggle />
                        <button onClick={() => setOpenNavDrawer(!openNavDrawer)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md text-black dark:text-white hover:text-aura-cyan shadow-lg dark:shadow-none transition-all">
                            <svg viewBox="0 0 42 32" className="fill-current text-current w-5 h-5">
                                <path d="M12 10H32" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M12 18H32" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M12 26H32" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <main className="relative">
                <Hero />

                <section className="mt-16 flex flex-col px-6 lg:px-12">
                    <div className="flex flex-col gap-y-4">
                        <h2 className="text-xl font-normal tracking-wide text-aura-cyan">MY EXPERTISE</h2>
                        <h1 className="text-4xl font-instrument font-bold tracking-wide">What I do</h1>
                    </div>
                    <Carousel className="w-full mt-8" />
                </section>

                <ProjectShowcase />

                <BlogShowcase />

                <BentoBox />

                <Footer />
            </main>
        </div>
    );
}