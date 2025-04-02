import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type imageLargeLeftProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "imageLargeLeft" }
>;

export function ImageLargeLeft({ leftImage, rightImage }: imageLargeLeftProps) {
  return (
    <section>
      <div>
        <div>
          {leftImage ? (
            <Image
              src={urlFor(leftImage).url()}
              width={1600}
              height={800}
              alt={leftImage.caption || ""}
            />
          ) : null}
          {leftImage?.caption && (
            <div>
              <p>{leftImage.caption}</p>
            </div>
          )}
        </div>
        <div>
          {rightImage ? (
            <Image
              src={urlFor(rightImage).url()}
              width={1600}
              height={800}
              alt={rightImage.caption || ""}
            />
          ) : null}
          {rightImage?.caption && (
            <div>
              <p>{rightImage.caption}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
