import { HOME_QUERYResult } from "@/sanity/types";
import { LandingModule } from "./homeComponents/LandingModule";
import { FullBleed } from "./homeComponents/FullBleed";
import { BrandModule } from "./homeComponents/BrandModule";
import { LargeText } from "./homeComponents/LargeText";
import { CaseStudy } from "./homeComponents/CaseStudy";
import { LargeImage } from "./homeComponents/LargeImage";
import { OfferingsModule } from "./homeComponents/OfferingsModule";
import { DoublePortrait } from "./photographyComponents/DoublePortrait";
import { ImageLargeLeft } from "./photographyComponents/ImageLargeLeft";
import { ImageLargeRight } from "./photographyComponents/ImageLargeRight";
import { Landscape } from "./photographyComponents/Landscape";
import { SinglePortrait } from "./photographyComponents/SinglePortrait";
import { VideoCaseStudy } from "./videographyComponents/VideoCaseStudy";

type PageBuilderProps = {
  content: NonNullable<HOME_QUERYResult>["content"];
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <div>
      {content.map((block) => {
        switch (block._type) {
          case "landingModule":
            return <LandingModule key={block._key} {...block} />;
          case "fullBleed":
            return <FullBleed key={block._key} {...block} />;
          case "largeText":
            return <LargeText key={block._key} {...block} />;
          case "brandModule":
            return <BrandModule key={block._key} {...block} />;
          case "caseStudy":
            return <CaseStudy key={block._key} {...block} />;
          case "largeImage":
            return <LargeImage key={block._key} {...block} />;
          case "offeringsModule":
            return <OfferingsModule key={block._key} {...block} />;
          case "doublePortrait":
            return <DoublePortrait key={block._key} {...block} />;
          case "imageLargeLeft":
            return <ImageLargeLeft key={block._key} {...block} />;
          case "imageLargeRight":
            return <ImageLargeRight key={block._key} {...block} />;
          case "landscape":
            return <Landscape key={block._key} {...block} />;
          case "singlePortrait":
            return <SinglePortrait key={block._key} {...block} />;
          case "videoCaseStudy":
            return <VideoCaseStudy key={block._key} {...block} />;
          // Add more cases for different block types as needed
          default:
            return <div key={block._key}>Block not found: {block._type}</div>;
        }
      })}
    </div>
  );
}
