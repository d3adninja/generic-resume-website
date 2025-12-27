"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { css } from "../../styled-system/css";
import React from 'react';

export default function TiltCard({ children }: { children: React.ReactNode }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={css({
                perspective: "1200px",
                cursor: "none",
                transition: "transform 0.2s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
            })}
        >
            <div
                style={{ transform: "translateZ(0px)" }}
                className={css({
                    transformStyle: "preserve-3d",
                    transition: "transform 0.2s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
                })}
            >
                {children}
            </div>
        </motion.div>
    );
}

export function ParallaxLayer({ children, depth = 20 }: { children: React.ReactNode, depth?: number }) {
    return (
        <div
            style={{ transform: `translateZ(${depth}px)` }}
            className={css({ transformStyle: "preserve-3d" })}
        >
            {children}
        </div>
    );
}
