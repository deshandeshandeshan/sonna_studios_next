import { HOME_QUERYResult } from "@/sanity/types";
import "./LargeImage.css";
import "../grid.css";

type locationBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "locationBlock" }
>;

export function LocationBlock({}: locationBlockProps) {
  return <section className="grid"></section>;
}
