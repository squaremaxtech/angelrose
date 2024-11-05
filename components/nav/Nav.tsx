"use client"
import React from 'react'
import { ShowOnDesktop, ShowOnMobile } from './ShowNav'
import { menuItems } from '@/lib/navItems'

export default function Nav() {

    return (
        <>
            <ShowOnDesktop menuItems={menuItems} />

            <ShowOnMobile menuItems={menuItems} />
        </>
    )
}