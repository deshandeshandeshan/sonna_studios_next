import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./LargeImage.css";
import "../grid.css";

type largeImageProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "largeImage" }
>;

export function LargeImage({ image, text }: largeImageProps) {
  return (
    <section className="large-image-container grid">
      <div className="large-image spacing-16">
        {image ? (
          <Image
            src={urlFor(image).url()}
            width={1600}
            height={800}
            alt={image.alt || ""}
            className="large-image-img"
          />
        ) : null}
      </div>
      <div className="large-image-text">
        <p className="type-body">{text}</p>
      </div>
    </section>
  );
}
