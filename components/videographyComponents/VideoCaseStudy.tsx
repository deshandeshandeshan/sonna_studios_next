import { HOME_QUERYResult } from "@/sanity/types";
import MuxPlayer from "@mux/mux-player-react";

import "./VideoCaseStudy.css";
import "../grid.css";

type videoCaseStudyProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "videoCaseStudy" }
>;

export function VideoCaseStudy({
  projectName,
  description,
  client,
  industry,
  location,
  video,
}: videoCaseStudyProps) {
  const playbackId = video?.asset?.playbackId ?? "";

  return (
    <section className="grid mobile-padding">
      <h1 className="video-case-study-title type-sub">{projectName}</h1>
      <p className="video-case-study-description type-sub text-grey">
        {description}
      </p>
      <div className="video-case-study-details">
        <div className="video-case-study-client video-case-study-flex-row spacing-16">
          <h2 className="type-body text-grey">Client:</h2>
          <p className="type-body">{client}</p>
        </div>
        <div className="video-case-study-industry video-case-study-flex-row spacing-16">
          <h2 className="type-body text-grey">Industry:</h2>
          <p className="type-body">{industry}</p>
        </div>
        <div className="video-case-study-location video-case-study-flex-row">
          <h2 className="type-body text-grey">Location:</h2>
          <p className="type-body">{location}</p>
        </div>
      </div>
      <div className="video-case-study-video">
        {playbackId ? (
          <div className="video-case-study-media video-case-study-mux-video-container">
            <MuxPlayer
              src={`https://stream.mux.com/${playbackId}.m3u8`}
              autoPlay
              muted
              loop
              playsInline
              className="video-case-study-mux-video-player"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
