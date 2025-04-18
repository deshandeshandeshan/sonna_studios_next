import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./LandingModule.css";
import { FaArrowRight } from "react-icons/fa";

type landingModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "landingModule" }
>;

export function LandingModule({ image, video }: landingModuleProps) {
  const videoUrl = video?.asset?.url ?? "";

  return (
    <section className="landing-module">
      <div className="landing-module-content">
        <h1 className="landing-module-title type-heading">
          Sonna Studios
          <br />
          Photography & Videography
        </h1>
        <button className="landing-module-button link-button type-body">
          Make an Enquiry
          <div className="arrow-right">
            <FaArrowRight />
          </div>
        </button>
        <div>
          {image ? (
            <Image
              src={urlFor(image).url()}
              width={1000}
              height={500}
              alt={image.caption || ""}
              className="landing-module-image"
            />
          ) : null}
          {videoUrl ? (
            <video controls width="600">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
        </div>
      </div>
    </section>
  );
}
