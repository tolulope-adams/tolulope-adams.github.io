"use client";

import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState, useRef } from "react";
import { X, Github, ExternalLink } from "lucide-react";
import Tag from "@/app/tag";
import { featured_projects } from "@/data/portfolio";

type Project = typeof featured_projects[0];

function useTilt() {
    const ref = useRef<HTMLDivElement>(null);

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = ((e.clientX - left - width / 2) / (width / 2)) * 7;
        const y = ((e.clientY - top - height / 2) / (height / 2)) * 7;
        el.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.025,1.025,1.025)`;
        el.style.transition = "transform 0.1s ease";
    };

    const onMouseLeave = () => {
        if (ref.current) {
            ref.current.style.transform = "";
            ref.current.style.transition = "transform 0.5s ease";
        }
    };

    return { ref, onMouseMove, onMouseLeave };
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
    const tilt = useTilt();

    return (
        <div ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave} style={{ transformStyle: "preserve-3d" }} className="relative">
            <div className="absolute -inset-[1px] rounded-2xl neon-glow-ring blur-sm opacity-[0.27] -z-10" />
            <motion.div
                layoutId={`card-${project.name}`}
                onClick={onClick}
                className="group relative rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 bg-white/85 dark:bg-black/80 backdrop-blur-xl cursor-pointer"
                whileHover={{ borderColor: "rgba(56,189,248,0.4)" }}
            >
                {/* Image */}
                <motion.div layoutId={`img-${project.name}`} className="relative w-full h-52 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                <div className="p-6 flex flex-col gap-3">
                    <motion.h3
                        layoutId={`title-${project.name}`}
                        className="text-xl font-instrument font-bold group-hover:text-aura-cyan transition-colors"
                    >
                        {project.name}
                    </motion.h3>
                    <p className="text-base font-jost opacity-65 leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {project.tags.slice(0, 4).map((tag) => (
                            <Tag
                                key={tag}
                                name={tag}
                                className="px-3 py-1 rounded-full text-sm font-semibold border border-aura-cyan/30 bg-aura-cyan/10 text-aura-cyan uppercase tracking-wider"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function ProjectOverlay({ project, onClose }: { project: Project; onClose: () => void }) {
    return (
        <>
            <motion.div
                className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            <div className="fixed inset-0 z-50 flex items-start justify-center p-4 lg:p-12 overflow-y-auto pointer-events-none">
                <div className="pointer-events-auto relative w-full max-w-2xl my-auto">
                <div className="absolute -inset-[1px] rounded-3xl neon-glow-ring blur-sm opacity-[0.36] -z-10" />
                <motion.div
                    layoutId={`card-${project.name}`}
                    className="w-full rounded-3xl overflow-hidden border border-aura-cyan/30 bg-black/90 backdrop-blur-2xl shadow-2xl shadow-black/80"
                >
                    <motion.div layoutId={`img-${project.name}`} className="relative w-full h-64 lg:h-80">
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            unoptimized
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/80 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </motion.div>

                    <div className="p-7 flex flex-col gap-5">
                        <motion.h2
                            layoutId={`title-${project.name}`}
                            className="text-3xl font-instrument font-bold text-white"
                        >
                            {project.name}
                        </motion.h2>

                        <p className="font-jost opacity-75 leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Tag
                                    key={tag}
                                    name={tag}
                                    className="px-3 py-1 rounded-full text-sm font-semibold border border-aura-cyan/30 bg-aura-cyan/10 text-aura-cyan uppercase tracking-wider"
                                />
                            ))}
                        </div>

                        <div className="flex gap-4 pt-2">
                            {project.github === "#" ? (
                                <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/40 text-base font-jost font-semibold cursor-not-allowed">
                                    <Github className="w-4 h-4" /> Coming soon
                                </span>
                            ) : (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-base font-jost font-semibold hover:border-aura-cyan/50 hover:text-aura-cyan transition-all"
                                >
                                    <Github className="w-4 h-4" /> GitHub
                                </a>
                            )}
                            {project.demo === "#" ? (
                                <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/30 text-base font-jost font-semibold cursor-not-allowed">
                                    <ExternalLink className="w-4 h-4" /> Coming soon
                                </span>
                            ) : (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-aura-cyan text-black text-base font-jost font-semibold hover:opacity-90 transition-all"
                                >
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
                </div>
            </div>
        </>
    );
}

export default function ProjectShowcase() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section id="projects" className="pt-16 lg:pt-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="pb-1">
                        <p className="text-sm font-jost tracking-[0.3em] uppercase text-aura-cyan mb-1">Work</p>
                        <h2 className="text-4xl lg:text-5xl font-instrument font-bold">Things I shipped.</h2>
                    </div>
                </motion.div>

                <LayoutGroup>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.12 } },
                        }}
                    >
                        {featured_projects.map((project) => (
                            <motion.div
                                key={project.name}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
                                }}
                            >
                                <ProjectCard project={project} onClick={() => setSelected(project)} />
                            </motion.div>
                        ))}
                    </motion.div>

                    <AnimatePresence>
                        {selected && (
                            <ProjectOverlay project={selected} onClose={() => setSelected(null)} />
                        )}
                    </AnimatePresence>
                </LayoutGroup>
            </div>
        </section>
    );
}
