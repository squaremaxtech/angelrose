import React from 'react'
import styles from "./page.module.css"
import img from "@/public/ladysmilingatdesk.webp"
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    const generalInfo = {
        number: "906-203-4664",
        email: "angelroseadultcare@gmail.com"
    }
    return (
        <main>
            <section style={{ backgroundColor: "rgb(var(--color3))", textAlign: "center", justifyItems: "center", gap: "var(--gapM)" }}>
                <h1>Get in Touch</h1>

                <p>We love our customers. Feel free to contact us at any time. We are available via email, WhatsApp, or phone.  You may also complete the form below and we will get back to you.</p>

                <ul style={{ display: "flex", gap: "var(--gapS)" }}>
                    {[
                        {
                            link: `mailto:${generalInfo.email}`,
                            icon: <svg style={{ width: "var(--sizeM)", height: "var(--sizeM)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                        },
                        {
                            link: `https://wa.me/${generalInfo.number.replace(/\D/g, "")}`,
                            icon: <svg style={{ width: "var(--sizeM)", height: "var(--sizeM)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                        }
                    ].map((eachSocial, eachSocialIndex) => {
                        return (
                            <Link href={eachSocial.link} key={eachSocialIndex} style={{}}>
                                {eachSocial.icon}
                            </Link>
                        )
                    })}
                </ul>
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
                            <p>Our business hours are : Monday - Friday</p>
                            <p>9:00am - 4:00pm</p>
                        </div>

                        <div>
                            <p>Email: {generalInfo.email}</p>
                            <p>Telephone: {generalInfo.number}, 876-294-2582</p>
                        </div>
                    </div>

                    <Image alt='lady smiling' src={img} width={400} height={400} priority={true} style={{ objectFit: "cover", borderRadius: "var(--borderRadiusM)", width: "min(400px, 100%)", aspectRatio: "1/1", alignSelf: "flex-start" }} />
                </div>
            </section>
        </main>
    )
}
