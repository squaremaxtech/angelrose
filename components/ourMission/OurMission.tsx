import React from 'react'
import Image from "next/image";
import Link from "next/link";
import ladyInChair from "@/public/ladyInChair.webp"
import styles from "./styles.module.css"

export default function OurMission() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className={styles.textCont}>
                <h1>Our Mission</h1>

                <p className={styles.quotesText}>“We offer a helpful hand and supportive guidance for senior adults who need exceptional care, as they complete their journey through retirement”.</p>

                <div className={styles.textSmallCont}>
                    <p>At Angel Rose Adult Care we aim to provide excellent care to all our residents.  We treat each resident like our own family, with the care & respect that is due to their position as elders in our community.  Our seniors deserve nothing less.</p>

                    <Link href={"/about"}><button className="mainButton">learn more</button></Link>
                </div>
            </div>

            <div style={{ flex: "1 1 300px", position: "relative", minHeight: "400px" }}>
                <Image alt="lady in chair" src={ladyInChair} fill={true} sizes="50vw" style={{ objectFit: "cover" }} />
            </div>
        </div>
    )
}
