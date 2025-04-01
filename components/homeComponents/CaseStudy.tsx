import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type caseStudyProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "caseStudy" }
>;

export function CaseStudy({
  client,
  services,
  industry,
  location,
  image,
}: caseStudyProps) {
  return (
    <section>
      {image ? (
        <Image
          src={urlFor(image).url()}
          width={1600}
          height={800}
          alt={image.caption || ""}
        />
      ) : null}
      <div>
        <div>
          <h3>Client</h3>
          <p>{client}</p>
        </div>
        <div>
          <h3>Services</h3>
          <p>{services}</p>
        </div>
        <div>
          <h3>Industry</h3>
          <p>{industry}</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>{location}</p>
        </div>
      </div>
    </section>
  );
}
