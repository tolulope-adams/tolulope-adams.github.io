"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AuraCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-[400px] h-[400px] bg-aura-cyan/20 blur-[100px] rounded-full pointer-events-none z-[-1]"
            animate={{
                x: mousePosition.x - 200,
                y: mousePosition.y - 200,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        />
    );
}
