import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

export default function Location() {
  return (
    <Suspense fallback={<Loading/>}>

        <h1>Location</h1>
        <Link href="/">This is a link to location page</Link>
        
    </Suspense>
  );
}
