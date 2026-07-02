"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GitMerge } from "lucide-react";

const STACK_PILLS = ["Kotlin", "Spring Boot", "Next.js", "Python"];

export default function BentoBox() {
    return (
        <section className="pt-16 lg:pt-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-end gap-6 mb-12"
                >
                    <span className="text-[80px] lg:text-[100px] font-instrument font-bold leading-none text-white/[0.04] select-none -mb-3">
                        05
                    </span>
                    <div className="pb-1">
                        <p className="text-xs font-jost tracking-[0.3em] uppercase text-aura-cyan mb-1">About</p>
                        <h2 className="text-4xl lg:text-5xl font-instrument font-bold">The person behind the code.</h2>
                    </div>
                </motion.div>

                {/* 3-card grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 lg:gap-6 auto-rows-[320px] lg:auto-rows-[280px]">

                    {/* ── Photo card (left, row-span-2) ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
                        className="relative rounded-2xl overflow-hidden border border-aura-purple/20 lg:row-span-2 group"
                    >
                        <Image
                            src="/images/my-picture-3.jpeg"
                            alt="Tolulope Adams"
                            fill
                            unoptimized
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-white font-instrument font-bold text-2xl leading-tight">Tolulope Adams</p>
                            <p className="text-white/50 font-jost text-sm mt-1">Software Engineer · Lagos, Nigeria</p>
                        </div>
                    </motion.div>

                    {/* ── About blurb card (top right) ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay: 0.1 }}
                        className="rounded-2xl border border-aura-cyan/15 bg-white/40 dark:bg-black/40 backdrop-blur-md p-7 lg:p-8 flex flex-col justify-between group hover:border-aura-cyan/35 transition-colors duration-500"
                    >
                        <div className="flex flex-col gap-4">
                            <p className="text-2xl lg:text-3xl font-instrument font-bold leading-snug">
                                Engineer by trade,<br />
                                <span className="text-aura-cyan">builder by passion.</span>
                            </p>
                            <p className="font-jost text-sm opacity-65 leading-relaxed max-w-sm">
                                I graduated in Petroleum Engineering and taught myself to code. Today I ship production-grade
                                Android apps, Spring Boot APIs, and Next.js frontends for teams at scale.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {STACK_PILLS.map((pill) => (
                                <span
                                    key={pill}
                                    className="px-3 py-1 rounded-full text-xs font-jost font-semibold border border-aura-cyan/25 bg-aura-cyan/8 text-aura-cyan uppercase tracking-wider"
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Philosophy card (bottom right) ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay: 0.2 }}
                        className="relative rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                            alt="Team collaboration"
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors duration-700" />
                        <div className="absolute inset-0 p-7 lg:p-8 flex flex-col justify-end">
                            <GitMerge className="w-6 h-6 mb-3 text-aura-cyan" />
                            <h3 className="text-2xl font-instrument font-bold mb-1 text-white">Team-Driven Environment</h3>
                            <p className="text-sm font-jost text-white/65 max-w-xs">
                                Collaboration is the heartbeat of every great deployment.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
