"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { Lightbox } from "../LightBox";
import "./Landscape.css";
import "../grid.css";
import { useState } from "react";

type landscapeProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "landscape" }
>;

export function Landscape({ image }: landscapeProps) {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const imageUrl = image ? urlFor(image).url() : "";

  return (
    <section className="landscape grid mobile-padding">
      <div className="landscape-image">
        {image ? (
          <Image
            onClick={() => setLightBoxOpen(!lightBoxOpen)}
            src={imageUrl}
            width={1600}
            height={800}
            alt={image.alt || ""}
            className="landscape-img pointer caption-spacing"
          />
        ) : null}
        {image?.caption && (
          <div className="landscape-caption">
            <p className="type-detail-regular">{image.caption}</p>
          </div>
        )}
      </div>

      {lightBoxOpen && (
        <Lightbox
          src={imageUrl}
          alt={image?.alt || ""}
          onClose={() => setLightBoxOpen(false)}
        />
      )}
    </section>
  );
}
