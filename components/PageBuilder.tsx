import { HOME_QUERYResult } from "@/sanity/types";

// Import your components
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
import { ServicesBlock } from "./capabilitiesComponents/ServicesBlock";
import { FullScreenHeaderImage } from "./capabilitiesComponents/FullScreenHeaderImage";
import { BookingBlock } from "./bookComponents/BookingBlock";
import { BrandsBlock } from "./capabilitiesComponents/BrandsBlock";
import { LocationBlock } from "./homeComponents/LocationBlock";

import "./PageBuilder.css";

type PageBuilderBlock = NonNullable<
  NonNullable<HOME_QUERYResult>["content"]
>[number];

type PageBuilderProps = {
  content: PageBuilderBlock[];
  className?: string;
};

export function PageBuilder({
  content,
  className = "page-builder",
}: PageBuilderProps) {
  if (!Array.isArray(content)) return null;

  return (
    <main className={className}>
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
          case "servicesBlock":
            return <ServicesBlock key={block._key} {...block} />;
          case "fullScreenHeaderImage":
            return <FullScreenHeaderImage key={block._key} {...block} />;
          case "brandsBlock":
            return <BrandsBlock key={block._key} {...block} />;
          case "locationBlock":
            return <LocationBlock key={block._key} {...block} />;
          case "bookingBlock":
            return <BookingBlock key={block._key} {...block} />;
          default: {
            const fallbackKey =
              (block as { _key?: string })._key ?? Math.random();
            const fallbackType =
              (block as { _type?: string })._type ?? "unknown";

            return <div key={fallbackKey}>Unknown block: {fallbackType}</div>;
          }
        }
      })}
    </main>
  );
}
