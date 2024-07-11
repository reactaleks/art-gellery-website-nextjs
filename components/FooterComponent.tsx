'use client'

import LogoComponent from "./LogoComponent"
import SocialComponent from "./SocialComponent"
import { usePathname } from "next/navigation"

interface PropTypes {
    dark: boolean
}


export default function FooterComponent() {
    let pathname = usePathname()
    const checkPath = pathname === "/"
    return (
        <footer className={`${checkPath ? "bg-allmost-black text-white" : "bg-gold text-allmost-black"} h-[375px] flex flex-col justify-around px-8 mt-24`}>
                <LogoComponent dark={checkPath}/>
                <p>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
                <SocialComponent dark={checkPath}/>
        </footer>
    )
}