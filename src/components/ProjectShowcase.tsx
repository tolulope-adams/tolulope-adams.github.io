"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Tag from "@/app/tag";
import { featured_projects } from "@/data/portfolio";

export default function ProjectShowcase() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
    };

    return (
        <section className="pt-8 px-6 lg:px-16 lg:pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-y-4"
            >
                <h2 className="text-xl font-normal tracking-wide text-aura-cyan">FEATURED PROJECTS</h2>
                <h1 className="text-4xl font-instrument font-bold tracking-wide">Show Time</h1>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="mt-8 grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-8 justify-between"
            >
                {featured_projects.map((project, index) => (
                    <motion.div variants={item} key={index} className="relative z-10 rounded group hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-full h-full p-6 lg:p-8 flex flex-col gap-x-6 bg-black/50 backdrop-blur-md border border-white/5 group-hover:border-aura-cyan/50 transition-colors rounded-2xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-aura-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="w-full flex flex-col gap-y-4 relative z-10">
                                <h3 className="text-3xl font-bold tracking-wide font-instrument text-black dark:text-white group-hover:text-aura-cyan transition-colors">{project.name}</h3>
                                <p className="text-lg font-normal opacity-80 font-jost leading-relaxed text-black dark:text-white">{project.description}</p>
                                <div className="flex flex-row flex-wrap gap-4 mt-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <Tag key={tagIndex} name={tag} className="px-5 py-2 rounded-full text-xs font-semibold tracking-wider border border-aura-cyan/30 bg-aura-cyan/10 text-aura-cyan uppercase" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
