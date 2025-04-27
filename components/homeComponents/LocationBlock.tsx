import { HOME_QUERYResult } from "@/sanity/types";
import "./LocationBlock.css";
import "../grid.css";

type locationBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "locationBlock" }
>;

export function LocationBlock({ title, text }: locationBlockProps) {
  return (
    <section className="grid mobile-padding">
      <div className="spacing-64 location-heading">
        <h2 className="type-detail-regular">{title}</h2>
        <p className="type-heading">{text}</p>
      </div>
      <ul className="location-list">
        <li className="type-body spacing-32">
          <p>Auckland, New Zealand</p>
          <p>12:49:03</p>
          <p className="text-grey">Friday, 10 Janruary 2025</p>
        </li>
        <li className="type-body spacing-32">
          <p>Sydney, Australia</p>
          <p>8:49:03</p>
          <p className="text-grey">Friday, 10 Janruary 2025</p>
        </li>
        <li className="type-body spacing-32">
          <p>Auckland, New Zealand</p>
          <p>12:49:03</p>
          <p className="text-grey">Friday, 10 Janruary 2025</p>
        </li>
        <li className="type-body spacing-32">
          <p>Sydney, Australia</p>
          <p>8:49:03</p>
          <p className="text-grey">Friday, 10 Janruary 2025</p>
        </li>
      </ul>
    </section>
  );
}
