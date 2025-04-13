"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";

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
    <section>
      <div className="brand-module">
        <h1>Selected Clients</h1>
        {selectedBrand.image ? (
          <Image
            src={urlFor(selectedBrand.image).url()}
            width={1600}
            height={800}
            alt={selectedBrand.image.caption || ""}
          />
        ) : null}
        <p>{selectedBrand.description}</p>
        {validBrands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => setSelectedBrand(brand)}
            className={`${
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
