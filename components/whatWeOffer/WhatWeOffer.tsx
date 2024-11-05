import React from 'react'
import styles from "./styles.module.css"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import gg from "@/public/ladyAndDoctor.webp"
import Image from 'next/image'
import Link from 'next/link'

type offer = {
    image: StaticImport,
    title: string,
    text: string,
    link: string
}

const offers: offer[] = [
    {
        image: gg,
        title: "Residential Care",
        text: "At home care including comfortable rooms, daily hygiene and personal care, authentic Jamaican home-style meals, medical checkups and recreational activities",
        link: "/services"
    },
    {
        image: gg,
        title: "Home  Cooked Meals",
        text: "Authentic Jamaican satisfaction!  Nourishing meals freshly prepared from 'salt of the earth' Jamaican grown good 'food'.",
        link: "/services"
    },
    {
        image: gg,
        title: "Health Care",
        text: "Our resident's health is our priority and we are staffed to ensure nothing is overlooked.  With physio-therapy, regular checkups and activities to sustain their spirits, we work hard to keep our residents healthy and happy.",
        link: "/services"
    },
    {
        image: gg,
        title: "Recreation",
        text: "The adult years can be enjoyable and we take care our our seniors, from birthday parties, to day trips and simple, safe recreational activities, their joy is our satisfaction.",
        link: "/services"
    },
]

export default function WhatWeOffer() {
    return (
        <div className={styles.cont}>
            {offers.map((eachOffer, eachOfferIndex) => {
                return (
                    <div key={eachOfferIndex} style={{ display: "flex", flexWrap: "wrap" }}>
                        <div style={{ flex: "1 1 150px", position: "relative", minHeight: "200px" }}>
                            <Image alt={`${eachOffer.title} image`} src={eachOffer.image} fill={true} style={{ objectFit: "cover" }} sizes="(max-width: 300px) 100vw, 50vw" />
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
