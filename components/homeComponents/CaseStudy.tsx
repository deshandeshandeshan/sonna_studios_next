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
      <div className="case-study-description-container">
        <div className="case-study-cient flex-row">
          <h2 className="case-study-client-heading type-detail-regular text-grey">
            Client
          </h2>
          <p className="case-study-client-description type-body">
            {selectedCaseStudy.client}
          </p>
        </div>
        <div className="case-study-services flex-row">
          <h2 className="case-study-services-heading type-detail-regular text-grey">
            Services
          </h2>
          <p className="case-study-services-description type-body">
            {selectedCaseStudy.services}
          </p>
        </div>
        <div className="case-study-industry flex-row">
          <h2 className="case-study-industry-heading type-detail-regular text-grey">
            industry
          </h2>
          <p className="case-study-industry-description type-body">
            {selectedCaseStudy.industry}
          </p>
        </div>
        <div className="case-study-location flex-row">
          <h2 className="case-study-location-heading type-detail-regular text-grey">
            location
          </h2>
          <p className="case-study-location-description type-body">
            {selectedCaseStudy.location}
          </p>
        </div>
      </div>
    </section>
  );
}
