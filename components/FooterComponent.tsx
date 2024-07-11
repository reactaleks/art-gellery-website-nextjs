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
      } h-[375px] flex flex-col justify-around px-8 md:h-[216px]`}
    >
      <div className="w-[331px] h-[240px] md:w-[689px] md:h-[104px] flex flex-col justify-between md:grid md:grid-cols-3 md:items-start ">
        <div>
          <LogoComponent dark={checkPath} />
        </div>
        <div className="">
          <p>
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
        </div>

        <div className="md:flex md:justify-end">
          <SocialComponent dark={checkPath} />
        </div>
      </div>
    </footer>
  );
}
