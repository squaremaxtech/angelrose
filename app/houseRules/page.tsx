import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import img from "@/public/village.jpg"
import baby from "@/public/baby.webp"

export default function Page() {
    return (
        <main className={styles.main}>
            <div style={{ position: "relative", minHeight: "500px" }}>
                <Image alt='landing image' src={img} fill={true} style={{ objectFit: "cover", }} />
            </div>

            <section style={{ backgroundColor: "rgba(var(--shade4), .8)", paddingBottom: "var(--paddingEL)", position: "relative" }}>
                <div style={{ width: "min(1000px, 100%)", margin: "0 auto", display: "grid", alignContent: "flex-start", gap: "var(--gapM)" }}>
                    <h2>Administrative Rules</h2>

                    <p>At Angel Rose Adult Care, we are committed to providing a safe, comfortable, and nurturing environment for all our residents. To ensure a harmonious living experience, we have established a set of house rules that promote respect, cooperation, and well-being. We encourage everyone to familiarize themselves with these guidelines, as they are designed to enhance the quality of life, comfort and safety of all members of our community.</p>

                    <div className={styles.stackedLayoutsCont}>
                        <StackedLayout
                            topSlide={(
                                <div className={styles.topSlide}>
                                    <h2>Visiting Hours</h2>

                                    <p><span>Visiting time at our home is  between 10:a.m - 11: am.</span></p>

                                    <p>Visitors are welcome during these hours, on weekdays and also on holidays & weekends.</p>
                                </div>
                            )}
                            bottomSlide={(
                                <div className={styles.bottomSlide}>
                                    <h2>Meals and Snacks</h2>

                                    <p>Meals are provided.  Snacks are at the family&apos;s discretion.</p>
                                </div>
                            )}
                        />

                        <StackedLayout
                            topSlide={(
                                <div className={styles.topSlide}>
                                    <h2>Birthday Celebrations</h2>

                                    <p>Please notify us in advance. ​Four (4) guests limit.</p>
                                </div>
                            )}
                            bottomSlide={(
                                <div className={styles.bottomSlide}>
                                    <h2>Medications</h2>

                                    <p>Must be prescribed by a licensed medical practitioner.</p>
                                </div>
                            )}
                        />

                        <StackedLayout
                            topSlide={(
                                <div className={styles.topSlide}>
                                    <h2>Residency Interruptions</h2>

                                    <p>You may take your elder from our home without canceling their residency.  See conditions below.</p>
                                </div>
                            )}
                            bottomSlide={(
                                <div className={styles.bottomSlide}>
                                    <h2>Equipment Usage</h2>

                                    <p>Free to use in the Home.</p>
                                </div>
                            )}
                        />
                    </div>

                    <div className={styles.notesCont}>

                        <p>Notes:</p>

                        <p>We do encourage your active engagement with your seniors who have found a home with us.<span>Our visiting hours are timed to allow completion of our morning care routine, including bathing and grooming as well as breakfast.</span> We hope you understand that on your visit you may need to wait as these activities are completed for your loved one.</p>

                        <ul>
                            <li>Visitors should always schedule their visits in advance and not show up unexpectedly, as this could be disruptive to your loved one&apos;s daily routines.</li>
                            <li>Visitors should be considerate during their visits and avoid loud conversations that may disturb other residents.</li>
                        </ul>

                        <p>We love birthday celebrations for our residents and they are included in our service.  Note however, that planning birthday celebrations at the Home, involves collaboration with our administrative team for the comfort of all our residents. <span>We recommend notifying the Home in advance of any upcoming birthday celebrations</span> so that the Administrative Office can assist with the planning. These events will be limited to four guests, and family members are welcome. The goal is to ensure that the celebration does not overwhelm your loved one or other residents.</p>

                        <p>Please note that <span>if a family member takes a resident out of the home for any length of time, the monthly payment for their lodging is still required,</span> regardless of how long they are away.</p>

                        <p><span>Three meals per day are provided</span> as part of our standard care package.  Family and loved ones may elect to provide their elders with snacks, which may be replenished periodically.</p>

                        <p><span>All medications for residents must be prescribed by a licensed medical practitioner</span>. If this requirement is not met, Angel Rose Adult Care will not be able to administer the medication. This also extends to health supplements, as we seek to preserve the safety and well-being of our residents.</p>

                        <p>We provide hospital beds and <span>mobility aid devices like wheelchairs, walkers and canes.</span> These are provided free of charge for the comfort of our residents.  If a resident should leave our care, and wish to take their favorite equipment with them, a moderate charge would apply.</p>
                    </div>

                    <Image alt='background image' src={baby} width={250} height={250} style={{ objectFit: "contain", position: "absolute", bottom: 0, left: "60%", translate: "0 -30%" }} />
                </div>
            </section>
        </main>
    )
}

function StackedLayout({ topSlide, bottomSlide }: { topSlide: JSX.Element, bottomSlide: JSX.Element }) {
    return (
        <div className={styles.stackedLayout}>
            {topSlide}

            {bottomSlide}
        </div>
    )
}
