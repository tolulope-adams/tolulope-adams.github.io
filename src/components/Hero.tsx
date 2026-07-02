"use client";

import { motion, Variants, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const TITLES = ["Software Engineer", "Mobile Developer", "Backend Architect", "Web Builder"];

const TERMINAL_LINES = [
    { type: "cmd",    text: "whoami" },
    { type: "out",    text: "tolulope.adams  —  software engineer" },
    { type: "cmd",    text: "git log --oneline -2" },
    { type: "git",    text: "🚀  ship: launched Hablo v2.0" },
    { type: "git",    text: "✨  feat: new Spring Boot microservice" },
    { type: "cursor", text: "" },
];

function TerminalWindow({ active = true }: { active?: boolean }) {
    const [visibleCount, setVisibleCount] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    // Reset the typing sequence whenever this slide becomes inactive, so it replays
    // from the start each time it becomes active again (e.g. mobile carousel rotation).
    useEffect(() => {
        if (!active) setVisibleCount(0);
    }, [active]);

    useEffect(() => {
        if (!active) return;
        if (visibleCount >= TERMINAL_LINES.length) return;
        const delay = TERMINAL_LINES[visibleCount].type === "cmd" ? 600 : 320;
        const t = setTimeout(() => setVisibleCount((c) => c + 1), delay);
        return () => clearTimeout(t);
    }, [visibleCount, active]);

    return (
        <div className="w-full font-mono text-base rounded-2xl overflow-hidden border border-aura-cyan/20 bg-black/70 backdrop-blur-xl shadow-2xl shadow-black/60">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-sm tracking-widest text-white/30 uppercase">terminal — portfolio</span>
            </div>
            <div className="p-5 lg:p-8 flex flex-col gap-1.5 lg:gap-2.5 lg:min-h-[420px] lg:justify-center">
                {TERMINAL_LINES.map((line, i) => {
                    const isVisible = i < visibleCount;
                    if (line.type === "cursor") {
                        return (
                            <div key={i} className="flex items-center gap-2 mt-1" style={{ opacity: isVisible ? 1 : 0 }}>
                                <span className="text-aura-cyan">$</span>
                                <motion.span
                                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [1, 0] }}
                                    transition={shouldReduceMotion ? undefined : { duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                                    className="inline-block w-2 h-4 bg-aura-cyan"
                                />
                            </div>
                        );
                    }
                    return (
                        <motion.div
                            key={i}
                            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -6 }}
                            transition={{ duration: 0.2 }}
                            className={`flex items-start gap-2 ${line.type !== "cmd" ? "pl-4" : ""}`}
                        >
                            {line.type === "cmd" && <span className="text-aura-cyan shrink-0">$</span>}
                            <span className={
                                line.type === "cmd" ? "text-white" :
                                line.type === "git" ? "text-green-400/80" :
                                                      "text-aura-purple/80"
                            }>
                                {line.text}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [slide, setSlide] = useState(0); // 0 = photo, 1 = terminal
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const id = setInterval(() => setTitleIndex((p) => (p + 1) % TITLES.length), 3000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const id = setInterval(() => setSlide((p) => (p + 1) % 2), 5000);
        return () => clearInterval(id);
    }, []);

    const container: Variants = {
        hidden: { opacity: 0 },
        show:   { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
    };
    const item: Variants = {
        hidden: { opacity: 0, y: 24 },
        show:   { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.35, duration: 0.7 } },
    };

    return (
        <section
            id="about"
            className="relative w-full min-h-svh flex items-center overflow-hidden pt-4 lg:pt-0"
        >
            {/* Ambient blobs */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    className="absolute -top-[15%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-aura-purple/15 blur-[140px]"
                    animate={shouldReduceMotion ? { scale: 1, opacity: 0.4 } : { scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
                    transition={shouldReduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-aura-cyan/10 blur-[120px]"
                    animate={shouldReduceMotion ? { scale: 1, opacity: 0.3 } : { scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
                    transition={shouldReduceMotion ? undefined : { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
                <div className="absolute inset-0 noise-overlay opacity-[0.035]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-6 pt-4 pb-10 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:min-h-0 py-0 lg:py-20">

                    {/* ── Left column ── */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-y-8 lg:gap-y-6 items-start"
                    >
                        {/* Intro */}
                        <motion.div variants={item} className="flex flex-col gap-4 max-w-xl">
                            <h1 className="text-4xl lg:text-7xl font-instrument font-bold leading-tight">
                                Hi there 👋
                            </h1>
                            <p className="text-lg lg:text-3xl font-jost opacity-75 leading-relaxed">
                                I&apos;m <b>Tolu</b> — a software engineer at Goldman Sachs, building event-driven microservices that power regulatory reporting for global markets.
                            </p>
                        </motion.div>

                        {/* Mobile carousel (photo ↔ terminal) — both slides always mounted so the
                            grid row height is driven by the terminal's (now-stable) natural height;
                            the photo stretches to match via h-full. Visibility toggles via animate. */}
                        <motion.div variants={item} className="lg:hidden w-full flex flex-col gap-3">
                            <div className="relative">
                                <div className="absolute -inset-[1px] rounded-3xl neon-glow-ring blur-sm opacity-[0.42] -z-10" />
                                <div className="relative grid overflow-hidden rounded-3xl">
                                    {/* Photo slide */}
                                    <motion.div
                                        animate={{ opacity: slide === 0 ? 1 : 0, x: slide === 0 ? 0 : -40 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className={`relative col-start-1 row-start-1 w-full h-full rounded-3xl overflow-hidden border border-aura-purple/25 shadow-2xl shadow-black/40 ${slide === 0 ? "" : "pointer-events-none"}`}
                                    >
                                        <Image
                                            src="/images/my-picture-3.jpeg"
                                            alt="Tolulope Adams"
                                            fill
                                            unoptimized
                                            className="object-cover object-top"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-black/40 backdrop-blur-sm text-green-400 text-sm font-jost font-semibold">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            Available for work
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <p className="text-white font-instrument font-bold text-2xl leading-tight">Tolulope Adams</p>
                                            <div className="overflow-hidden h-6 mt-1">
                                                <AnimatePresence mode="popLayout">
                                                    <motion.p
                                                        key={titleIndex}
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -20, opacity: 0 }}
                                                        transition={{ type: "spring", stiffness: 280, damping: 28 }}
                                                        className="text-aura-cyan font-jost text-base font-semibold"
                                                    >
                                                        {TITLES[titleIndex]}
                                                    </motion.p>
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Terminal slide */}
                                    <motion.div
                                        animate={{ opacity: slide === 1 ? 1 : 0, x: slide === 1 ? 0 : 40 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className={`col-start-1 row-start-1 w-full ${slide === 1 ? "" : "pointer-events-none"}`}
                                    >
                                        <TerminalWindow active={slide === 1} />
                                    </motion.div>
                                </div>
                            </div>
                            {/* Dot indicators */}
                            <div className="flex justify-center gap-2">
                                {[0, 1].map((i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSlide(i)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            slide === i ? "w-6 bg-aura-cyan" : "w-1.5 bg-white/20"
                                        }`}
                                        aria-label={i === 0 ? "Show photo" : "Show terminal"}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div variants={item} className="flex gap-4">
                            <button
                                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-aura-cyan text-black font-jost font-semibold text-base hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-aura-cyan/25"
                            >
                                View My Work <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-aura-cyan/60 text-aura-cyan font-jost font-semibold text-base hover:bg-aura-cyan/10 transition-all"
                            >
                                Let&apos;s Talk
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* ── Right column: photo ↔ terminal carousel — desktop only ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
                        className="hidden lg:flex flex-col gap-3 items-center w-full lg:pl-8 xl:pl-12"
                    >
                        <div className="relative w-full">
                            <div className="absolute -inset-[1px] rounded-3xl neon-glow-ring blur-sm opacity-[0.42] -z-10" />
                            <div className="relative grid overflow-hidden rounded-3xl">
                                {/* Photo slide */}
                                <div
                                    className={`relative col-start-1 row-start-1 w-full h-full rounded-3xl overflow-hidden border border-aura-purple/25 shadow-2xl shadow-black/40 transition-opacity duration-400 ${slide === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                                >
                                    <Image
                                        src="/images/my-picture-3.jpeg"
                                        alt="Tolulope Adams"
                                        fill
                                        unoptimized
                                        className="object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-black/40 backdrop-blur-sm text-green-400 text-sm font-jost font-semibold">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        Available for work
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-instrument font-bold text-3xl leading-tight">Tolulope Adams</p>
                                        <div className="overflow-hidden h-6 mt-1">
                                            <AnimatePresence mode="popLayout">
                                                <motion.p
                                                    key={titleIndex}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0,  opacity: 1 }}
                                                    exit={{   y: -20, opacity: 0 }}
                                                    transition={{ type: "spring", stiffness: 280, damping: 28 }}
                                                    className="text-aura-cyan font-jost text-base font-semibold"
                                                >
                                                    {TITLES[titleIndex]}
                                                </motion.p>
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>

                                {/* Terminal slide */}
                                <div
                                    className={`col-start-1 row-start-1 w-full transition-opacity duration-400 ${slide === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                                >
                                    <TerminalWindow active={slide === 1} />
                                </div>
                            </div>
                        </div>
                        {/* Dot indicators */}
                        <div className="flex justify-center gap-2">
                            {[0, 1].map((i) => (
                                <button
                                    key={i}
                                    onClick={() => setSlide(i)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        slide === i ? "w-6 bg-aura-cyan" : "w-1.5 bg-white/20"
                                    }`}
                                    aria-label={i === 0 ? "Show photo" : "Show terminal"}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
            >
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
