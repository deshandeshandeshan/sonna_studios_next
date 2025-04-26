import { HOME_QUERYResult } from "@/sanity/types";
import "../grid.css";

type bookingBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "bookingBlock" }
>;

export function BookingBlock({}: bookingBlockProps) {
  return <section className="grid"></section>;
}
