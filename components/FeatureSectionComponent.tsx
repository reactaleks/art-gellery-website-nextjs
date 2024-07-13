import ImageComponent from "./ImageComponent";
import FeatureTextTileComponent from "./FeatureTextTileComponent";

export default function FeatureSectionComponent() {
  return (
    <div className="flex flex-col justify-between md:grid gap-4 md:grid-cols-12 grid-rows-12 h-[1605px] md:h-[1131px] md:w-[689px] md:mx-auto xl:h-[1150px] xl:w-[1110px] my-24">
      <div className="col-span-7 row-span-4 col-start-6">
        <ImageComponent
          imageStyles="h-[320px] w-[343px] md:w-[397px] md:h-[367px] xl:w-[635px] xl:h-[375px]"
          imageUrl="/desktop/image-grid-1@2x.jpg"
          imageAlt="Grid Image One"
        />
      </div>
      <div className="content-center col-span-5 row-span-4 col-start-1 row-start-1">
        <FeatureTextTileComponent
          tileStyle="md:w-auto md:h-auto "
          tileDark={false}
          tileTitle="Your  day at the gallery"
          tileText="Wander through our distinct collections and find new insights about our
        artists. Dive into the details of their creative process."
        />
      </div>
      <div className="col-span-7 row-span-6 row-start-5 col-start-1">
        <ImageComponent
          imageStyles="h-[480px] w-[343px] md:w-[398px] md:h-[750px] xl:w-[635px] xl:h-[765px]"
          imageUrl="/desktop/image-grid-2@2x.jpg"
          imageAlt="Grid image two"
        />
      </div>
      <div className="col-span-5 row-span-8 grid grid-rows-8 md:grid-rows-12 xl:gap-4">
        <div className=" row-span-4 row-start-1">
          <ImageComponent
            imageStyles="h-[200px] w-[343px] md:w-[280px] md:h-[367px] xl:w-[445px] xl:h-[375px]"
            imageUrl="/desktop/image-grid-3@2x.jpg"
            imageAlt="Grid image three"
          />
        </div>
        <div className=" row-span-4 row-start-5 md:row-start-7">
          <FeatureTextTileComponent
            tileStyle="md:w-[280px] md:h-[375px] xl:w-[447px] xl:h-[377px]"
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
