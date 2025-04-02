import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type offeringsModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "offeringsModule" }
>;

export function OfferingsModule({ services }: offeringsModuleProps) {
  if (!Array.isArray(services) || services.length === 0) return null;
  return (
    <section>
      <div>
        <h1>Services</h1>
      </div>
      {services.map((service) => (
        <div key={service.name}>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          {service.image?.asset?.url && (
            <Image
              src={urlFor(service.image).url()}
              width={1600}
              height={800}
              alt={service.image.caption || ""}
            />
          )}
        </div>
      ))}
    </section>
  );
}
