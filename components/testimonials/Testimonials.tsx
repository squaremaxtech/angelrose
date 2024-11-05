import React from 'react'
import styles from "./styles.module.css"

type testimonial = {
    name: string,
    text: string
}

const testimonials: testimonial[] = [
    {
        name: "Sandra, Michigan USA",
        text: "The care Rosemarie gave my mother was exceptional!"
    },
    {
        name: "Matthew, USA",
        text: "Rosemarie brought a new meaning to Nurse Aide."
    },
    {
        name: "USA",
        text: "She cared for five residents, infusing love and affection that was unquestionable.  How they ADORED her."
    },
]
export default function Testimonials() {
    return (
        <div className={styles.cont}>
            {testimonials.map((eachTestimonial, eachTestimonialIndex) => {
                return (
                    <div key={eachTestimonialIndex} style={{ flex: "0 1 auto", width: "min(300px, 100vw)", display: "grid", alignContent: "flex-start", justifyItems: "center", textAlign: "center", gap: "var(--gapR)" }}>
                        <svg style={{ width: "var(--sizeEL)", height: "var(--sizeEL)", marginBottom: "var(--marginM)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z" /></svg>

                        <h3>{eachTestimonial.name}</h3>

                        <p>{eachTestimonial.text}</p>
                    </div>
                )
            })}
        </div>
    )
}
