"use client";

import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const glassDarkStyle = css({
    bg: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    zIndex: 50,
    pos: "fixed",
    top: 0,
    w: "full",
    py: 4,
    px: 6
});

const textGradient = css({
    background: "linear-gradient(to right, #818cf8, #c084fc, #f472b6)",
    backgroundClip: "text",
    color: "transparent"
});

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={glassDarkStyle}>
            <div className={flex({ maxW: "6xl", mx: "auto", justify: "space-between", align: "center" })}>
                <Link href="/">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`${textGradient} ${css({ fontSize: "xl", fontWeight: "bold" })}`}
                    >
                        Portfolio
                    </motion.h1>
                </Link>
                <div className={flex({ gap: 6, fontSize: "sm", fontWeight: "medium", color: "zinc.400" })}>
                    {[
                        { name: "Home", path: "/" },
                        { name: "Projects", path: "/projects" },
                        { name: "Experience", path: "/experience" },
                    ].map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={css({
                                color: pathname === link.path ? "white" : "zinc.400",
                                _hover: { color: "white" },
                                transition: "colors"
                            })}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link href="/contact" className={css({ bg: "white/10", _hover: { bg: "white/20" }, color: "white", px: 4, py: 1, rounded: "full", transition: "all", border: "1px solid rgba(255,255,255,0.1)" })}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
