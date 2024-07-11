import Link from "next/link";

export default function Home() {
  return (
    <main >
      <h1>This is home page</h1>
      <Link href="/location">This is a link to location page</Link>
    </main>
  ); 
}
