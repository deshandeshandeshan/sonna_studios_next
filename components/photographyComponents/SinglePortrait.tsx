import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./SinglePortrait.css";
import "../grid.css";

type singlePortraitProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "singlePortrait" }
>;

export function SinglePortrait({ image }: singlePortraitProps) {
  return (
    <section className="single-potrait grid mobile-padding">
      <div className="single-potrait-container">
        {image ? (
          <Image
            src={urlFor(image).url()}
            width={1600}
            height={800}
            alt={image.caption || ""}
            className="single-potrait-image spacing-16"
          />
        ) : null}
        {image?.caption && (
          <div className="single-potrait-caption">
            <p className="type-detail-regular">{image.caption}</p>
          </div>
        )}
      </div>
    </section>
  );
}
