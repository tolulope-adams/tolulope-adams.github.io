"use client";

import * as React from "react";
import { Moon, Sun, Snowflake, Wand2 } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const THEMES = ["dark", "light", "winter", "magical"] as const;

const THEME_META: Record<string, { icon: React.ElementType; label: string; color: string }> = {
    dark:    { icon: Moon,      label: "Dark",    color: "text-aura-purple" },
    light:   { icon: Sun,       label: "Light",   color: "text-yellow-400" },
    winter:  { icon: Snowflake, label: "Winter",  color: "text-sky-300" },
    magical: { icon: Wand2,     label: "Magical", color: "text-yellow-400" },
};

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [showLabel, setShowLabel] = React.useState(false);

    React.useEffect(() => { setMounted(true); }, []);

    if (!mounted) return <div className="w-10 h-10" />;

    const currentIndex = THEMES.indexOf((theme as typeof THEMES[number]) ?? "dark");
    const nextIndex = (currentIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextIndex];
    const current = THEME_META[theme ?? "dark"];
    const Icon = current.icon;

    return (
        <div className="relative flex items-center gap-2">
            <AnimatePresence>
                {showLabel && (
                    <motion.span
                        key={nextTheme}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        className="text-xs font-jost tracking-widest uppercase opacity-60 hidden lg:block"
                    >
                        → {THEME_META[nextTheme].label}
                    </motion.span>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(nextTheme)}
                onMouseEnter={() => setShowLabel(true)}
                onMouseLeave={() => setShowLabel(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-lg dark:shadow-none transition-all hover:ring-2 hover:ring-aura-cyan/40"
                aria-label={`Switch to ${nextTheme} theme`}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        className={current.color}
                    >
                        <Icon className="h-5 w-5" />
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
