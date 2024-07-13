"use client";

import LogoComponent from "./LogoComponent";
import SocialComponent from "./SocialComponent";
import { usePathname } from "next/navigation";

interface PropTypes {
  dark: boolean;
}

export default function FooterComponent() {
  let pathname = usePathname();
  const checkPath = pathname === "/";
  return (
    <footer
      className={`${
        checkPath ? "bg-allmost-black text-white" : "bg-gold text-allmost-black"
      } h-[375px]  grid grid-rows-12 grid-cols-12 md:h-[216px] `}
    >
      <div className="col-span-4 col-start-2 row-span-1 row-start-3 ">
        <LogoComponent dark={checkPath} />
      </div>
      <div className="col-span-10 col-start-2 row-span-2 row-start-6 md:col-span-4 md:row-start-3 md:col-start-5">
        <p>
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
      </div>

      <div className="col-span-4 col-start-2 row-span-1 row-start-11 md:row-start-3 md:col-start-10 xl:col-start-11">
        <SocialComponent dark={checkPath} />
      </div>
    </footer>
  );
}
