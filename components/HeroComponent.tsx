import Image from "next/image";
import heroImage from "../public/desktop/image-hero@2x.jpg";
import NavButtonComponent from "./NavButtonComponent";
export default function HeroComponent() {
  return (
    <div className="xl:grid xl:grid-cols-24 xl:grid-rows-24 max-h-[800px]">
      <div className="bg-allmost-black col-span-3 col-start-1 row-span-24 2xl:col-span-4 4k:col-span-7"></div>



      <div className="xl:col-span-20 xl:col-start-4 2xl:col-span-16 row-span-24 h-[630px] md:h-[700px] xl:h-[800px] max-w-[1275px] grid grid-cols-24 grid-rows-24 relative">
        <div
          className="bg-allmost-black  hidden 
      xl:block xl:col-span-6 xl:col-start-1 xl:row-span-24
      2xl:col-span-6
      "
        ></div>
        <div
          className="relative col-span-24 row-span-10
      md:col-span-13 md:row-span-24
      xl:col-span-10
      2xl:col-span-10
      4k:col-span-9
      "
        >
          <Image
            src={heroImage}
            alt="Hero image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <h1
          className="font-bigShoulders font-extrabold text-headingm leading-headingm uppercase text-black
         row-start-12 col-span-18 row-span-4 col-start-2
         md:row-span-12 md:col-start-13 md:row-start-8 md:absolute 
         xl:text-headingxl xl:leading-headingxl
         xl:col-start-2 xl:col-span-10 xl:-left-[15px]
        2xl:col-start-4 2xl:-left-[105px]
        4k:-left-[108px]
        xl:bg-gradient-to-r from-white from-55% via-white via-[63%] to-slate-950 to-[63%] xl:bg-clip-text xl:text-transparent
         "
        >
          <div>modern </div>
          <div>art gallery</div>
        </h1>
        <p
          className=" font-outfit text-bodys leading-bodys text-dark-gray
      row-start-17 col-span-21 row-span-4 col-start-2
      md:row-span-12 md:col-span-10 md:col-start-13 md:row-start-13 md:absolute
      xl:col-start-16 xl:col-span-6 xl:row-start-8
      4k:col-start-15
      "
        >
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <div
          className="row-start-22 row-span-3 col-span-17 col-start-2
      md:row-span-12 md:col-start-13 md:row-start-18 md:absolute
      xl:col-start-16 xl:col-span-6 xl:row-start-14
            4k:col-start-15

      "
        >
          <NavButtonComponent destination="/location" linkText="Our location" />
        </div>
      </div>
    </div>
  );
}
