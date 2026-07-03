"use client";

import { useState } from "react";

import Hero               from "@/components/Hero";
import SkillsSection      from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectShowcase    from "@/components/ProjectShowcase";
import BlogShowcase       from "@/components/BlogShowcase";
import Footer             from "@/components/Footer";
import NavDrawer          from "@/components/NavDrawer";
import ThemeParticles     from "@/components/ThemeParticles";
import ScrollProgress     from "@/components/ScrollProgress";
import TechMarquee        from "@/components/TechMarquee";
import { ThemeToggle }    from "@/components/ThemeToggle";

export default function HomePage() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden text-black dark:text-white">
            {/* Scroll progress bar */}
            <ScrollProgress />

            {/* Ambient particles (winter snowflakes / magical stars) */}
            <ThemeParticles />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 lg:px-2 lg:py-5 bg-white/60 dark:bg-black/40 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
                {/* Logo */}
                <a href="#about" aria-label="Home" className="w-9 h-9 text-aura-cyan hover:scale-110 transition-transform">
                    <svg viewBox="0 0 48 48" className="fill-current w-full h-full">
                        <path d="M0 47.7268C4.50012 47.7268 9.64055 41.7 14.0871 34.264C14.8109 17.2003 20.9469 -8.52111 25.1882 2.7768C27.8603 9.89454 23.0904 25.3918 16.141 36.2503C16.244 39.5766 16.5844 42.2043 16.9574 43.5078C18.235 47.9723 19.9825 43.0177 28.4559 27.0399C28.3382 33.6035 30.4845 44.3579 33.7045 45.2773C34.0265 45.3693 34.8653 45.7419 36.1506 45.2C33.3389 43.9227 33.1381 37.1457 37.7573 30.2C44.2748 20.4 47.3975 31.8 45.1883 37C45.3891 39 44.9874 42 48 47.6C46.5941 47.4 44.3849 43 43.5816 40.6C40.1674 47.4 36.7531 47.7268 33.7045 47.7268C28.6204 47.7268 26.0468 40.7203 26.7137 35.2444C24.9484 39.5201 20.6961 49.801 16.4055 47.7268C14.9133 47.0054 14.195 43.7665 14.0462 39.2886C9.58548 45.2732 4.5073 49.0659 0 47.7268Z" />
                    </svg>
                </a>

                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    {/* Hamburger */}
                    <button
                        onClick={() => setDrawerOpen(true)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-lg dark:shadow-none hover:ring-2 hover:ring-aura-cyan/30 transition-all"
                        aria-label="Open menu"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth={2} strokeLinecap="round">
                            <line x1="4" y1="6"  x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Main content */}
            <main className="relative z-10">
                <Hero />
                <TechMarquee />
                <SkillsSection />
                <ExperienceTimeline />
                <ProjectShowcase />
                <BlogShowcase />
                <Footer />
            </main>

            {/* Navigation drawer */}
            <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </div>
    );
}
