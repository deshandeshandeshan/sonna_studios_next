import { PAGE_QUERYResult } from "@/sanity/types";
import "../grid.css";

type brandBlockProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "brandsBlock" }
>;

export function BrandsBlock({}: brandBlockProps) {
  return <section className="grid"></section>;
}
