import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type offeringsModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "offeringsModule" }
>;

export function OfferingsModule({
  service,
  image,
  description,
}: offeringsModuleProps) {
  return (
    <section>
      <div>
        <div>
          <h1>Services</h1>
        </div>
        <h2>{service}</h2>
      </div>
      <div>
        <p>{description}</p>
        {image ? (
          <Image
            src={urlFor(image).url()}
            width={1600}
            height={800}
            alt={image.caption || ""}
          />
        ) : null}
      </div>
    </section>
  );
}
