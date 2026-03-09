"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import IconOrb from "./IconOrb";
import MagicHand from "./MagicHand";

export default function Hero() {
    const titles = ["Software Engineer", "Mobile Developer", "Backend Architect", "Web Builder"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000); // Change title every 3 seconds
        return () => clearInterval(intervalId);
    }, [titles.length]);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
    };

    return (
        <section className="relative w-full h-svh flex flex-col lg:flex-row items-center justify-center lg:px-12 overflow-hidden pt-16 lg:pt-0">
            {/* Cinematic Background effect */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-aura-purple/20 blur-[120px]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-aura-blue/20 blur-[120px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            {/* Content Wrapper for internal centering */}
            <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto z-20">
                {/* Text Content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-y-2 lg:gap-y-6 px-6 lg:px-0 w-full"
                >
                    <motion.p variants={item} className="text-lg lg:text-3xl font-jost text-gray-600 dark:text-gray-400 font-light italic">Hi, I&apos;m</motion.p>

                    <motion.h1 variants={item} className="text-4xl lg:text-7xl font-instrument font-bold tracking-wide leading-tight text-black dark:text-white">
                        Tolulope Adams
                    </motion.h1>

                    <motion.div variants={item} className="text-xl lg:text-4xl font-instrument font-bold flex flex-row items-center justify-center lg:justify-start gap-x-3 overflow-hidden h-12">
                        <span className="text-gray-800 dark:text-gray-200">a</span>
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={currentTitleIndex}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -40, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="text-aura-cyan inline-block font-instrument"
                            >
                                {titles[currentTitleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    <motion.p variants={item} className="text-sm lg:text-xl font-jost leading-relaxed text-gray-700 dark:text-gray-300 max-w-lg lg:max-w-xl">
                        I love building things that live on the internet. Whether that means diving deep into a Spring Boot backend, crafting a seamless Android app, or spinning up a Next.js interface, I just enjoy turning complex problems into really simple, beautiful software.
                    </motion.p>

                    <motion.div variants={item} className="mt-4 lg:mt-8 flex flex-row gap-x-8 lg:gap-x-12">
                        <a href="https://github.com/tolulope-adams" target="_blank" aria-label="GitHub" className="group">
                            <svg viewBox="0 0 28 28" className="w-6 h-6 lg:w-8 lg:h-8 fill-current text-black dark:text-white group-hover:text-aura-cyan transition-all group-hover:scale-110 duration-200">
                                <path d="M14.0001 0C6.26903 0 0 6.42658 0 14.3544C0 20.6967 4.01144 26.0773 9.57413 27.9753C10.2738 28.1082 10.5307 27.6639 10.5307 27.2848C10.5307 26.9425 10.5176 25.8117 10.5117 24.6123C6.61677 25.4806 5.79492 22.9186 5.79492 22.9186C5.15808 21.2594 4.24048 20.8184 4.24048 20.8184C2.97031 19.9274 4.33622 19.9456 4.33622 19.9456C5.7421 20.047 6.48238 21.4249 6.48238 21.4249C7.73102 23.6194 9.75749 22.9849 10.5564 22.6183C10.682 21.6904 11.0449 21.0572 11.4452 20.6988C8.33569 20.3357 5.06672 19.1049 5.06672 13.6047C5.06672 12.0376 5.61364 10.757 6.50928 9.75183C6.3639 9.39022 5.88473 7.9303 6.64488 5.95307C6.64488 5.95307 7.82051 5.56726 10.4959 7.42448C11.6126 7.10633 12.8103 6.94692 14.0001 6.94152C15.1898 6.94692 16.3884 7.10633 17.5073 7.42448C20.1795 5.56726 21.3535 5.95307 21.3535 5.95307C22.1155 7.9303 21.6361 9.39022 21.4907 9.75183C22.3883 10.757 22.9315 12.0375 22.9315 13.6047C22.9315 19.118 19.6564 20.332 16.539 20.6873C17.0411 21.1328 17.4885 22.0064 17.4885 23.3455C17.4885 25.2661 17.4723 26.812 17.4723 27.2848C17.4723 27.6668 17.7243 28.1144 18.434 27.9734C23.9936 26.0732 28 20.6945 28 14.3544C28 6.42658 21.7318 0 14.0001 0Z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/tolulope-adams/" target="_blank" aria-label="LinkedIn" className="group">
                            <svg viewBox="0 0 20 20" className="w-6 h-6 lg:w-8 lg:h-8 fill-current text-black dark:text-white group-hover:text-aura-cyan transition-all group-hover:scale-110 duration-200">
                                <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Orb Visualizer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    className="flex-1 flex items-center justify-center w-full h-[350px] lg:h-full pointer-events-none"
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        <MagicHand />
                        <IconOrb />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
