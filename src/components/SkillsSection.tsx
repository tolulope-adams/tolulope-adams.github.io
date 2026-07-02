"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Server, Globe, ChevronDown } from "lucide-react";
import Tag from "@/app/tag";

const SKILLS = [
    {
        id: "mobile",
        icon: Smartphone,
        title: "Mobile Development",
        subtitle: "Android & Kotlin",
        description:
            "Building fluid, native Android experiences from the ground up. I design with Jetpack Compose, architect with MVVM/Clean Architecture, and integrate real-time features using Firebase.",
        tags: ["Kotlin", "Jetpack Compose", "Java", "Firebase", "MVVM", "Hilt", "Retrofit", "Room DB"],
        borderActive: "border-aura-cyan/70 dark:border-aura-cyan/40",
        bgActive: "bg-aura-cyan/5",
        iconRing: "border-aura-cyan/25 bg-aura-cyan/10",
        iconColor: "text-aura-cyan",
        tagClass: "border-aura-cyan/30 bg-aura-cyan/10 text-aura-cyan",
    },
    {
        id: "backend",
        icon: Server,
        title: "Backend Engineering",
        subtitle: "Java, Spring Boot & Microservices",
        description:
            "Designing scalable, maintainable server-side systems. I build RESTful APIs and microservice architectures with Java & Spring Boot, containerise with Docker, and deploy on cloud platforms.",
        tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "REST APIs", "Microservices", "Python", "FastAPI"],
        borderActive: "border-aura-purple/70 dark:border-aura-purple/40",
        bgActive: "bg-aura-purple/5",
        iconRing: "border-aura-purple/25 bg-aura-purple/10",
        iconColor: "text-aura-purple",
        tagClass: "border-aura-purple/30 bg-aura-purple/10 text-aura-purple",
    },
    {
        id: "web",
        icon: Globe,
        title: "Web & Data",
        subtitle: "Next.js, React & Python",
        description:
            "Crafting performant, accessible web interfaces with Next.js and TypeScript. I also apply Python data pipelines — Pandas, Numpy, and Scikit-Learn — for analytics and ML work.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "Pandas", "Numpy", "Jupyter"],
        borderActive: "border-aura-pink/70 dark:border-aura-pink/40",
        bgActive: "bg-aura-pink/5",
        iconRing: "border-aura-pink/25 bg-aura-pink/10",
        iconColor: "text-aura-pink",
        tagClass: "border-aura-pink/30 bg-aura-pink/10 text-aura-pink",
    },
];

export default function SkillsSection() {
    const [activeId, setActiveId] = useState<string>("mobile");

    return (
        <section id="skills" className="pt-16 lg:pt-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="pb-1">
                        <p className="text-sm font-jost tracking-[0.3em] uppercase text-aura-cyan mb-1">Expertise</p>
                        <h2 className="text-4xl lg:text-5xl font-instrument font-bold">I build things properly.</h2>
                    </div>
                </motion.div>

                {/* ── Desktop: 3-column always-expanded grid ── */}
                <div className="hidden lg:grid grid-cols-3 gap-6">
                    {SKILLS.map((skill, i) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`relative rounded-2xl border p-8 flex flex-col gap-5 ${skill.borderActive} ${skill.bgActive}`}
                            >
                                <div className="absolute -inset-[1px] rounded-2xl neon-glow-ring blur-sm opacity-[0.27] -z-10" />
                                <div className="absolute inset-0 rounded-2xl bg-white/85 dark:bg-black/75 backdrop-blur-xl -z-[5]" />
                                <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center border ${skill.iconRing}`}>
                                    <Icon className={`w-5 h-5 ${skill.iconColor}`} />
                                </div>
                                <div className="relative">
                                    <h3 className="text-xl font-instrument font-bold mb-1">{skill.title}</h3>
                                    <p className={`text-base font-jost ${skill.iconColor} opacity-70`}>{skill.subtitle}</p>
                                </div>
                                <p className="relative font-jost opacity-65 text-base leading-relaxed flex-1">{skill.description}</p>
                                <div className="relative flex flex-wrap gap-2 mt-auto">
                                    {skill.tags.map((tag) => (
                                        <Tag
                                            key={tag}
                                            name={tag}
                                            className={`px-3 py-1 rounded-full text-sm font-semibold tracking-wider border uppercase ${skill.tagClass}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ── Mobile: accordion ── */}
                <div className="lg:hidden flex flex-col gap-3">
                    {SKILLS.map((skill, i) => {
                        const isOpen = activeId === skill.id;
                        const Icon = skill.icon;

                        return (
                            <div key={skill.id} className="relative">
                                {isOpen && (
                                    <div className="absolute -inset-[1px] rounded-2xl neon-glow-ring blur-sm opacity-[0.27] -z-10" />
                                )}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`relative rounded-2xl border overflow-hidden transition-all duration-400 ${
                                    isOpen
                                        ? `${skill.borderActive} ${skill.bgActive}`
                                        : "border-white/10 dark:border-white/5 bg-white/30 dark:bg-white/[0.03]"
                                }`}
                            >
                                {isOpen && (
                                    <div className="absolute inset-0 -z-[5] bg-white/85 dark:bg-black/75 backdrop-blur-xl" />
                                )}
                                <button
                                    onClick={() => setActiveId(isOpen ? "" : skill.id)}
                                    className="w-full flex items-center justify-between px-5 py-5 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${skill.iconRing}`}>
                                            <Icon className={`w-5 h-5 ${skill.iconColor}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-instrument font-bold leading-snug">{skill.title}</h3>
                                            <p className={`text-base font-jost ${skill.iconColor} opacity-70`}>{skill.subtitle}</p>
                                        </div>
                                    </div>
                                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                        <ChevronDown className="w-5 h-5 opacity-50" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-6 flex flex-col gap-4">
                                                <p className="font-jost opacity-70 leading-relaxed text-base">{skill.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {skill.tags.map((tag) => (
                                                        <Tag
                                                            key={tag}
                                                            name={tag}
                                                            className={`px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider border uppercase ${skill.tagClass}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
