"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { featured_articles } from "@/data/portfolio";

export default function BlogShowcase() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut", duration: 0.6 } }
    };

    return (
        <section className="px-6 pt-16 lg:pt-24 lg:px-12 pb-16">
            <div className="max-w-7xl mx-auto flex flex-col">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <div className="pb-1">
                    <p className="text-sm font-jost tracking-[0.3em] uppercase text-aura-cyan mb-1">Writing</p>
                    <h2 className="text-4xl lg:text-5xl font-instrument font-bold">Ideas worth sharing.</h2>
                </div>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="mt-8 flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-16 lg:gap-y-0"
            >
                {featured_articles.map((article, index) => (
                    <motion.div variants={item} key={index} className={`w-full h-min flex flex-col ${index === 0 ? 'lg:flex-col lg:row-span-2' : 'lg:flex-row lg:row-span-1 h:16rem'} gap-6 lg:gap-8 justify-between group cursor-pointer`}>
                        <div className={`overflow-hidden rounded-2xl relative shadow-lg shadow-black/50 ${index === 0 ? 'h-64 lg:h-[32rem] w-full' : 'h-48 lg:h-[12rem] w-full lg:w-1/2'}`}>
                            <div className="absolute inset-0 bg-aura-purple/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500 pointer-events-none"></div>
                            <Image
                                alt={article.title}
                                src={article.image}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                fill
                                unoptimized
                            />
                        </div>

                        <div className={`flex flex-col gap-y-3 ${index !== 0 ? 'lg:w-1/2' : ''}`}>
                            <div className="flex items-center gap-2 mb-1">
                                <p className="text-sm font-bold uppercase tracking-widest opacity-60 text-aura-pink">{article.date_published}</p>
                                {article.url === "#" && (
                                    <span className="text-xs font-jost font-semibold uppercase tracking-widest opacity-40 border border-black/10 dark:border-white/10 rounded-full px-2 py-0.5">
                                        Coming soon
                                    </span>
                                )}
                            </div>
                            {article.url === "#" ? (
                                <h3 className="text-2xl lg:text-3xl font-jost font-bold leading-tight opacity-70">{article.title}</h3>
                            ) : (
                                <a href={article.url} className="text-2xl lg:text-3xl font-jost font-bold leading-tight group-hover:text-aura-cyan transition-colors duration-300">
                                    <h3>{article.title}</h3>
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            </div>
        </section>
    );
}
