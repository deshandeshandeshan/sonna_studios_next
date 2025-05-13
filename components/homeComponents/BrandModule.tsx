"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";
import "../grid.css";
import "./BrandModule.css";
import Link from "next/link";

type brandModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "brandModule" }
>;

export function BrandModule({ brands }: brandModuleProps) {
  const validBrands = Array.isArray(brands) && brands.length > 0 ? brands : [];
  const [selectedBrand, setSelectedBrand] = useState(
    validBrands.length > 0 ? validBrands[0] : null
  );

  if (!selectedBrand) return null;

  return (
    <section className="brand-module grid mobile-padding">
      <h1 className="brand-selected-clients type-body spacing-16">
        Selected Clients
      </h1>
      <Link href="/book" className="brand-module-button link-button type-body">
        Book a Shoot →
      </Link>

      {selectedBrand.image ? (
        <Image
          priority
          src={urlFor(selectedBrand.image).auto("format").quality(80).url()}
          width={1200}
          height={2400}
          layout="responsive"
          placeholder="blur"
          blurDataURL={urlFor(selectedBrand.image)
            .width(20)
            .blur(20)
            .quality(30)
            .url()}
          alt={selectedBrand.image.alt || ""}
          className="brand-img"
        />
      ) : null}

      {validBrands.map(
        (brand) =>
          brand.image &&
          brand.name !== selectedBrand.name && (
            <Image
              key={brand.name}
              src={urlFor(brand.image).auto("format").quality(60).url()}
              width={10}
              height={10}
              style={{ display: "none" }}
              alt=""
            />
          )
      )}

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
