import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'
import img from "@/public/medal.webp"

export default function ClientCommendments() {
    return (
        <div className={`${styles.cont} minimizePadding`}>
            <Image alt='commendment image' src={img} width={200} height={200} style={{ objectFit: "contain" }} />

            <div style={{ flex: "0 1 auto", padding: "var(--paddingM)", width: "min(550px, 100%)", display: "grid", alignContent: "flex-start", gap: "var(--gapM)" }}>
                <h2 style={{ fontWeight: "400" }}>Our Clients Commend Us On...</h2>

                <ul className={styles.commendList}>
                    <li>The ambiance of our home and well-kept premises.</li>
                    <li>Our quality of care and</li>
                    <li>Our loving, supportive home environment.</li>
                </ul>

                <div style={{ aspectRatio: "1/1", width: "var(--sizeES)", backgroundColor: "rgb(var(--shade1))", borderRadius: "var(--borderRadiusL)", justifySelf: "center" }}></div>
            </div>
        </div>
    )
}
