import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Art Gallery Project - Location",
    description: "Art Gallery project as part of front end mentor",
};

export default function LocationLay({children}: {children:React.ReactNode}) {
    return (
        <main>
            {children}
        </main>
    )

}