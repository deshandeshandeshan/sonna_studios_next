"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";
import "../grid.css";
import "./CaseStudy.css";

type caseStudyProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "caseStudy" }
>;

export function CaseStudy({ caseStudies }: caseStudyProps) {
  // Fallback in case services is invalid
  const validCaseStudy =
    Array.isArray(caseStudies) && caseStudies.length > 0 ? caseStudies : [];

  // Set initial state only if services are valid, fallback to null
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(
    validCaseStudy.length > 0 ? validCaseStudy[0] : null
  );

  // If there's no valid service, don't render anything
  if (!selectedCaseStudy) return null;
  return (
    <section className="case-study-section grid mobile-padding">
      <div className="case-study-images">
        {validCaseStudy.map((caseStudy) => (
          <button
            key={caseStudy.client}
            onClick={() => setSelectedCaseStudy(caseStudy)}
            className={`case-study-image-selector ${
              selectedCaseStudy.client === caseStudy.client
                ? "img-opaque"
                : "img-transparent"
            }`}
          >
            {caseStudy.image && caseStudy.image.asset?.url && (
              <Image
                src={urlFor(caseStudy.image).url()}
                width={300}
                height={200}
                alt={caseStudy.image.caption || ""}
                className="case-study-img"
              />
            )}
          </button>
        ))}
      </div>
      {selectedCaseStudy.image && selectedCaseStudy.image.asset?.url && (
        <Image
          src={urlFor(selectedCaseStudy.image).url()}
          width={300}
          height={200}
          alt={selectedCaseStudy.image.caption || ""}
          className="case-study-img-large"
        />
      )}
      <div className="case-study-description-container grid">
        <h2 className="case-study-client mobile-type-body text-grey">Client</h2>
        <p className="case-study-client-description mobile-type-sub">
          {selectedCaseStudy.client}
        </p>
        <h2 className="case-study-services mobile-type-body text-grey">
          Services
        </h2>
        <p className="case-study-services-description mobile-type-sub">
          {selectedCaseStudy.services}
        </p>
        <h2 className="case-study-industry mobile-type-body text-grey">
          industry
        </h2>
        <p className="case-study-industry-description mobile-type-sub">
          {selectedCaseStudy.industry}
        </p>

        <h2 className="case-study-location mobile-type-body text-grey">
          location
        </h2>
        <p className="case-study-location-description mobile-type-sub">
          {selectedCaseStudy.location}
        </p>
      </div>
    </section>
  );
}
