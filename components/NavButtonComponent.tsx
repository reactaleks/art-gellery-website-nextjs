import { link } from "fs";
import Link from "next/link";

interface PropTypes {
  destination: string;
  linkText: string;
}

export default function NavButtonComponent({
  destination,
  linkText,
}: PropTypes) {
  if (destination === "/location") {
    return (
      <Link
        href={destination}
        className="text-[20px] font-extrabold font-bigShoulders uppercase text-white "
      >
        <div className="group w-[260px] h-[72px] flex items-center ">
          <div className="w-[75%] h-full flex justify-center items-center bg-allmost-black group-hover:bg-gold">
            {linkText}
          </div>
          <div className="w-[25%] h-full flex justify-center items-center bg-gold group-hover:bg-allmost-black">
            <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" />
            </svg>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        href={destination}
        className="text-[20px] font-extrabold font-bigShoulders uppercase text-white absolute"
      >
        <div className="group w-[260px] h-[72px] flex items-center ">
          <div className="w-[25%] h-full flex justify-center items-center bg-gold group-hover:bg-allmost-black">
            <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#FFF" fill="none" d="M9 24 1 12 9 0" />
            </svg>
          </div>
          <div className="w-[75%] h-full flex justify-center items-center bg-allmost-black group-hover:bg-gold">
            {linkText}
          </div>
        </div>
      </Link>
    );
  }
}
