import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Art Gallery Proejct - Home",
  description: "Art Gallery project as part of front end mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
