import Image from "next/image";
import heroImage from "../public/desktop/image-hero@2x.jpg";
import NavButtonComponent from "./NavButtonComponent";
export default function HeroComponent() {
  return (
    <div className="h-[630px]">
      <div className="relative h-[240px]">
        <Image
          src={heroImage}
          alt="Hero image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="h-[390px] flex flex-col justify-around px-4">
        <h1 className="font-bigShoulders font-extrabold text-headingm leading-headingm uppercase text-allmost-black">
          modern art gallery
        </h1>
        <p className="font-outfit text-bodys leading-bodys text-dark-gray">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>

        <NavButtonComponent destination="/location" linkText="Our location" />
      </div>
    </div>
  );
}
