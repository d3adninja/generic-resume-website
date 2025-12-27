"use client";

import { motion } from "framer-motion";
import { css } from "../../../styled-system/css";
import { vstack } from "../../../styled-system/patterns";
import TiltCard from "@/components/TiltCard";

const jobs = [
    { company: "Innovation Labs", role: "Frontend Lead", year: "2024-Present", desc: "Leading architectural decisions for modern web applications.", color: "cyan" },
    { company: "Scale Solutions", role: "Software Engineer", year: "2022-2024", desc: "Optimizing performance and ensuring scalable infrastructure.", color: "purple" },
    { company: "Digital Wave", role: "Full Stack Developer", year: "2020-2022", desc: "Built end-to-end solutions for high-traffic products.", color: "pink" },
];

export default function Experience() {
    return (
        <div className={css({ minH: "100vh", pt: 32, pb: 32, px: 6, bg: "neutral.950", color: "white", display: "flex", flexDir: "column", alignItems: "center" })}>
            <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={css({ fontSize: "6xl", fontWeight: "black", mb: 20, color: "white", textShadow: "0 0 20px rgba(255,255,255,0.5)" })}
            >
                EXPERIENCE
            </motion.h1>

            <div className={vstack({ gap: 12, maxW: "3xl", w: "full", pos: "relative", mb: 32 })}>
                {/* Center Line - Hidden on small screens */}
                <div className={css({
                    pos: "absolute",
                    left: "50%",
                    top: 0,
                    bottom: 0,
                    w: "2px",
                    bg: "linear-gradient(to bottom, cyan, purple, pink)",
                    transform: "translateX(-50%)",
                    zIndex: 0,
                    display: { base: "none", md: "block" }
                })} />

                {jobs.map((job, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.4 }}
                        className={css({
                            w: "full",
                            display: "flex",
                            justifyContent: { base: "center", md: i % 2 === 0 ? "flex-start" : "flex-end" },
                            zIndex: 10
                        })}
                    >
                        <div className={css({ w: { base: "100%", md: "45%" } })}>
                            <TiltCard>
                                <div className={css({
                                    bg: "black",
                                    border: "1px solid",
                                    borderColor: job.color,
                                    p: { base: 5, md: 6 },
                                    rounded: "2xl",
                                    boxShadow: `0 0 15px ${job.color}`
                                })}>
                                    <span className={css({ color: job.color, fontSize: "xs", fontWeight: "bold", textTransform: "uppercase" })}>{job.year}</span>
                                    <h3 className={css({ fontSize: { base: "xl", md: "2xl" }, fontWeight: "bold", mt: 1 })}>{job.role}</h3>
                                    <h4 className={css({ fontSize: "lg", color: "zinc.400" })}>{job.company}</h4>
                                    <p className={css({ mt: 4, fontSize: "sm", color: "zinc.500" })}>{job.desc}</p>
                                </div>
                            </TiltCard>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
