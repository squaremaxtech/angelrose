import React from 'react'
import styles from "./styles.module.css"
import { ShowOnDesktop } from '../nav/ShowNav'
import { menuItems } from '@/lib/navItems'
import ConsultForm from '@/components/consultForm/ConsultForm'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerFlexCont}>
                <div style={{ width: "min(500px, 100%)", display: "grid", alignContent: "flex-start", gap: "var(--gapM)" }}>
                    <h1 style={{ lineHeight: "4rem", color: "rgb(var(--shade2))" }}>Request a FREE Consultation</h1>

                    <p>We are dedicated to addressing your elder care needs, and our team is ready to assist you with every detail.</p>

                    <ConsultForm />
                </div>

                <ShowOnDesktop menuItems={menuItems} calledFromFooter={true} />
            </div>

            <div className={styles.rightsCont}>
                <p>© 2024 by SquareMax Technologies</p>
            </div>
        </footer>
    )
}
