import Image from 'next/image'
import React from 'react'
import img1 from "@/public/outside.jpg"
import img2 from "@/public/Rosemarie.jpg"
import styles from "./page.module.css"
import Gallery from '@/components/gallery/Gallery'

export default function Page() {
    return (
        <main>
            <section className='collapsePadding'>
                <div style={{ display: 'flex', flexWrap: "wrap", flexDirection: "row-reverse" }}>
                    <div className={styles.textCont}>
                        <h2 style={{ fontSize: "var(--fontSizeML)", whiteSpace: "nowrap" }}>What&apos;s In A Name...</h2>

                        <ul>
                            <li> <p><span>A</span>n angel who soars through the facility</p></li>
                            <li> <p><span>N</span>umerous times throughout the day</p></li>
                            <li> <p><span>G</span>iving solace and strength to</p></li>
                            <li> <p><span>E</span>ach treasured senior resident, allowing</p></li>
                            <li> <p><span>L</span>imitless time for them to enjoy their</p></li>
                            <li> <p><span>S</span>enior years to their satisfaction.</p></li>
                        </ul>

                        <ul>
                            <li> <p><span>R</span>oses bloom, their scent fills each morning</p></li>
                            <li> <p><span>O</span>ur residents open their eyes to the</p></li>
                            <li> <p><span>S</span>weet smell of coffee or tea</p></li>
                            <li> <p><span>E</span>njoying their senior years.</p></li>
                        </ul>

                        <p><span>Angel Rose Adult Care, </span>meet you there.</p>
                    </div>

                    <div style={{ flex: "1 1 400px", position: "relative", minHeight: "400px" }}>
                        <Image alt='lady smiling img' src={img1} priority={true} fill={true} style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: "rgba(var(--shade4), .8)" }}>
                <div style={{ display: "grid", alignContent: "flex-start", width: "fit-content", justifySelf: "center" }}>
                    <h1>Our Story</h1>

                    <div style={{ display: "grid", alignContent: "flex-start", gap: "var(--gapM)" }}>
                        <div style={{ display: "flex", gap: "var(--gapM)", flexWrap: "wrap", flexDirection: "row-reverse" }}>
                            <Image alt='Rosemarie Thomas' src={img2} height={400} width={400} style={{ objectFit: "contain" }} />

                            <div style={{ flex: "1 1 300px", display: "grid", alignContent: "flex-start", gap: "var(--gapM)" }}>
                                <p>Angel Rose Adult Care is the brainchild of Founder and Director, Rosemarie Thomas.  With over 15 years of adult care experience, Rosemarie has dedicated herself to providing compassionate care to seniors in Jamaica and the USA. Her deep love for seniors is met with equal affection, creating an environment where seniors truly thrive.</p>
                                <p>Recognizing the increasing need for safe and nurturing homes for the elderly in Jamaica, Rosemarie turned her vision for elder care into a reality, launching the first Angel Rose Adult Care home in February 2023.</p>
                                <p>Angel Rose Adult Care may be a relatively new establishment, but its founders have made inroads in the field of nursing and geriatric care. With a strong background in Nurse Aide and Home Health Aide roles, combined with a corporate business background, they are well-equipped to provide exceptional care.  Additionally, their expertise in Private Home Care further enhances the quality of services offered.</p>
                            </div>
                        </div>

                        <p>As the Angel Rose vision continues to evolve, facilities are being expanded in 2024 and plans for new facilities are already underway.  It is Rosemarie&apos;s dream to ensure that more seniors can experience the exceptional care they deserve.</p>

                        <p>At Angel Rose Adult Care we work hard to build a brighter future for our beloved elders.</p>
                    </div>
                </div>
            </section>

            <section style={{ padding: 0 }}>
                <div style={{ display: 'flex', flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 200px", backgroundColor: "rgb(var(--color3))", padding: "var(--paddingML)" }}>
                        <h1>Our Team</h1>
                    </div>

                    <div className='minimizePadding' style={{ flex: "2 1 400px", backgroundColor: "rgb(var(--color1))", padding: "var(--paddingML)", display: "grid", alignContent: "flex-start", gap: "var(--gapM)", perspective: "var(--perspectiveR)" }}>
                        <p className={styles.specialText}>It takes a <span>Village</span> to make a <span>Home</span></p>

                        <p>Our extensive experience and business management skills, are supported by our team of caregivers, administrators, and medical practitioners, all working together to ensure the highest level of care for our clients.</p>

                        <div>
                            <p>Our highly skilled care team includes a Manager & Administrator as well as: </p>

                            <ul style={{ display: "grid", alignContent: "flex-start", paddingLeft: "var(--paddingR)" }}>
                                {["Nurses and nurse aides", "Physiotherapist", "Doctors (on call)", "Dietician", "Maintenance staff", "Security staff"].map((eachTeamMember, eachTeamMemberIndex) => {
                                    return (
                                        <li key={eachTeamMemberIndex}>
                                            <p style={{ display: "flex", alignItems: "center", gap: "var(--gapS)" }}><span style={{ scale: 1.2 }}>•</span> {eachTeamMember}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ paddingBlock: "var(--paddingM)" }}>
                <h1>Image Gallery</h1>

                <Gallery />
            </section>
        </main>
    )
}
