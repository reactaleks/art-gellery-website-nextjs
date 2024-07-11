import ImageComponent from "./ImageComponent";
import FeatureTextTileComponent from "./FeatureTextTileComponent";

export default function FeatureSectionComponent() {
  return (
    <div className="flex flex-col items-center h-[1605px] md:h-[1131px] md:w-[689px] my-24 md:justify-center md:mx-auto md:my-24 md:gap-4">
      <div className=" md:flex md:flex-row-reverse md:gap-4 md:justify-between md:w-[689px] md:h-[400px] ">
        <ImageComponent
          imageStyles="h-[320px] w-[343px] md:w-[398px] md:h-[400px] my-6 md:my-0"
          imageUrl="/desktop/image-grid-1@2x.jpg"
          imageAlt="Grid Image One"
        />

        <FeatureTextTileComponent
          tileStyle="md:w-[223px] md:h-[299px]  md:px-0 md:mx-0 my-6 md:my-0"
          tileDark={false}
          tileTitle="Your day at the gallery"
          tileText="Wander through our distinct collections and find new insights about our
        artists. Dive into the details of their creative process."
        />
      </div>

      <div className="md:flex md:gap-4 ">
        <div>
          <ImageComponent
            imageStyles="h-[480px] w-[343px] md:w-[398px] md:h-[720px] my-6  md:my-0"
            imageUrl="/desktop/image-grid-2@2x.jpg"
            imageAlt="Grid image two"
          />
        </div>
        <div className="md:flex md:gap-4 md:flex-col">
          <ImageComponent
            imageStyles="h-[200px] w-[343px] md:w-[280px] md:h-[313px] my-6  md:my-0"
            imageUrl="/desktop/image-grid-3@2x.jpg"
            imageAlt="Grid image three"
          />
          <FeatureTextTileComponent
            tileStyle="md:w-[280px] md:h-[391px]"
            tileDark={true}
            tileTitle="Come & Be Inspired"
            tileText="We’re excited to welcome you to our gallery and see how our
          collections influence you."
          />
        </div>
      </div>
    </div>
  );
}
