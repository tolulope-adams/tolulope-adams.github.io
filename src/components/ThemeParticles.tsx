"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";

interface Snowflake {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
    char: string;
}

interface Star {
    id: number;
    left: number;
    top: number;
    size: number;
    duration: number;
    delay: number;
    driftDuration: number;
    color: string;
}

const SNOW_CHARS = ["❄", "❅", "❆", "*", "·"];
const STAR_COLORS = ["#ffd700", "#c084fc", "#f0abfc", "#e879f9", "#ffffff", "#fef08a"];

export default function ThemeParticles() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    const snowflakes = useMemo<Snowflake[]>(() => {
        if (typeof window === "undefined") return [];
        return Array.from({ length: 28 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 14 + 8,
            duration: Math.random() * 9 + 7,
            delay: Math.random() * 12,
            char: SNOW_CHARS[Math.floor(Math.random() * SNOW_CHARS.length)],
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted]);

    const stars = useMemo<Star[]>(() => {
        if (typeof window === "undefined") return [];
        return Array.from({ length: 90 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 3 + 0.8,
            duration: Math.random() * 2.5 + 1,
            delay: Math.random() * 5,
            driftDuration: Math.random() * 6 + 4,
            color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted]);

    if (!mounted || (theme !== "winter" && theme !== "magical")) return null;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {theme === "winter" && snowflakes.map((f) => (
                <span
                    key={f.id}
                    className="snowflake absolute select-none"
                    style={{
                        left: `${f.left}%`,
                        fontSize: `${f.size}px`,
                        animationDuration: `${f.duration}s`,
                        animationDelay: `-${f.delay}s`,
                    }}
                >
                    {f.char}
                </span>
            ))}

            {theme === "magical" && stars.map((s) => (
                <div
                    key={s.id}
                    className="magic-star absolute rounded-full"
                    style={{
                        left: `${s.left}%`,
                        top: `${s.top}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        backgroundColor: s.color,
                        boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
                        animationDuration: `${s.duration}s, ${s.driftDuration}s`,
                        animationDelay: `-${s.delay}s, -${s.delay * 0.5}s`,
                    }}
                />
            ))}
        </div>
    );
}
