import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'
import img from "@/public/medal.webp"

export default function ClientCommendments() {
    return (
        <div className={`${styles.cont} minimizePadding`}>
            <Image alt='commendment image' src={img} width={200} height={200} style={{ objectFit: "contain" }} />

            <div style={{ flex: "0 1 auto", padding: "var(--paddingM)", width: "min(550px, 100%)", display: "grid", alignContent: "flex-start", gap: "var(--gapM)" }}>
                <h2 style={{ fontWeight: "400" }}>Our Clients Commend Us...</h2>

                <p>On the ambiance of our home and well kept premises. On our quality of care and on our loving, supportive home environment.</p>

                <div style={{ aspectRatio: "1/1", width: "var(--sizeES)", backgroundColor: "rgb(var(--shade1))", borderRadius: "var(--borderRadiusL)", justifySelf: "center" }}></div>
            </div>
        </div>
    )
}
