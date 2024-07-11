import Link from "next/link"

interface PropTypes {
    destination: string;
    linkText:string;
}

export default function NavButtonComponent({destination, linkText}:PropTypes) {
    return (
        <Link href={destination}>To Location</Link>
    )
}