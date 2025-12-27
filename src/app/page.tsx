"use client";

import { css } from "../../styled-system/css";
import { flex, stack, vstack } from "../../styled-system/patterns";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, ExternalLink, Code, Briefcase, User, GraduationCap } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Styles using Panda CSS
const glassStyle = css({
  bg: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  rounded: "2xl",
  color: "white"
});

const glassDarkStyle = css({
  bg: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  zIndex: 50
});

const textGradient = css({
  background: "linear-gradient(to right, #818cf8, #c084fc, #f472b6)",
  backgroundClip: "text",
  color: "transparent"
});

export default function Home() {
  return (
    <main className={css({ minH: "100vh", bg: "neutral.950", color: "white", overflowX: "hidden" })}>
      {/* Animated Background Orbs */}
      <div className={css({ pos: "fixed", inset: 0, overflow: "hidden", zIndex: -10 })}>
        <div className={css({ pos: "absolute", top: "-10%", left: "-10%", w: "40%", h: "40%", bg: "purple.900/20", filter: "blur(120px)", rounded: "full", animation: "pulse 2s infinite" })} />
        <div className={css({ pos: "absolute", bottom: "-10%", right: "-10%", w: "40%", h: "40%", bg: "blue.900/20", filter: "blur(120px)", rounded: "full", animation: "pulse 2s infinite" })} />
      </div>


      <div className={css({ maxW: "6xl", mx: "auto", px: 6, pt: { base: 24, lg: 32 }, pb: 20 })}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={css({ display: "grid", gridTemplateColumns: { base: "1", lg: "12" }, gap: { base: 8, lg: 12 } })}
        >
          {/* Left Column: Hero & Info */}
          <div className={css({ gridColumn: { lg: "span 8" }, spaceY: { base: 8, md: 12 } })}>
            <motion.section variants={item} className={css({ spaceY: 6 })}>
              <h2 className={css({ fontSize: { base: "4xl", md: "5xl", lg: "7xl" }, fontWeight: "bold", lineHeight: "tight" })}>
                Building <span className={textGradient}>digital experiences</span> that matter.
              </h2>
              <p className={css({ fontSize: "lg", color: "zinc.400", maxW: "2xl", lineHeight: "relaxed" })}>
                Full-stack developer specializing in building exceptional digital experiences.
                Currently focused on building accessible, human-centered products.
              </p>
              <div className={flex({ gap: 4, pt: 4 })}>
                <button className={css({ bg: "white", color: "black", px: 8, py: 3, rounded: "xl", fontWeight: "bold", _hover: { transform: "scale(1.05)" }, transition: "transform", display: "flex", alignItems: "center", gap: 2 })}>
                  <Download size={18} /> Resume
                </button>
                <div className={flex({ gap: 2 })}>
                  <a href="#" className={css({ p: 3, bg: "white/5", rounded: "xl", _hover: { bg: "white/10" }, transition: "colors", border: "1px solid rgba(255,255,255,0.05)" })}>
                    <Github size={20} />
                  </a>
                  <a href="#" className={css({ p: 3, bg: "white/5", rounded: "xl", _hover: { bg: "white/10" }, transition: "colors", border: "1px solid rgba(255,255,255,0.05)" })}>
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.section>

            <motion.section variants={item} id="experience" className={css({ spaceY: 8 })}>
              <div className={flex({ align: "center", gap: 3 })}>
                <Briefcase className={css({ color: "purple.400" })} />
                <h3 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Experience</h3>
              </div>
              <div className={css({ spaceY: 6 })}>
                {[1, 2].map((i) => (
                  <div key={i} className={`group ${glassStyle} ${css({ p: 6, _hover: { bg: "white/10" }, transition: "all", cursor: "pointer" })}`}>
                    <div className={flex({ justify: "space-between", align: "start", mb: 2 })}>
                      <h4 className={css({ fontWeight: "bold", fontSize: "xl", _groupHover: { color: "purple.400" }, transition: "colors" })}>Senior Software Engineer</h4>
                      <span className={css({ fontSize: "sm", color: "zinc.500", fontFamily: "mono" })}>2023 — Present</span>
                    </div>
                    <p className={css({ color: "zinc.400", mb: 4 })}>Leading Tech Co</p>
                    <p className={css({ fontSize: "sm", color: "zinc.500", lineHeight: "relaxed" })}>
                      Lead the development of multiple high-traffic web applications using Next.js and Nest.js.
                      Focused on performance optimization and scalable architecture.
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column: Skills & Stats */}
          <div className={css({ gridColumn: { lg: "span 4" }, spaceY: 12 })}>
            <motion.section variants={item} id="skills" className={`${glassStyle} ${css({ p: 8 })}`}>
              <div className={flex({ align: "center", gap: 3, mb: 8 })}>
                <Code className={css({ color: "blue.400" })} />
                <h3 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Skills</h3>
              </div>
              <div className={flex({ flexWrap: "wrap", gap: 2 })}>
                {["Next.js", "React", "TypeScript", "Node.js", "Nest.js", "Panda CSS", "PWA", "PostgreSQL", "Docker", "AWS"].map((skill) => (
                  <span key={skill} className={css({ px: 3, py: 1, bg: "white/5", rounded: "lg", fontSize: "sm", border: "1px solid rgba(255,255,255,0.05)", _hover: { borderColor: "purple.500/50" }, transition: "colors" })}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section variants={item} className={`${glassStyle} ${css({ p: 8 })}`}>
              <div className={flex({ align: "center", gap: 3, mb: 8 })}>
                <GraduationCap className={css({ color: "pink.400" })} />
                <h3 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Education</h3>
              </div>
              <div className={css({ spaceY: 4 })}>
                <div>
                  <h4 className={css({ fontWeight: "bold" })}>B.S. Computer Science</h4>
                  <p className={css({ fontSize: "sm", color: "zinc.500" })}>University, 2019-2023</p>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
