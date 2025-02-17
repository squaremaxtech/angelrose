"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import styles from "./gallery.module.css"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import img1 from "@/public/gallery/ladywithnoodles.webp"
import img2 from "@/public/gallery/womaninstretcher.webp"
import img3 from "@/public/gallery/meal.webp"
import img4 from "@/public/gallery/womaneatingmeal.webp"
import img5 from "@/public/gallery/twowomeneating.webp"
import img6 from "@/public/gallery/team.webp"
import img7 from "@/public/gallery/furniture.jpg"
import img8 from "@/public/gallery/home 2.jpg"
import img9 from "@/public/gallery/equipment 1.jpg"
import img10 from "@/public/gallery/equipment 2.jpg"

type galleryItems = { name: string; image: StaticImport; }
const gallery: galleryItems[] = [
    {
        name: "",
        image: img1
    },
    {
        name: "",
        image: img2
    },
    {
        name: "",
        image: img3
    },
    {
        name: "",
        image: img4
    },
    {
        name: "",
        image: img5
    },
    {
        name: "",
        image: img6
    },
    {
        name: "",
        image: img7
    },
    {
        name: "",
        image: img8
    },
    {
        name: "",
        image: img9
    },
    {
        name: "",
        image: img10
    },
]
export default function Gallery() {
    const [activeImageIndex, activeImageIndexSet] = useState(0)
    const [viewingFullScreen, viewingFullScreenSet] = useState(false)
    const [showingSettings, showingSettingsSet] = useState(false)
    const debounce = useRef<NodeJS.Timeout>()

    //stop scrolling on select
    useEffect(() => {
        if (viewingFullScreen) {
            const body = document.querySelector("body") as HTMLBodyElement
            body.style.overflow = "hidden"
        } else {
            const body = document.querySelector("body") as HTMLBodyElement
            body.style.overflow = "auto"
        }
    }, [viewingFullScreen])

    function handleSeek(option: "next" | "prev") {
        if (option === "next") {
            activeImageIndexSet(prevIndex => {
                if (prevIndex === undefined) return prevIndex

                let newIndex = prevIndex + 1

                if (newIndex > gallery.length - 1) {
                    newIndex = 0
                }

                return newIndex
            })
        } else {
            activeImageIndexSet(prevIndex => {
                if (prevIndex === undefined) return prevIndex

                let newIndex = prevIndex - 1

                if (newIndex < 0) {
                    newIndex = gallery.length - 1
                }

                return newIndex
            })
        }
    }

    return (
        <div className={styles.galleryCont}>
            <div style={{ display: viewingFullScreen ? "grid" : "none", position: "fixed", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgb(var(--color1))", zIndex: 100, gridTemplateRows: "auto 1fr auto" }}
                onClick={() => { viewingFullScreenSet(false) }}
                onMouseMove={() => {
                    showingSettingsSet(true)

                    if (debounce.current) clearTimeout(debounce.current)

                    debounce.current = setTimeout(() => {
                        showingSettingsSet(false)
                    }, 1000);
                }}
            >
                <div style={{ opacity: showingSettings ? 1 : 0, display: "flex", alignItems: "center", padding: "1rem" }}>
                    <p style={{ fontWeight: "bold" }}>{activeImageIndex + 1} / {gallery.length}</p>

                    <div style={{ marginLeft: "auto" }} onClick={() => { viewingFullScreenSet(false) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </div>
                </div>

                <div style={{ position: "relative", overflow: "hidden", width: "min(800px, 100%)", justifySelf: "center" }} onClick={(e) => { e.stopPropagation() }}>
                    {gallery.map((eachItem, eachItemIndex) => {
                        return (
                            <Image key={eachItemIndex} alt={`${eachItem.name}'s image`} src={eachItem.image} width={1000} height={1000} style={{ objectFit: "contain", height: "100%", width: "100%", display: activeImageIndex !== eachItemIndex ? "none" : "" }} />
                        )
                    })}

                    <div style={{ opacity: showingSettings ? 1 : 0 }} className={`${styles.seekButton} ${styles.prevButton}`} onClick={(e) => { e.stopPropagation(); handleSeek("prev"); if (debounce.current) clearTimeout(debounce.current) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                    </div>

                    <div style={{ opacity: showingSettings ? 1 : 0 }} className={`${styles.seekButton} ${styles.nextButton}`} onClick={(e) => { e.stopPropagation(); handleSeek("next"); if (debounce.current) clearTimeout(debounce.current) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </div>
                </div>

                <p style={{ justifySelf: "center", textTransform: "capitalize", padding: "1rem" }}>{gallery[activeImageIndex].name}</p>
            </div>

            <div style={{ display: "grid", alignContent: "flex-start", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "var(--gapR)" }}>
                {gallery.map((eachItem, eachItemIndex) => {
                    return (
                        <div className={styles.itemCont} key={eachItemIndex} onClick={() => { activeImageIndexSet(eachItemIndex); viewingFullScreenSet(true) }}>
                            <Image alt={`${eachItem.name}'s image`} src={eachItem.image} fill={true} style={{ objectFit: "cover" }} sizes='(max-width: 600px) 100vw, 50vw' />

                            <div className={styles.backdrop} style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgb(var(--shade1))" }}></div>

                            <div style={{ position: "absolute", top: "50%", left: "50%", cursor: "pointer", translate: "-50% -50%" }} className={styles.fullscreenButton}>
                                <svg style={{ fill: "rgb(var(--shade2))" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z" /></svg>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
