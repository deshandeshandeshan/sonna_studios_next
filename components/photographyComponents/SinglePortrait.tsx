"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./SinglePortrait.css";
import "../grid.css";
import { useState } from "react";
import { Lightbox } from "../LightBox";

type singlePortraitProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "singlePortrait" }
>;

export function SinglePortrait({ image }: singlePortraitProps) {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const imageUrl = image ? urlFor(image).url() : "";

  return (
    <section className="single-potrait grid mobile-padding">
      <div className="single-potrait-container">
        {image ? (
          <Image
            onClick={() => setLightBoxOpen(!lightBoxOpen)}
            src={imageUrl}
            width={1600}
            height={800}
            alt={image.alt || ""}
            className="single-potrait-image spacing-16"
          />
        ) : null}
        {image?.caption && (
          <div className="single-potrait-caption">
            <p className="type-detail-regular">{image.caption}</p>
          </div>
        )}
      </div>

      {lightBoxOpen && (
        <Lightbox
          src={imageUrl}
          alt={image?.alt || ""}
          caption={image?.caption}
          onClose={() => setLightBoxOpen(false)}
        />
      )}
    </section>
  );
}
