import type { Metadata } from "next";
import "./globals.css";
import FooterComponent from "@/components/FooterComponent";

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
      <body > 
          {children}

          <FooterComponent />

      </body>
    </html>
  );
}
