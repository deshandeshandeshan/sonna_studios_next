import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./ImageLargeLeft.css";
import "../grid.css";

type imageLargeLeftProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "imageLargeLeft" }
>;

export function ImageLargeLeft({ leftImage, rightImage }: imageLargeLeftProps) {
  return (
    <section className="image-large-left-container grid mobile-padding">
      <div className="image-large-left">
        {leftImage ? (
          <Image
            src={urlFor(leftImage).url()}
            width={1600}
            height={800}
            alt={leftImage.alt || ""}
            className="image-large-left-img"
          />
        ) : null}
        {leftImage?.caption && (
          <div className="image-large-left-caption">
            <p className="type-detail-regular">{leftImage.caption}</p>
          </div>
        )}
      </div>
      <div className="image-large-right">
        {rightImage ? (
          <Image
            src={urlFor(rightImage).url()}
            width={1600}
            height={800}
            alt={rightImage.alt || ""}
            className="image-large-right-img"
          />
        ) : null}
        {rightImage?.caption && (
          <div className="image-large-right-caption">
            <p className="type-detail-regular">{rightImage.caption}</p>
          </div>
        )}
      </div>
    </section>
  );
}
