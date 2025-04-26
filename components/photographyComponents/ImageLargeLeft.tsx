"use client";

import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { Lightbox } from "../LightBox";
import "./ImageLargeLeft.css";
import "../grid.css";
import { useState } from "react";

type imageLargeLeftProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "imageLargeLeft" }
>;

export function ImageLargeLeft({ leftImage, rightImage }: imageLargeLeftProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="image-large-left-container grid mobile-padding">
      <div className="image-large-left">
        {leftImage ? (
          <Image
            onClick={() =>
              setActiveImage({
                src: urlFor(leftImage).url(),
                alt: leftImage.alt,
              })
            }
            src={urlFor(leftImage).url()}
            width={1600}
            height={800}
            alt={leftImage.alt || ""}
            className="image-large-left-img pointer caption-spacing"
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
            onClick={() =>
              setActiveImage({
                src: urlFor(rightImage).url(),
                alt: rightImage.alt,
              })
            }
            src={urlFor(rightImage).url()}
            width={1600}
            height={800}
            alt={rightImage.alt || ""}
            className="image-large-right-img pointer caption-spacing"
          />
        ) : null}
        {rightImage?.caption && (
          <div className="image-large-right-caption">
            <p className="type-detail-regular">{rightImage.caption}</p>
          </div>
        )}
      </div>

      {activeImage && (
        <Lightbox
          src={activeImage.src}
          alt={activeImage.alt || ""}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  );
}
