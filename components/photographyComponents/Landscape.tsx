import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./Landscape.css";
import "../grid.css";

type landscapeProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "landscape" }
>;

export function Landscape({ image }: landscapeProps) {
  return (
    <section className="landscape grid mobile-padding">
      <div className="landscape-image">
        {image ? (
          <Image
            src={urlFor(image).url()}
            width={1600}
            height={800}
            alt={image.caption || ""}
            className="landscape-img"
          />
        ) : null}
        {image?.caption && (
          <div className="landscape-caption">
            <p className="type-detail-regular">{image.caption}</p>
          </div>
        )}
      </div>
    </section>
  );
}
