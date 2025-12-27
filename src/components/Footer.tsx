"use client";

import { css } from "../../styled-system/css";

export default function Footer() {
    return (
        <footer className={css({ py: 10, borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center", color: "zinc.500", fontSize: "sm", w: "full", bg: "neutral.950" })}>
            <p>© 2025 Portfolio</p>
        </footer>
    );
}
