import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type servicesBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "servicesBlock" }
>;

export function ServicesBlock({ capabilities }: servicesBlockProps) {
  if (!Array.isArray(capabilities) || capabilities.length === 0) return null;
  return (
    <section>
      <div>
        <h1>Services</h1>
      </div>
      {capabilities.map((capability) => (
        <div key={capability.name}>
          {capability.image?.asset?.url && (
            <Image
              src={urlFor(capability.image).url()}
              width={1600}
              height={800}
              alt={capability.image.caption || ""}
            />
          )}
          <h2>{capability.name}</h2>
          <p>{capability.description}</p>
          <h3>{capability.specialties}</h3>
        </div>
      ))}
    </section>
  );
}
