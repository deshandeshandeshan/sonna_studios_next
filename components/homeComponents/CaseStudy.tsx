import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type caseStudyProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "caseStudy" }
>;

export function CaseStudy({ caseStudies }: caseStudyProps) {
  if (!Array.isArray(caseStudies) || caseStudies.length === 0) return null;
  return (
    <section>
      {caseStudies.map((caseStudy) => (
        <div key={caseStudy.client}>
          <div>
            <div>
              <h2>Client</h2>
              <p>{caseStudy.client}</p>
            </div>
            <div>
              <h2>Services</h2>
              <p>{caseStudy.services}</p>
            </div>
            <div>
              <h2>industry</h2>
              <p>{caseStudy.industry}</p>
            </div>
            <div>
              <h2>location</h2>
              <p>{caseStudy.location}</p>
            </div>
          </div>
          {caseStudy.image?.asset?.url && (
            <Image
              src={urlFor(caseStudy.image).url()}
              width={1600}
              height={800}
              alt={caseStudy.image.caption || ""}
            />
          )}
        </div>
      ))}
    </section>
  );
}
