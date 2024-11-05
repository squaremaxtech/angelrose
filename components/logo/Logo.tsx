import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.svg"
import Link from 'next/link'

export default function Logo({ size }: { size?: number }) {
    return (
        <Link href={"/"}><Image alt='logo' src={logo} width={size ?? 190} height={size ?? 190} style={{ objectFit: "contain" }} /></Link>
    )
}
