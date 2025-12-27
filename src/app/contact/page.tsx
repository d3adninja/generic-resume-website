"use client";

import { motion } from "framer-motion";
import { css } from "../../../styled-system/css";
import { vstack } from "../../../styled-system/patterns";

export default function Contact() {
    return (
        <div className={css({ minH: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bg: "neutral.950", color: "white", overflow: "hidden" })}>

            <div className={css({ pos: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", opacity: 0.05, fontSize: "20vw", fontWeight: "black", overflow: "hidden", whiteSpace: "nowrap" })}>
                CONTACT
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={css({ w: "full", maxW: "md", bg: "white/5", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", p: 8, rounded: "3xl", zIndex: 10 })}
            >
                <h1 className={css({ fontSize: "4xl", fontWeight: "bold", mb: 8, textAlign: "center" })}>Contact</h1>

                <form className={vstack({ gap: 6 })}>
                    <div className={vstack({ gap: 2, w: "full", alignItems: "start" })}>
                        <label className={css({ fontSize: "sm", fontWeight: "bold", color: "zinc.400" })}>Name</label>
                        <input type="text" placeholder="Your Name" className={css({ w: "full", bg: "black/50", border: "1px solid rgba(255,255,255,0.2)", p: 3, rounded: "xl", color: "white", _focus: { borderColor: "cyan", outline: "none", boxShadow: "0 0 10px cyan" } })} />
                    </div>

                    <div className={vstack({ gap: 2, w: "full", alignItems: "start" })}>
                        <label className={css({ fontSize: "sm", fontWeight: "bold", color: "zinc.400" })}>Email</label>
                        <input type="email" placeholder="your@email.com" className={css({ w: "full", bg: "black/50", border: "1px solid rgba(255,255,255,0.2)", p: 3, rounded: "xl", color: "white", _focus: { borderColor: "purple", outline: "none", boxShadow: "0 0 10px purple" } })} />
                    </div>

                    <div className={vstack({ gap: 2, w: "full", alignItems: "start" })}>
                        <label className={css({ fontSize: "sm", fontWeight: "bold", color: "zinc.400" })}>Message</label>
                        <textarea rows={4} placeholder="Your Message" className={css({ w: "full", bg: "black/50", border: "1px solid rgba(255,255,255,0.2)", p: 3, rounded: "xl", color: "white", _focus: { borderColor: "pink", outline: "none", boxShadow: "0 0 10px pink" } })} />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={css({ w: "full", py: 4, bg: "linear-gradient(to right, cyan, purple)", rounded: "xl", fontWeight: "bold", fontSize: "lg", color: "white", cursor: "pointer" })}
                    >
                        SEND
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
