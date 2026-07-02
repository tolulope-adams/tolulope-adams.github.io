"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Mail } from "lucide-react";

interface NavDrawerProps {
    open: boolean;
    onClose: () => void;
}

const NAV_LINKS = [
    { label: "About",      href: "#about" },
    { label: "Skills",     href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects" },
    { label: "Articles",   href: "#articles" },
    { label: "Contact",    href: "#contact" },
];

export default function NavDrawer({ open, onClose }: NavDrawerProps) {
    const scrollTo = (href: string) => {
        onClose();
        setTimeout(() => {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 250);
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.nav
                        className="fixed top-0 right-0 h-full w-72 z-50 flex flex-col border-l border-aura-cyan/20 bg-aura-darker/95 backdrop-blur-2xl"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 320, damping: 38 }}
                    >
                        {/* Close button */}
                        <div className="flex justify-end px-6 pt-6 pb-2">
                            <button
                                onClick={onClose}
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-aura-cyan/30 text-aura-cyan hover:bg-aura-cyan/10 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Links */}
                        <ul className="flex flex-col px-8 mt-6 flex-1 gap-1">
                            {NAV_LINKS.map(({ label, href }, i) => (
                                <motion.li
                                    key={label}
                                    initial={{ opacity: 0, x: 24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 + 0.05 }}
                                >
                                    <button
                                        onClick={() => scrollTo(href)}
                                        className="w-full text-left py-3 text-2xl font-instrument font-bold hover:text-aura-cyan transition-colors duration-200 border-b border-black/5 dark:border-white/5"
                                    >
                                        {label}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Social links */}
                        <div className="px-8 pb-10">
                            <p className="text-sm uppercase tracking-widest opacity-40 mb-4 font-jost">Find me on</p>
                            <div className="flex gap-5">
                                <a href="https://github.com/tolulope-adams" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-aura-cyan transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/tolulope-adams/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-aura-cyan transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="mailto:tolulopeadams700@gmail.com" aria-label="Email" className="hover:text-aura-cyan transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.nav>
                </>
            )}
        </AnimatePresence>
    );
}
