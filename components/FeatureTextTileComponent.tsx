interface PropType {
    tileTitle: string;
    tileText: string;
    tileDark: boolean;
    tileStyle: string;
}
export default function FeatureTextTileComponent({ tileTitle, tileText, tileDark, tileStyle }: PropType) {
  return (
    <div className={`w-[343px] h-[223px] ${tileStyle} flex flex-col justify-center px-4 mx-auto ${tileDark ? `bg-allmost-black` : `bg-white`}`}>
      <h2 className={`text-[50px]  leading-headingm font-bigShoulders font-extrabold uppercase ${tileDark ? `text-white` : `text-allmost-black`} `}>
        {tileTitle}
      </h2>
      <p className={`text-bodys leading-bodym font-outfit ${tileDark ? `text-white` : `text-dark-gray`} `}>
        {tileText}
      </p>
    </div>
  );
}
