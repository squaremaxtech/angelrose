import React from 'react'
import styles from "./styles.module.css"
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import img1 from "@/public/residential care.jpg"
import img2 from "@/public/vegetables.webp"
import img3 from "@/public/manpressurereading.webp"
import img4 from "@/public/oldgroup.webp"
import Image from 'next/image'
import Link from 'next/link'

type offer = {
    image: StaticImageData,
    title: string,
    text: string,
    link: string
}

const offers: offer[] = [
    {
        image: img1,
        title: "Residential Care",
        text: "At home care including comfortable rooms, daily hygiene and personal care, authentic Jamaican home-style meals, medical checkups and recreational activities",
        link: "/services#residential"
    },
    {
        image: img2,
        title: "Home  Cooked Meals",
        text: "Authentic Jamaican satisfaction!  Nourishing meals freshly prepared from 'salt of the earth' Jamaican grown good 'food'.",
        link: "/services#meals"
    },
    {
        image: img3,
        title: "Health Care",
        text: "Our residents' health is our priority and we are staffed to ensure nothing is overlooked.  With physio-therapy, regular checkups and activities to sustain their spirits, we work hard to keep our residents healthy and happy.",
        link: "/services#health"
    },
    {
        image: img4,
        title: "Recreation",
        text: "The adult years can be enjoyable and we assist with that by taking care of our seniors, from birthday parties, to day trips and simple, safe recreational activities. Their joy is our satisfaction.",
        link: "/services#recreation"
    },
]

export default function WhatWeOffer() {
    return (
        <div className={styles.cont}>
            {offers.map((eachOffer, eachOfferIndex) => {
                return (
                    <div key={eachOfferIndex} style={{ display: "flex", flexWrap: "wrap" }}>
                        <div style={{ flex: "1 1 150px", position: "relative", minHeight: "250px" }}>
                            <Image alt={`${eachOffer.title} image`} src={eachOffer.image} fill={true} style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 300px) 100vw, 50vw" />
                        </div>

                        <div className={styles.textCont}>
                            <h2>{eachOffer.title}</h2>

                            <p style={{ fontSize: "var(--fontSizeS)" }}>{eachOffer.text}</p>

                            <Link href={eachOffer.link}><button className='mainButton' style={{ "--changeColor": "rgba(var(--shade4), 0.8)" } as React.CSSProperties}>learn more</button></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
