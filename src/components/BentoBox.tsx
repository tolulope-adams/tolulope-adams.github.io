"use client";

import { motion, Variants } from "framer-motion";
import { Github, Code, Layout, Coffee, GitMerge, Layers } from "lucide-react";
import Tag from "@/app/tag";

export default function BentoBox() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
    };

    return (
        <section className="pt-16 px-6 lg:px-16 lg:pt-32">
            <div className="flex flex-col gap-y-4 mb-8">
                <h2 className="text-xl font-normal tracking-wide text-aura-purple">THE MINDSET</h2>
                <h1 className="text-4xl font-instrument font-bold tracking-wide">Who Am I?</h1>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Large Bio Card */}
                <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 border border-aura-cyan/20 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between group hover:border-aura-cyan transition-colors duration-500">
                    <div>
                        <Layers className="w-8 h-8 text-aura-cyan mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold tracking-wide mb-2">Architecting Digital Solutions</h3>
                        <p className="opacity-80 leading-relaxed font-jost">
                            Like a digital chef, I blend ingredients of raw data, seasoning with statistical methods, and serve up robust backend infrastructures and fluid mobile interfaces that decision-makers cannot resist.
                        </p>
                    </div>
                </motion.div>

                {/* Vertical Stack Card */}
                <motion.div variants={item} className="col-span-1 row-span-2 bg-gradient-to-br from-aura-purple/20 to-white/60 dark:to-black/60 border border-aura-purple/30 rounded-2xl p-6 flex flex-col justify-center items-center text-center overflow-hidden relative group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(78,0,194,0.4),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <Code className="w-16 h-16 text-aura-purple mb-6 group-hover:animate-pulse" />
                    <h3 className="text-xl font-bold mb-4 font-instrument">The Stack</h3>
                    <div className="flex flex-col gap-2 w-full px-4">
                        <span className="w-full bg-white/50 dark:bg-black/50 border border-aura-purple/20 px-4 py-2 rounded-full text-sm font-medium tracking-wide">Mobile: Jetpack Compose</span>
                        <span className="w-full bg-white/50 dark:bg-black/50 border border-aura-purple/20 px-4 py-2 rounded-full text-sm font-medium tracking-wide">Backend: Java & Spring</span>
                        <span className="w-full bg-white/50 dark:bg-black/50 border border-aura-purple/20 px-4 py-2 rounded-full text-sm font-medium tracking-wide">Data: Python & Numpy</span>
                        <span className="w-full bg-white/50 dark:bg-black/50 border border-aura-cyan/20 px-4 py-2 rounded-full text-sm font-medium tracking-wide">Web: Next.js + React</span>
                    </div>
                </motion.div>

                {/* Small Github Square */}
                <motion.div variants={item} className="col-span-1 row-span-1 bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors group cursor-pointer" onClick={() => window.open('https://github.com/tolulope-adams', '_blank')}>
                    <Github className="w-12 h-12 text-gray-400 group-hover:text-black dark:group-hover:text-white mb-2 transition-colors duration-300" />
                    <p className="font-jost text-sm tracking-wide text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">@tolulope-adams</p>
                </motion.div>

                {/* Small Fun Fact Square */}
                <motion.div variants={item} className="col-span-1 row-span-1 bg-aura-cyan/5 border border-aura-cyan/20 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                    <Coffee className="w-12 h-12 text-aura-cyan group-hover:-rotate-12 transition-transform duration-500 mb-2" />
                    <h3 className="text-xl font-instrument font-bold">Currently Brewing</h3>
                    <p className="text-sm opacity-70 mt-1 uppercase tracking-widest text-center">A Good Loaf of Bread</p>
                </motion.div>

                {/* Wide Philosophy Card */}
                <motion.div variants={item} className="col-span-1 lg:col-span-2 row-span-1 bg-[url('/images/warttt.jpg')] bg-cover bg-center rounded-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-sm group-hover:backdrop-blur-none group-hover:bg-white/40 dark:group-hover:bg-black/40 transition-all duration-700"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <GitMerge className="w-8 h-8 text-black dark:text-white mb-2" />
                        <h3 className="text-2xl font-bold font-instrument mb-1 text-black dark:text-white z-10">Team-Driven Environment</h3>
                        <p className="opacity-90 text-sm font-jost text-black dark:text-white z-10">Collaboration is the heart of every great deployment.</p>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
