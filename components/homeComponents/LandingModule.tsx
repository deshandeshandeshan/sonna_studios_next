import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import "./LandingModule.css";

type LandingModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "landingModule" }
>;

export function LandingModule({ image, video }: LandingModuleProps) {
  const playbackId = video?.asset?.playbackId ?? "";

  console.log(video);

  return (
    <section className="landing-module">
      <div className="landing-module-content">
        <div className="landing-module-text">
          <h1 className="landing-module-title type-heading">
            Sonna Studios
            <br />
            Photography & Videography
          </h1>

          <button className="landing-module-button link-button type-body">
            Make an Enquiry →
          </button>
        </div>
        <div>
          {image ? (
            <Image
              src={urlFor(image).url()}
              width={1000}
              height={500}
              alt={image.alt || ""}
              className="landing-module-image"
            />
          ) : null}
          {playbackId ? (
            // If playbackId exists, render Mux video
            <div className="mux-video-container">
              <MuxPlayer
                src={`https://stream.mux.com/${playbackId}.m3u8`} // Use playbackId for Mux video URL
                autoPlay
                muted
                loop
                playsInline
                className="mux-video-player"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
