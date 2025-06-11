import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./FullBleed.css";
import "../grid.css";
import Link from "next/link";

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
            src={urlFor(image).auto("format").quality(100).url()}
            width={3840}
            height={2160}
            alt={image.alt || ""}
            className="full-bleed-image-img"
          />
        ) : null}
        <div className="sticky-button ">
          <Link href="/book">
            <button className="full-bleed-book-button link-button type-body">
              Book a Shoot →
            </button>
          </Link>
        </div>
      </div>
      <div className="full-bleed-text mobile-padding">
        <p className="type-body">{text}</p>
      </div>
    </section>
  );
}
