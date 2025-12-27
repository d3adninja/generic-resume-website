"use client";

import { motion } from "framer-motion";
import { css } from "../../../styled-system/css";
import { flex, grid } from "../../../styled-system/patterns";
import AtroposCard from "@/components/AtroposCard";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    { id: 1, title: "Next Gen Marketplace", tags: ["Next.js", "Web3"], color: "#22d3ee" },
    { id: 2, title: "Modern Blog Platform", tags: ["Astro", "Three.js"], color: "#d8b4fe" },
    { id: 3, title: "Interactive Portfolio", tags: ["Panda CSS", "Framer"], color: "#f472b6" },
    { id: 4, title: "AI Integration", tags: ["OpenAI", "Nest.js"], color: "#4ade80" },
    { id: 5, title: "Data Visualization", tags: ["Python", "D3.js"], color: "#facc15" },
    { id: 6, title: "Analytics Tracker", tags: ["Solidity", "React"], color: "#60a5fa" },
];

export default function Projects() {
    return (
        <div className={css({ minH: "100vh", pt: 32, pb: 20, px: 6, bg: "neutral.950", color: "white" })}>
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={css({ fontSize: "6xl", fontWeight: "black", textAlign: "center", mb: 20, color: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(to right, cyan, purple, pink)" })}
            >
                PROJECTS
            </motion.h1>

            <div className={grid({ columns: { base: 1, md: 2, lg: 3 }, gap: 8, maxW: "7xl", mx: "auto" })}>
                {projects.map((p, i) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                    >
                        <AtroposCard className={css({ rounded: "3xl", overflow: "hidden" })}>
                            <div className={css({
                                bg: "rgba(20,20,20,0.9)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                p: 8,
                                rounded: "3xl",
                                h: "300px",
                                display: "flex",
                                flexDir: "column",
                                justifyContent: "space-between",
                                height: "100%",
                            })}>
                                <div>
                                    <h3 data-atropos-offset="5" className={css({ fontSize: "3xl", fontWeight: "bold", mb: 4 })} style={{ color: p.color }}>{p.title}</h3>
                                    <div data-atropos-offset="2" className={flex({ gap: 2, flexWrap: "wrap" })}>
                                        {p.tags.map(t => (
                                            <span key={t} className={css({ fontSize: "xs", px: 2, py: 1, rounded: "full", border: "1px solid white", opacity: 0.6 })}>{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <div data-atropos-offset="8" className={flex({ justify: "flex-end", gap: 3 })}>
                                    <button className={css({ p: 2, rounded: "full", bg: "white/10", _hover: { color: "black" } })} style={{ color: "white" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = p.color} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
                                        <Github size={20} />
                                    </button>
                                    <button className={css({ p: 2, rounded: "full", bg: "white/10", _hover: { color: "black" } })} style={{ color: "white" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = p.color} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
                                        <ExternalLink size={20} />
                                    </button>
                                </div>
                            </div>
                        </AtroposCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
