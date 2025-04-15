import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./DoublePortrait.css";
import "../grid.css";

type doublePortraitProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "doublePortrait" }
>;

export function DoublePortrait({ leftImage, rightImage }: doublePortraitProps) {
  return (
    <section className="double-portrait grid mobile-padding">
      <div className="potrait-left">
        {leftImage ? (
          <Image
            src={urlFor(leftImage).url()}
            width={1600}
            height={800}
            alt={leftImage.caption || ""}
            className="potrait-left-img"
          />
        ) : null}
        {leftImage?.caption && (
          <div className="double-potrait-caption">
            <p className="type-detail-regular">{leftImage.caption}</p>
          </div>
        )}
      </div>
      <div className="potrait-right">
        {rightImage ? (
          <Image
            src={urlFor(rightImage).url()}
            width={1600}
            height={800}
            alt={rightImage.caption || ""}
            className="potrait-right-img"
          />
        ) : null}
        {rightImage?.caption && (
          <div className="double-potrait-caption">
            <p className="type-detail-regular">{rightImage.caption}</p>
          </div>
        )}
      </div>
    </section>
  );
}
