"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";

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
    <section>
      {validCaseStudy.map((caseStudy) => (
        <button
          key={caseStudy.client}
          onClick={() => setSelectedCaseStudy(caseStudy)}
          className={`px-4 py-2 border rounded ${
            selectedCaseStudy.client === caseStudy.client
              ? "text-black"
              : "text-grey"
          }`}
        >
          {caseStudy.image && caseStudy.image.asset?.url && (
            <Image
              src={urlFor(caseStudy.image).url()}
              width={300}
              height={200}
              alt={caseStudy.image.caption || ""}
            />
          )}
        </button>
      ))}
      {selectedCaseStudy.image && selectedCaseStudy.image.asset?.url && (
        <Image
          src={urlFor(selectedCaseStudy.image).url()}
          width={300}
          height={200}
          alt={selectedCaseStudy.image.caption || ""}
        />
      )}
      <div key={selectedCaseStudy.client}>
        <div>
          <div>
            <h2>Client</h2>
            <p>{selectedCaseStudy.client}</p>
          </div>
          <div>
            <h2>Services</h2>
            <p>{selectedCaseStudy.services}</p>
          </div>
          <div>
            <h2>industry</h2>
            <p>{selectedCaseStudy.industry}</p>
          </div>
          <div>
            <h2>location</h2>
            <p>{selectedCaseStudy.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
