"use client";

import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./ImageLargeRight.css";
import "../grid.css";
import { useState } from "react";
import { Lightbox } from "../LightBox";

type imageLargeRightProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "imageLargeRight" }
>;

export function ImageLargeRight({
  leftImage,
  rightImage,
}: imageLargeRightProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="image-large-right grid mobile-padding">
      <div className="image-large-right-left">
        {leftImage ? (
          <Image
            onClick={() =>
              setActiveImage({
                src: urlFor(leftImage).url(),
                alt: leftImage.alt,
              })
            }
            src={urlFor(leftImage).auto("format").quality(90).url()}
            width={1080}
            height={1920}
            alt={leftImage.alt || ""}
            className="image-large-right-left-img pointer caption-spacing"
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
            onClick={() =>
              setActiveImage({
                src: urlFor(rightImage).url(),
                alt: rightImage.alt,
              })
            }
            src={urlFor(rightImage).auto("format").quality(90).url()}
            width={1080}
            height={1920}
            alt={rightImage.alt || ""}
            className="image-large-right-right-img pointer caption-spacing"
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
