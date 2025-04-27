import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";

import "../grid.css";
import "./ServicesBlock.css";
import Link from "next/link";

type servicesBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "servicesBlock" }
>;

export function ServicesBlock({ capabilities }: servicesBlockProps) {
  if (!Array.isArray(capabilities) || capabilities.length === 0) return null;
  return (
    <section className="mobile-padding">
      {capabilities.map((capability) => (
        <div key={capability.name} className="spacing-120">
          <div className="capability-heading">
            <h1 className="type-body">Services</h1>
          </div>
          <hr className="solid-hr small-margin-bottom" />
          <div className="grid">
            {capability.image?.asset?.url && (
              <Image
                src={urlFor(capability.image).url()}
                width={1600}
                height={800}
                alt={capability.image.caption || ""}
                className="capability-img"
              />
            )}
            <h2 className="capability-name type-sub text-grey">
              {capability.name}
            </h2>
            <p className="capability-description type-sub spacing-64">
              {capability.description}
            </p>
            <ul className="capability-specialties type-sub spacing-64">
              {capability.specialties?.map((specialty, index) => (
                <li key={index}>{specialty}</li>
              ))}
            </ul>
            <Link
              href={"/photography"}
              className="capabilities-book-button link-button type-body"
            >
              Book a Shoot →
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
