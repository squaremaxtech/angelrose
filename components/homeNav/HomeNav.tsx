import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import React from 'react'

import img1 from "@/public/womanAndOldLady.webp"
import img2 from "@/public/ladyAndDoctor.webp"
import img3 from "@/public/smilingLady.webp"
import img4 from "@/public/smilingContactLady.webp"

import Image from 'next/image'
import Link from 'next/link'
import styles from "./styles.module.css"

type item = {
    img: StaticImport,
    text: string,
    link: string,
}

const items: item[] = [
    {
        img: img1,
        text: "about us",
        link: "/about",
    },
    {
        img: img2,
        text: "our services",
        link: "/services",
    },
    {
        img: img3,
        text: "house rules",
        link: "/houseRules",
    },
    {
        img: img4,
        text: "customer care",
        link: "/contact",
    },
]

export default function HomeNav() {
    return (
        <ul className={styles.cont}>
            {items.map((eachItem, eachItemIndex) => {
                return (
                    <Link key={eachItemIndex} className={styles.contItem} href={eachItem.link}>
                        <div style={{ width: "85%", aspectRatio: "1/1", position: "relative", borderRadius: "var(--borderRadiusM)", overflow: "clip" }}>
                            <Image alt={`${eachItem.text} image`} src={eachItem.img} fill={true} sizes='(max-width: 500px) 50vw, 33vw' style={{ objectFit: "cover" }} />
                        </div>

                        <h2>{eachItem.text}</h2>
                    </Link>
                )
            })}
        </ul>
    )
}
