import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type landscapeProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "landscape" }
>;

export function Landscape({ image }: landscapeProps) {
  return (
    <section>
      <div>
        {image ? (
          <Image
            src={urlFor(image).url()}
            width={1600}
            height={800}
            alt={image.caption || ""}
          />
        ) : null}
        {image?.caption && (
          <div>
            <p>{image.caption}</p>
          </div>
        )}
      </div>
    </section>
  );
}
