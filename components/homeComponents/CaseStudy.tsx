"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";
import "../grid.css";
import "./CaseStudy.css";
import Link from "next/link";

type caseStudyProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "caseStudy" }
>;

export function CaseStudy({ caseStudies }: caseStudyProps) {
  const validCaseStudy =
    Array.isArray(caseStudies) && caseStudies.length > 0 ? caseStudies : [];

  const [selectedCaseStudy, setSelectedCaseStudy] = useState(
    validCaseStudy.length > 0 ? validCaseStudy[0] : null
  );

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
                src={urlFor(caseStudy.image).width(300).height(300).url()}
                width={300}
                height={300}
                alt={caseStudy.image.alt || ""}
                className="case-study-img"
              />
            )}
          </button>
        ))}
      </div>
      {selectedCaseStudy.image && selectedCaseStudy.image.asset?.url && (
        <Image
          src={urlFor(selectedCaseStudy.image).width(1200).height(1200).url()}
          width={1200}
          height={1200}
          alt={selectedCaseStudy.image.alt || ""}
          className="case-study-img-large"
        />
      )}
      <Link
        href={"/photography"}
        className="case-study-button link-button type-body"
      >
        View Photography →
      </Link>
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
