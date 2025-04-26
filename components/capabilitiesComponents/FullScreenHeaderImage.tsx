import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type fullScreenHeaderImageProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "fullScreenHeaderImage" }
>;

export function FullScreenHeaderImage({ image }: fullScreenHeaderImageProps) {
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
    </section>
  );
}
