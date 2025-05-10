"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";
import "../grid.css";
import "./BrandModule.css";

type brandModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "brandModule" }
>;

export function BrandModule({ brands }: brandModuleProps) {
  // Fallback in case services is invalid
  const validBrands = Array.isArray(brands) && brands.length > 0 ? brands : [];

  // Set initial state only if services are valid, fallback to null
  const [selectedBrand, setSelectedBrand] = useState(
    validBrands.length > 0 ? validBrands[0] : null
  );

  // If there's no valid service, don't render anything
  if (!selectedBrand) return null;

  return (
    <section className="brand-module grid mobile-padding">
      <h1 className="brand-selected-clients type-body spacing-16">
        Selected Clients
      </h1>
      {selectedBrand.image ? (
        <Image
          src={urlFor(selectedBrand.image).auto("format").quality(80).url()}
          width={1200}
          height={2400}
          layout="responsive"
          placeholder="blur"
          blurDataURL={urlFor(selectedBrand.image).width(10).blur(10).url()}
          alt={selectedBrand.image.alt || ""}
          className="brand-img caption-spacing"
        />
      ) : null}
      <p className="brand-description type-body">{selectedBrand.description}</p>
      <div className="brand-names">
        {validBrands.map((brand) => (
          <button
            key={brand.name}
            onMouseEnter={() => setSelectedBrand(brand)}
            onClick={() => setSelectedBrand(brand)}
            className={`brand-name type-heading ${
              selectedBrand.name === brand.name ? "text-black" : "text-grey"
            }`}
          >
            {brand.name}
          </button>
        ))}
      </div>
    </section>
  );
}
