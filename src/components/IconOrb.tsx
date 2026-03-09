"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import {
    Code2,
    Github,
    Database,
    Smartphone,
    Terminal,
    Cpu,
    Globe,
    Layers,
    Cloud,
    Chrome,
    Zap,
    Layout,
    Box,
    FileCode2
} from "lucide-react";

interface IconData {
    Icon: React.ElementType;
    label: string;
}

const icons: IconData[] = [
    { Icon: Code2, label: "VS Code" },
    { Icon: Github, label: "GitHub" },
    { Icon: Database, label: "PostgreSQL" },
    { Icon: Smartphone, label: "Android" },
    { Icon: Terminal, label: "Node.js" },
    { Icon: Cpu, label: "Spring Boot" },
    { Icon: Globe, label: "Web" },
    { Icon: Layers, label: "Backend Architect" },
    { Icon: Cloud, label: "Next.js" },
    { Icon: Chrome, label: "Browser" },
    { Icon: Zap, label: "Fast API" },
    { Icon: Layout, label: "Frontend" },
    { Icon: Box, label: "Docker" },
    { Icon: FileCode2, label: "TypeScript" }
];

export default function IconOrb() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="relative w-full h-full min-h-[400px]" />;

    return <ClientOrb />;
}

function ClientOrb() {
    const n = icons.length;

    // Calculate Fibonacci Sphere positions
    const items = useMemo(() => {
        const phi = Math.PI * (3.0 - Math.sqrt(5.0)); // Golden ratio angle
        return icons.map((icon, i) => {
            const y = 1 - (i / (n - 1)) * 2; // y goes from 1 to -1
            const radius = Math.sqrt(1 - y * y); // radius at y
            const theta = phi * i; // golden angle increment

            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            return { ...icon, x, y, z };
        });
    }, [n]);

    const rotationX = useMotionValue(0);
    const rotationY = useMotionValue(0);

    // Continuous rotation
    useAnimationFrame((time) => {
        rotationX.set(time * 0.0002);
        rotationY.set(time * 0.0003);
    });

    return (
        <div className="relative w-full h-full perspective-1000 flex items-center justify-center">
            {/* Pulsing Core */}
            <motion.div
                className="absolute w-24 h-24 bg-gradient-to-tr from-aura-cyan/40 to-aura-purple/40 rounded-full blur-2xl z-0"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                {items.map((item, index) => (
                    <IconItem
                        key={index}
                        item={item}
                        rotationX={rotationX}
                        rotationY={rotationY}
                        orbSize={350} // Approximate radius for the icons
                    />
                ))}
            </div>
        </div>
    );
}

function IconItem({ item, rotationX, rotationY, orbSize }: {
    item: any,
    rotationX: any,
    rotationY: any,
    orbSize: number
}) {
    // Transform coordinates based on orb rotation
    const x = useTransform([rotationX, rotationY], ([rx, ry]: any[]) => {
        const cosY = Math.cos(ry);
        const sinY = Math.sin(ry);
        // Rotate Y
        const x1 = item.x * cosY + item.z * sinY;
        return x1 * (orbSize / 2);
    });

    const y = useTransform([rotationX, rotationY], ([rx, ry]: any[]) => {
        const cosX = Math.cos(rx);
        const sinX = Math.sin(rx);
        const cosY = Math.cos(ry);
        const sinY = Math.sin(ry);

        // Rotate Y
        const z1 = -item.x * sinY + item.z * cosY;

        // Rotate X
        const y2 = item.y * cosX - z1 * sinX;

        return y2 * (orbSize / 2);
    });

    const z = useTransform([rotationX, rotationY], ([rx, ry]: any[]) => {
        const cosX = Math.cos(rx);
        const sinX = Math.sin(rx);
        const cosY = Math.cos(ry);
        const sinY = Math.sin(ry);

        // Rotate Y
        const z1 = -item.x * sinY + item.z * cosY;

        // Rotate X
        const z2 = item.y * sinX + z1 * cosX;

        return z2;
    });

    // Scale and opacity based on Z position (depth)
    const scale = useTransform(z, [-1, 1], [0.6, 1.2]);
    const opacity = useTransform(z, [-1, 1], [0.2, 1]);
    const blur = useTransform(z, [-1, 0, 1], ["blur(3px)", "blur(0px)", "blur(0px)"]);

    return (
        <motion.div
            style={{ x, y, scale, opacity, filter: blur }}
            className="absolute left-1/2 top-1/2 -ml-6 -mt-6"
            whileHover={{ scale: 1.5, zIndex: 50 }}
        >
            <div className="p-3 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/10 shadow-lg group">
                <item.Icon className="w-6 h-6 text-aura-cyan group-hover:text-white transition-colors" />
            </div>
        </motion.div>
    );
}
