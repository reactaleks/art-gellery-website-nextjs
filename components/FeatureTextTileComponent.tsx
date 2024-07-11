interface PropType {
    tileTitle: string;
    tileText: string;
    tileDark: boolean;
}
export default function FeatureTextTileComponent({ tileTitle, tileText, tileDark }: PropType) {
  return (
    <div className={`w-[343px] h-[223px] flex flex-col justify-center mx-auto px-4 m-4 ${tileDark ? `bg-allmost-black` : `bg-white`}`}>
      <h2 className={`text-[50px] leading-headingm font-bigShoulders font-extrabold uppercase ${tileDark ? `text-white` : `text-allmost-black`} `}>
        {tileTitle}
      </h2>
      <p className={`text-bodys leading-bodym font-outfit ${tileDark ? `text-white` : `text-dark-gray`} `}>
        {tileText}
      </p>
    </div>
  );
}
