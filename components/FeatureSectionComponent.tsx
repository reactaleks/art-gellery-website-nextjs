import Image from "next/image"



export default function FeatureSectionComponent() {
    return (
        <>
            <Image src={"/desktop/image-grid-1@2x.jpg"} width={1270} height={800} alt="Grid image one"/>
            <h2>Your day at the gallery</h2>
            <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
            <Image src={"/desktop/image-grid-2@2x.jpg"} width={1270} height={1440} alt="Grid image two"/>
            <Image src={"/desktop/image-grid-3@2x.jpg"} width={890} height={626} alt="Grid image three"/>
            <h2>Come & Be Inspired</h2>
            <p>We’re excited to welcome you to our gallery and see how our collections influence you.</p>

        </>
    )
}