"use client";

import { urlFor } from "@/sanity/lib/image";
import { useState, useEffect, useRef } from "react";
import { HOME_QUERYResult } from "@/sanity/types";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import "./LandingModule.css";
import Link from "next/link";
import MuxPlayerElement from "@mux/mux-player";
import { useInView } from "react-intersection-observer";

type LandingModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "landingModule" }
>;

export function LandingModule({ image, video }: LandingModuleProps) {
  const playbackId = video?.asset?.playbackId ?? "";

  const [activeMedia, setActiveMedia] = useState<"image" | "video">("image");

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
  });

  const playerRef = useRef<MuxPlayerElement | null>(null);

  useEffect(() => {
    if (inView && playerRef.current) {
      playerRef.current.play();
    }

    if (!inView && playerRef.current) {
      playerRef.current.pause();
    }
  }, [inView]);

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
              src={urlFor(image).auto("format").quality(90).url()}
              alt={image.alt || ""}
              width={2160}
              height={3840}
              priority
              placeholder="blur"
              blurDataURL={urlFor(image).width(10).blur(10).url()}
              className={`landing-media landing-module-image ${
                activeMedia === "image" ? "visible" : ""
              }`}
            />
          ) : null}
          {playbackId ? (
            <div
              ref={inViewRef}
              className={`landing-media mux-video-container ${
                activeMedia === "video" ? "visible" : ""
              }`}
            >
              <MuxPlayer
                ref={playerRef}
                playbackId={playbackId}
                autoPlay={false}
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
