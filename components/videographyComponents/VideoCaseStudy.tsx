import { HOME_QUERYResult } from "@/sanity/types";

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
  const videoUrl = video?.asset?.url ?? "";

  return (
    <section>
      <div>
        <h1>{projectName}</h1>
        <p>{description}</p>
      </div>
      <div>
        <h2>Client: {client}</h2>
        <h2>Industry: {industry}</h2>
        <h2>Location: {location}</h2>
      </div>
      <div>
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
