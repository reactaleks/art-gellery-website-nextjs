import Image from "next/image"

interface PropTypes {
    imageHeight: string;
    imageUrl:string;
    imageAlt:string;
}

export default function ImageComponent({imageHeight, imageUrl, imageAlt}:PropTypes) {
    return (
        <div className={`relative m-4 h-[${imageHeight}]`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    )
}