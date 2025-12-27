"use client";

import { useEffect, useState } from 'react';
import Atropos from 'atropos/react';
import 'atropos/css';
import { css } from "../../styled-system/css";

interface AtroposCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function AtroposCard({ children, className }: AtroposCardProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Hydration fix: Render simple layout on server/first render, upgrade to Atropos after mount
    // CRITICAL: Ensure attributes match exactly to avoid hydration mismatch
    if (!isMounted) {
        return (
            <div className={css({ w: "full", h: "full", cursor: "none" })}>
                <div className={`${className || ''}`}>
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className={css({ w: "full", h: "full", cursor: "none" })}>
            <Atropos
                className={`my-atropos ${className || ''}`}
                activeOffset={40}
                shadowScale={1.05}
                highlight={true}
                rotateXMax={15}
                rotateYMax={15}
            >
                {children}
            </Atropos>
        </div>
    );
}
