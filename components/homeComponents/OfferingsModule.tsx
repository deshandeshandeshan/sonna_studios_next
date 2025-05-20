"use client";

import { useEffect, useRef, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "../grid.css";
import "./OfferingsModule.css";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import MuxPlayerElement from "@mux/mux-player";
import { useInView } from "react-intersection-observer";

type offeringsModuleProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "offeringsModule" }
>;

export function OfferingsModule({ services }: offeringsModuleProps) {
  const validServices =
    Array.isArray(services) && services.length > 0 ? services : [];

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && playerRef.current) {
      playerRef.current.play();
    }

    if (!inView && playerRef.current) {
      playerRef.current.pause();
    }
  }, [inView]);

  const playerRef = useRef<MuxPlayerElement | null>(null);

  const [selectedService, setSelectedService] = useState(
    validServices.length > 0 ? validServices[0] : null
  );

  if (!selectedService) return null;

  return (
    <section className="offerings-container grid mobile-padding">
      <h1 className="services-title type-body text-grey">Services</h1>
      <div className="services-list-container spacing-12">
        {validServices.map((service) => (
          <button
            key={service.name}
            onClick={() => setSelectedService(service)}
            className={`type-body ${
              selectedService.name === service.name ? "text-black" : "text-grey"
            }`}
          >
            {service.name}
          </button>
        ))}
        <Link
          href="/capabilities"
          className="offerings-learn-more type-body text-grey"
        >
          Learn more →
        </Link>
      </div>
      <hr className="solid-hr small-margin-bottom" />
      <div className="services-description-container ">
        <p className="services-description type-heading spacing-120">
          {selectedService.description}
        </p>
      </div>
      {selectedService.image?.asset?.url ? (
        <Image
          src={urlFor(selectedService.image).url()}
          width={1600}
          height={800}
          alt={selectedService.image.alt || ""}
          className="services-img"
        />
      ) : selectedService.video?.asset?.playbackId ? (
        <div ref={inViewRef} className="offerings-mux-video-container">
          <MuxPlayer
            playbackId={selectedService.video.asset.playbackId}
            ref={playerRef}
            autoPlay={false}
            muted
            loop
            playsInline
            className="offerings-mux-video-player"
          />
        </div>
      ) : null}
    </section>
  );
}
