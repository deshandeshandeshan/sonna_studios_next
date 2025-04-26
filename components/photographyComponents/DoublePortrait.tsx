"use client";

import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./DoublePortrait.css";
import "../grid.css";
import { Lightbox } from "../LightBox";
import { useState } from "react";

type doublePortraitProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "doublePortrait" }
>;

export function DoublePortrait({ leftImage, rightImage }: doublePortraitProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="double-portrait grid mobile-padding">
      <div className="potrait-left">
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
            className="potrait-left-img pointer caption-spacing"
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
            className="potrait-right-img pointer caption-spacing"
          />
        ) : null}
        {rightImage?.caption && (
          <div className="double-potrait-caption">
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
