import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type brandModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "brandModule" }
>;

export function BrandModule({ clientName, image, text }: brandModuleProps) {
  return (
    <section>
      <h1>Selected Clients</h1>
      <h2>{clientName}</h2>
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
