"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { css } from "../../styled-system/css";

export default function MouseFollower() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Hydration fix: Only render on client to avoid server mismatch
    const [isMounted, setIsMounted] = useState(false);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        setIsMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target as HTMLElement;
            // Simple heuristic for interactive elements
            if (target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.onclick ||
                target.closest('a') ||
                target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <motion.div
            style={{ x: springX, y: springY }}
            animate={{
                scale: isClicking ? 0.8 : isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.1)",
                mixBlendMode: isHovering ? "difference" : "normal"
            }}
            className={css({
                position: "fixed",
                top: 0,
                left: 0,
                width: "20px",
                height: "20px",
                borderRadius: "full",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                pointerEvents: "none",
                zIndex: 100000,
                transform: "translate(-50%, -50%)",
            })}
        />
    );
}
