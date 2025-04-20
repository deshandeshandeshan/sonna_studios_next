import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./ImageLargeRight.css";
import "../grid.css";

type imageLargeRightProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "imageLargeRight" }
>;

export function ImageLargeRight({
  leftImage,
  rightImage,
}: imageLargeRightProps) {
  return (
    <section className="image-large-right grid mobile-padding">
      <div className="image-large-right-left">
        {leftImage ? (
          <Image
            src={urlFor(leftImage).url()}
            width={1600}
            height={800}
            alt={leftImage.alt || ""}
            className="image-large-right-left-img"
          />
        ) : null}
        {leftImage?.caption && (
          <div className="image-large-right-caption">
            <p className="type-detail-regular">{leftImage.caption}</p>
          </div>
        )}
      </div>
      <div className="image-large-right-right">
        {rightImage ? (
          <Image
            src={urlFor(rightImage).url()}
            width={1600}
            height={800}
            alt={rightImage.alt || ""}
            className="image-large-right-right-img"
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
