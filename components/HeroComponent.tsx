import Image from "next/image"
import heroImage from "../public/desktop/image-hero@2x.jpg"
import NavButtonComponent from "./NavButtonComponent"
export default function HeroComponent() {
    return (
        <>
         <Image src={heroImage} alt="Hero image" width={1080} height={1600}/>
        <h1>modern art gallery</h1>
        <p>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
        
        <NavButtonComponent destination="/location" linkText="our location"/>
        </>

    )
}