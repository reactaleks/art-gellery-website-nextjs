import Image from "next/image";
import heroImage from "../public/desktop/image-hero@2x.jpg";
import NavButtonComponent from "./NavButtonComponent";
export default function HeroComponent() {
  return (
    <div className="h-[630px] md:h-[700px] xl:h-[800px] grid grid-cols-12 grid-rows-12 ">
      <div className=" bg-allmost-black hidden xl:block xl:col-span-4 xl:col-start-1 xl:row-span-12"></div>
      <div className="relative col-span-12 row-span-5 md:col-span-6 md:row-span-12 md:col-start-1 xl:col-span-4 xl:col-start-5">
        <Image
          src={heroImage}
          alt="Hero image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="row-start-7 gap-4 grid grid-rows-12 px-4 col-span-12 row-span-6 md:col-span-6 md:row-span-5 md:col-start-7 md:row-start-4 xl:col-span-4 xl:col-start-9 ">
        <h1 className="font-bigShoulders font-extrabold text-headingm leading-headingm uppercase text-black
         xl:text-headingxl xl:leading-headingxl">
          <div>modern art</div>
          <div>gallery</div>
           
        </h1>
        <p className="row-start-5 font-outfit text-bodys leading-bodys text-dark-gray">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
        </p>
        <div className="row-start-10">
          <NavButtonComponent destination="/location" linkText="Our location" />

        </div>
      </div>
    </div>
  );
}
