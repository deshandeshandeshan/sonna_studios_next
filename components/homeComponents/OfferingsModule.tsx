"use client";

import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "../grid.css";
import "./OfferingsModule.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type offeringsModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "offeringsModule" }
>;

export function OfferingsModule({ services }: offeringsModuleProps) {
  // Fallback in case services is invalid
  const validServices =
    Array.isArray(services) && services.length > 0 ? services : [];

  // Set initial state only if services are valid, fallback to null
  const [selectedService, setSelectedService] = useState(
    validServices.length > 0 ? validServices[0] : null
  );

  // If there's no valid service, don't render anything
  if (!selectedService) return null;

  return (
    <section className="offerings-container grid mobile-padding">
      <h1 className="services-title mobile-type-body text-grey">Services</h1>
      <div className="services-list-container small-padding-bottom">
        {validServices.map((service) => (
          <button
            key={service.name}
            onClick={() => setSelectedService(service)}
            className={`small-padding-bottom mobile-type-body ${
              selectedService.name === service.name ? "text-black" : "text-grey"
            }`}
          >
            {service.name}
          </button>
        ))}
        <Link href="/capabilities" className="mobile-type-body">
          Learn more <FaArrowRight />
        </Link>
      </div>
      <div className="services-description-container ">
        <hr className="solid-hr small-margin-bottom" />
        <p className="services-description mobile-type-heading medium-padding-bottom">
          {selectedService.description}
        </p>
      </div>
      {selectedService.image?.asset?.url && (
        <Image
          src={urlFor(selectedService.image).url()}
          width={1600}
          height={800}
          alt={selectedService.image.caption || ""}
          className="services-img"
        />
      )}
    </section>
  );
}
