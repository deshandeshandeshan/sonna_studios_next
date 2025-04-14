import { HOME_QUERYResult } from "@/sanity/types";
import "./LargeText.css";
import "../grid.css";

type largeTextProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "largeText" }
>;

export function LargeText({ text }: largeTextProps) {
  return (
    <div className="large-text-container grid">
      <h2 className="large-text mobile-type-heading">{text}</h2>
    </div>
  );
}
