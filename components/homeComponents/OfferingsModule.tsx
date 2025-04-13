"use client";

import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

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
    <section>
      <div>
        <h1>Services</h1>
        <div className="">
          {services.map((service) => (
            <button
              key={service.name}
              onClick={() => setSelectedService(service)}
              className={`px-4 py-2 border rounded ${
                selectedService.name === service.name
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>

      {/* Display selected service info */}
      <div>
        <h2>{selectedService.name}</h2>
        <p>{selectedService.description}</p>
        {selectedService.image?.asset?.url && (
          <Image
            src={urlFor(selectedService.image).url()}
            width={1600}
            height={800}
            alt={selectedService.image.caption || ""}
          />
        )}
      </div>
    </section>
  );
}
