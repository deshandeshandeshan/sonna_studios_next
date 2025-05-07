import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./FullScreenHeaderImage.css";

type fullScreenHeaderImageProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "fullScreenHeaderImage" }
>;

export function FullScreenHeaderImage({
  image,
  description,
}: fullScreenHeaderImageProps) {
  return (
    <section>
      <div className="header-image">
        {image ? (
          <Image
            src={urlFor(image).width(3840).auto("format").quality(85).url()}
            width={3840}
            height={2160}
            alt={image.caption || ""}
            className="header-img caption-spacing"
          />
        ) : null}
        <p className="type-heading mobile-padding">{description}</p>
      </div>
    </section>
  );
}
