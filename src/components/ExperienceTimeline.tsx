"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/portfolio";

function TimelineCard({
    entry,
    index,
}: {
    entry: typeof experience[0];
    index: number;
}) {
    const [isOpen, setIsOpen] = useState(index === 0);
    const shouldReduceMotion = useReducedMotion();
    const isLeft = index % 2 === 0;
    const isEducation = entry.role.toLowerCase().includes("b.sc") || entry.role.toLowerCase().includes("m.sc");
    const Icon = isEducation ? GraduationCap : Briefcase;

    return (
        <div className={`relative flex items-start gap-6 lg:gap-0 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
            {/* Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.25, delay: index * 0.08 }}
                className={`w-full lg:w-[calc(50%-2rem)] ${isLeft ? "lg:pr-8" : "lg:pl-8"}`}
            >
                <div className="group relative rounded-2xl border border-aura-cyan/15 bg-white/85 dark:bg-black/75 backdrop-blur-xl p-6 hover:border-aura-cyan/40 transition-colors duration-500">
                    {/* Neon glow ring */}
                    <div className="absolute -inset-[1px] rounded-2xl neon-glow-ring blur-sm opacity-[0.24] -z-10" />
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-aura-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                                <h3 className="text-xl font-instrument font-bold leading-snug">{entry.role}</h3>
                                <p className="text-aura-cyan font-jost font-semibold text-base mt-0.5">{entry.company}</p>
                            </div>
                            <button
                                onClick={() => setIsOpen((o) => !o)}
                                aria-expanded={isOpen}
                                aria-label={isOpen ? "Collapse details" : "Expand details"}
                                className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-colors lg:pointer-events-none ${isEducation ? "border-aura-purple/30 bg-aura-purple/10 hover:bg-aura-purple/20" : "border-aura-cyan/30 bg-aura-cyan/10 hover:bg-aura-cyan/20"}`}
                            >
                                <motion.div
                                    animate={
                                        isOpen || shouldReduceMotion
                                            ? { rotate: 0 }
                                            : { rotate: [0, -8, 8, -8, 0] }
                                    }
                                    transition={
                                        isOpen || shouldReduceMotion
                                            ? { duration: 0.2 }
                                            : { duration: 0.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }
                                    }
                                    className="lg:!transform-none"
                                >
                                    <Icon
                                        className={`w-5 h-5 ${isEducation ? "text-aura-purple" : "text-aura-cyan"}`}
                                        fill={isOpen ? "currentColor" : "none"}
                                        fillOpacity={isOpen ? 0.25 : 0}
                                    />
                                </motion.div>
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm font-jost opacity-60">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" /> {entry.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5" /> {entry.location}
                            </span>
                        </div>

                        {/* Mobile: collapsible bullets */}
                        <div className="lg:hidden">
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="flex flex-col gap-2">
                                            {entry.bullets.map((bullet, bi) => (
                                                <li key={bi} className="flex items-start gap-2.5 text-base font-jost opacity-75 leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-aura-cyan" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Desktop: always expanded */}
                        <ul className="hidden lg:flex flex-col gap-2">
                            {entry.bullets.map((bullet, bi) => (
                                <li key={bi} className="flex items-start gap-2.5 text-base font-jost opacity-75 leading-relaxed">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-aura-cyan" />
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Centre dot — hidden on mobile (mobile just shows stacked cards) */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.2, type: "spring" }}
                    className="w-4 h-4 rounded-full border-2 border-aura-cyan bg-aura-darker shadow-[0_0_12px_var(--aura-cyan)]"
                />
            </div>

            {/* Right spacer (desktop) */}
            <div className="hidden lg:block w-[calc(50%-2rem)]" />
        </div>
    );
}

export default function ExperienceTimeline() {
    return (
        <section id="experience" className="pt-16 lg:pt-24 px-6 lg:px-2">
            <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <div className="pb-1">
                    <p className="text-sm font-jost tracking-[0.3em] uppercase text-aura-cyan mb-1">Timeline</p>
                    <h2 className="text-4xl lg:text-5xl font-instrument font-bold">The story so far.</h2>
                </div>
            </motion.div>

            <div className="relative">
                {/* Vertical line (desktop only) */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-aura-cyan/0 via-aura-cyan/40 to-aura-cyan/0" />

                <div className="flex flex-col gap-10 lg:gap-12">
                    {experience.map((entry, i) => (
                        <TimelineCard key={i} entry={entry} index={i} />
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
}
