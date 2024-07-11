import Link from "next/link";
import { Suspense, useMemo } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";
import "../component-styles/map.modules.css";

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
    <>
      <h1>Location</h1>
        <Map />

      <Link href="/">This is a link to location page</Link>
    </>
  );
}
