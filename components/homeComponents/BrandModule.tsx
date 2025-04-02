import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type brandModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "brandModule" }
>;

export function BrandModule({ brands }: brandModuleProps) {
  if (!Array.isArray(brands) || brands.length === 0) return null;
  return (
    <section>
      {brands.map((brand) => (
        <div key={brand.name} className="brand-module">
          <h1>Selected Clients</h1>
          <h2>{brand.name}</h2>
          {brand.image ? (
            <Image
              src={urlFor(brand.image).url()}
              width={1600}
              height={800}
              alt={brand.image.caption || ""}
            />
          ) : null}
          <p>{brand.description}</p>
        </div>
      ))}
    </section>
  );
}
