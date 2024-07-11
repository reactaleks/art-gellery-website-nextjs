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
    <div className="relative">
      <Map />
      <div className="absolute top-0">
        <NavButtonComponent destination="/" linkText="back to home" />
      </div>

      <div className="h-[493px] bg-allmost-black flex flex-col justify-around px-4 md:flex-row ">
        <div className="h-[45px]">
          <h1 className="text-[50px] font-bigShoulders font-extrabold text-white">Our Location</h1>
        </div>
        <div className="flex flex-col justify-between w-[343px] h-[296px]">
          <h2 className="text-[32px] font-bigShoulders text-gold font-extrabold">99 King street</h2>
          <div className="text-bodys leading-bodys font-outfit text-white">
            Newport<br/>
            RI 02840<br/>
            United States of America<br/>
          </div>
          <p className="text-bodys leading-bodys font-outfit text-white font-light">
            Our newly opened gallery is located near the Edward King House on 99 King Street, 
            the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
    </div>
  );
}
