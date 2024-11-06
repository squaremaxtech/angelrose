import React from 'react'
import styles from "./page.module.css"
import img from "@/public/ladysmilingatdesk.webp"
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            <section style={{ backgroundColor: "rgb(var(--color3))", textAlign: "center", justifyItems: "center", gap: "var(--gapM)" }}>
                <h1>Get in Touch</h1>

                <p>We love our customers. Feel free to contact us at any time. We are available via email, whatsapp, or phone.  You may also complete the form below and we will get back to you.</p>
            </section>

            <section style={{ backgroundColor: "rgb(var(--color1))", }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--gapM)", justifyContent: "center", width: "min(1100px, 100%)", margin: "0 auto", }}>
                    <div className={styles.textCont} style={{ flex: "1 1 400px", display: "grid", alignContent: "flex-start", gap: "var(--gapM)" }}>
                        <h1>Come Say Hi</h1>

                        <h3 style={{ color: "rgb(var(--shade1))", fontWeight: 500 }}>Our Havendale location:</h3>

                        <div>
                            <p>11 -13 Dunscombe Drive.</p>
                            <p>Havendale, St. Andrew</p>
                            <p>Kingston 19</p>
                            <p>Jamaica, WI</p>
                        </div>

                        <div>
                            <p>Our business hours are : <span>Monday - Friday</span></p>
                            <p><span>9:00am - 4:00pm</span></p>
                        </div>

                        <div>
                            <p>Email: <span>angelroseadultcare@gmail.com</span></p>
                            <p>Telephone: 906-203-4664, 876-294-2582</p>
                        </div>
                    </div>

                    <Image alt='lady smiling' src={img} width={400} height={400} priority={true} style={{ objectFit: "cover", borderRadius: "var(--borderRadiusM)", width: "min(400px, 100%)", aspectRatio: "1/1", alignSelf: "flex-start" }} />
                </div>
            </section>
        </main>
    )
}
