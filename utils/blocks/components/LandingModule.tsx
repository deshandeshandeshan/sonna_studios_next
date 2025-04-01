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
      <div />
      {image ? (
        <Image
          src={urlFor(image).width(200).url()}
          width={1600}
          height={800}
          alt=""
        />
      ) : null}
    </section>
  );
}
