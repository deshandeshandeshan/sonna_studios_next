import React from "react";

type MuxVideoProps = {
  playbackId: string;
  height?: string;
};

export default function MuxVideo({ playbackId, height }: MuxVideoProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: height,
        overflow: "hidden",
      }}
    >
      <video
        src={`https://stream.mux.com/${playbackId}.m3u8`}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
