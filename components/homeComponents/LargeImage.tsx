import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type largeImageProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "largeImage" }
>;

export function LargeImage({ image, text }: largeImageProps) {
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
      </div>
      <div>
        <p>{text}</p>
      </div>
    </section>
  );
}
