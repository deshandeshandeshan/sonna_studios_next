import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

import "../grid.css";
import "./BrandsBlock.css";

type brandBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "brandsBlock" }
>;

export function BrandsBlock({
  title,
  description,
  brandLabel,
}: brandBlockProps) {
  const validBrandLabel =
    Array.isArray(brandLabel) && brandLabel.length > 0 ? brandLabel : [];

  return (
    <section className="grid mobile-padding">
      <h2 className="type-sub brand-labels-heading spacing-24">{title}</h2>
      <p className="type-sub brand-labels-description spacing-64">
        {description}
      </p>

      <h3 className="selected-clients type-detail-regular spacing-12">
        Selected Clients
      </h3>
      <div className="type-sub brand-labels">
        {validBrandLabel.map((label) => {
          if (!label.image?.asset) return null;

          return (
            <div key={label.name}>
              <div className="brand-label-container">
                <Image
                  src={urlFor(label.image).url()}
                  fill
                  alt={label.image.alt || ""}
                  className="label-img"
                />
              </div>
              <h3 className="type-detail-regular label-heading">
                {label.name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
