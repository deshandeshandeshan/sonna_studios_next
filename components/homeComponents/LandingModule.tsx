import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type landingModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "landingModule" }
>;

export function LandingModule({ image }: landingModuleProps) {
  return (
    <section>
      <div>
        <h1>
          Sonna Studios
          <br />
          Photography & Videography
        </h1>
      </div>
      {image ? (
        <Image
          src={urlFor(image).url()}
          width={1000}
          height={500}
          alt={image.caption || ""}
        />
      ) : null}
    </section>
  );
}
