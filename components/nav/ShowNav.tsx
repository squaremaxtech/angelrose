"use client"
import React, { useState } from 'react'
import styles from "./styles.module.css"
import { menuItem } from '@/types'
import Link from 'next/link'
import Logo from '@/components/logo/Logo'
import { usePathname } from "next/navigation"

export function ShowOnDesktop({ menuItems, showingAllItems = true }: { menuItems: menuItem[], showingAllItems?: boolean }) {
    return (
        <nav className={`${styles.nav} ${styles.desktop}`}>
            {showingAllItems && <Logo />}

            <DisplayMenu menuItems={menuItems} />
        </nav>
    )
}

export function ShowOnMobile({ menuItems }: { menuItems: menuItem[] }) {
    const [showingNav, showingNavSet] = useState(false)

    function hideNav() {
        showingNavSet(false)
    }

    return (
        <nav className={`${styles.nav} ${styles.mobile}`}>
            <div className={styles.barButton}
                onClick={() => { showingNavSet(prev => !prev) }}
            >
                {showingNav ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                )
                }
            </div>

            <Logo size={130} />

            {showingNav && <DisplayMenu menuItems={menuItems} func={hideNav} />}
        </nav>
    )
}

function DisplayMenu({ menuItems, func }: { menuItems: menuItem[], func?: () => void }) {
    const pathname = usePathname()

    return (
        <ul className={styles.menu}>
            {menuItems.map((eachMenuItem, eachMenuItemIndex) => {
                return (
                    <li key={eachMenuItemIndex} className={`${styles.menuItem} ${pathname === eachMenuItem.link ? styles.highlighted : ""}`}>
                        <div className={styles.chevronCont}>
                            <Link href={eachMenuItem.link}
                                onClick={() => {
                                    if (func !== undefined) func()
                                }}
                            >{eachMenuItem.name}</Link>

                            {eachMenuItem.subMenu !== undefined && (
                                <svg className={styles.chevron} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                            )}
                        </div>

                        {eachMenuItem.subMenu && (
                            <ul className={styles.subMenu}>
                                {eachMenuItem.subMenu.map((eachSubMenuItem, eachSubMenuItemIndex) => {
                                    return (
                                        <li className={styles.subMenuItem} key={eachSubMenuItemIndex}
                                            onClick={() => {
                                                if (func !== undefined) func()
                                            }}
                                        >
                                            <Link href={eachSubMenuItem.link}>{eachSubMenuItem.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                    </li>
                )
            })}
        </ul>
    )

}
