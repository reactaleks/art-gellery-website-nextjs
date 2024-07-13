import { Suspense, useMemo } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";
import "../component-styles/map.modules.css";
import NavButtonComponent from "@/components/NavButtonComponent";
export default function Location() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/MapComponent"), {
        loading: () => <Loading />,
        ssr: false,
      }),
    []
  );
  return (
    <div className="relative grid grid-cols-24 grid-rows-24 max-h-[1252px]">
      <div className="row-span-12 col-span-24 row-start-1">
        <Map />
      </div>
      <div className="absolute top-0">
        <NavButtonComponent destination="/" linkText="back to home" />
      </div>

      <div className="row-span-12 row-start-13 col-span-24 bg-allmost-black  grid grid-cols-24 grid-rows-24">
        <div className="col-span-24 row-span-6 col-start-3 row-start-2 md:row-start-6 md:col-span-6 md:col-start-2">
          <h1 className="text-[50px] md:text-[55px] font-bigShoulders font-extrabold text-white uppercase leading-headingm">
            Our Location
          </h1>
        </div>
        <h2
          className=" text-[32px] font-bigShoulders text-gold font-extrabold 
        col-span-24 row-span-6 col-start-3 row-start-6 md:col-start-12"
        >
          99 King street
        </h2>
        <div className="text-bodys leading-bodys font-outfit text-white col-span-24 row-span-6 col-start-3 row-start-9 md:col-start-12">
          Newport
          <br />
          RI 02840
          <br />
          United States of America
          <br />
        </div>
        <p className="text-bodys leading-bodys font-outfit text-white font-light col-span-20 md:col-span-12 row-span-6 col-start-3 row-start-15  md:col-start-12">
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </div>
    </div>
  );
}
