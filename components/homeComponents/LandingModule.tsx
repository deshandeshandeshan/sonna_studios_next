"use client";

import { urlFor } from "@/sanity/lib/image";
import { useState, useEffect } from "react";
import { HOME_QUERYResult } from "@/sanity/types";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import "./LandingModule.css";
import Link from "next/link";

type LandingModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "landingModule" }
>;

export function LandingModule({ image, video }: LandingModuleProps) {
  const playbackId = video?.asset?.playbackId ?? "";

  const [activeMedia, setActiveMedia] = useState<"image" | "video">("image");

  useEffect(() => {
    if (playbackId) {
      setActiveMedia("image");
    }
  }, [playbackId]);

  return (
    <section className="landing-module">
      <div className="landing-module-content">
        <div className="landing-module-text">
          <h1 className="landing-module-title type-heading">
            Sonna Studios
            <br />
            <span
              onMouseEnter={() => setActiveMedia("image")}
              className={`hover-target text-grey ${
                activeMedia === "image" ? "active-text" : ""
              }`}
            >
              Photography
            </span>
            &nbsp;&&nbsp;
            <span
              onMouseEnter={() => playbackId && setActiveMedia("video")}
              className={`hover-target text-grey ${
                activeMedia === "video" ? "active-text" : ""
              } ${!playbackId ? "disabled" : ""}`}
            >
              Videography
            </span>
          </h1>
          <Link href={"/book"}>
            <button className="landing-module-button link-button type-body">
              Make an Enquiry →
            </button>
          </Link>
        </div>
        <div className="media-wrapper">
          {image ? (
            <Image
              src={urlFor(image).width(3840).auto("format").quality(85).url()}
              alt={image.alt || ""}
              fill
              priority // ensures fast LCP for landing images
              className={`landing-media landing-module-image ${
                activeMedia === "image" ? "visible" : ""
              }`}
            />
          ) : null}
          {playbackId ? (
            <div
              className={`landing-media mux-video-container ${
                activeMedia === "video" ? "visible" : ""
              }`}
            >
              <MuxPlayer
                src={`https://stream.mux.com/${playbackId}.m3u8`}
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
