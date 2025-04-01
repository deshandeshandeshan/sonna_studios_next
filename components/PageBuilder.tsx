import { HOME_QUERYResult } from "@/sanity/types";
import { LandingModule } from "./homeComponents/LandingModule";
import { FullBleed } from "./homeComponents/FullBleed";

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
          case "fullBleed":
            return <FullBleed key={block._key} {...block} />;
          case "largeText":
            return <div key={block._key}>{block.text}</div>;
          // Add more cases for different block types as needed
          default:
            return <div key={block._key}>Block not found: {block._type}</div>;
        }
      })}
    </div>
  );
}
