import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type fullBlledProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "fullBleed" }
>;

export function FullBleed({ image, text }: fullBlledProps) {
  return (
    <section>
      {image ? (
        <Image
          src={urlFor(image).url()}
          width={1600}
          height={800}
          alt={image.caption || ""}
        />
      ) : null}
      <p>{text}</p>
    </section>
  );
}
