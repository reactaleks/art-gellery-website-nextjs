import Image from "next/image"

interface PropTypes {
    imageStyles: string;
    imageUrl:string;
    imageAlt:string;
}

export default function ImageComponent({imageStyles, imageUrl, imageAlt}:PropTypes) {
    return (
        <div className={`relative ${imageStyles} mx-auto`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    )
}