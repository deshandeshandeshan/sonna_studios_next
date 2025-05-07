import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./FullBleed.css";
import "../grid.css";

type fullBlledProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "fullBleed" }
>;

export function FullBleed({ image, text }: fullBlledProps) {
  return (
    <section className="full-bleed-container grid">
      <div className="full-bleed-image caption-spacing">
        {image ? (
          <Image
            src={urlFor(image).width(3840).auto("format").quality(100).url()}
            width={3840}
            height={2160}
            alt={image.alt || ""}
            className="full-bleed-image-img"
          />
        ) : null}
      </div>
      <div className="full-bleed-text mobile-padding">
        <p className="type-body">{text}</p>
      </div>
    </section>
  );
}
