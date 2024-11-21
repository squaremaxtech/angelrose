import React from 'react'
import Image from "next/image";
import ladiesHug from "@/public/ladiesHug.webp"
import styles from "./styles.module.css"

export default function HomeStarter() {
    return (
        <div className={styles.cont}>
            <Image alt={"home image ladies hugging"} src={ladiesHug} priority={true} fill={true} style={{ objectFit: "cover" }} />

            <div className={styles.textCont}>
                <p className="extraLargeText" style={{ color: "rgb(var(--color1))" }}>Angel Rose Adult Care</p>

                <h2 style={{ color: "rgb(var(--color4))" }}>Caring is not just what we do.  Its who we <span style={{ color: "rgb(var(--color2))" }}>ARE.</span></h2>
            </div>
        </div>
    )
}
