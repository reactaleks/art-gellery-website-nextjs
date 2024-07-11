import ImageComponent from "./ImageComponent";
import FeatureTextTileComponent from "./FeatureTextTileComponent";

export default function FeatureSectionComponent() {
  return (
    <>
      <ImageComponent
        imageHeight="320px"
        imageUrl="/desktop/image-grid-1@2x.jpg"
        imageAlt="Grid Image One"
      />

      <FeatureTextTileComponent tileDark={false}  tileTitle="Your day at the gallery" tileText="Wander through our distinct collections and find new insights about our
        artists. Dive into the details of their creative process."/>

      <ImageComponent
        imageHeight="480px"
        imageUrl="/desktop/image-grid-2@2x.jpg"
        imageAlt="Grid image two"
      />

      <ImageComponent
        imageHeight="200px"
        imageUrl="/desktop/image-grid-3@2x.jpg"
        imageAlt="Grid image three"
      />
    <FeatureTextTileComponent tileDark={true} tileTitle="Come & Be Inspired" tileText="We’re excited to welcome you to our gallery and see how our
          collections influence you."/>
    </>
  );
}
