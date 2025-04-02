import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type landingModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "landingModule" }
>;

export function LandingModule({ image, video }: landingModuleProps) {
  const videoUrl = video?.asset?.url ?? "";

  return (
    <section>
      <div>
        <h1>
          Sonna Studios
          <br />
          Photography & Videography
        </h1>
      </div>
      <div>
        {image ? (
          <Image
            src={urlFor(image).url()}
            width={1000}
            height={500}
            alt={image.caption || ""}
          />
        ) : (
          <p>No image available</p>
        )}
        {videoUrl ? (
          <video controls width="600">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>No video available</p>
        )}
      </div>
    </section>
  );
}
