import { HOME_QUERYResult } from "@/sanity/types";
import { LandingModule } from "./LandingModule";

type PageBuilderProps = {
  content: NonNullable<HOME_QUERYResult>["content"];
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <div>
      {content.map((block) => {
        switch (block._type) {
          case "landingModule":
            return <LandingModule key={block._key} {...block} />;
          // Add more cases for different block types as needed
          default:
            return <div key={block._key}>Block not found: {block._type}</div>;
        }
      })}
    </div>
  );
}
