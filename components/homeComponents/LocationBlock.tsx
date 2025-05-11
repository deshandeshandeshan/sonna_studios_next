"use client";

import { useEffect, useState } from "react";
import { HOME_QUERYResult } from "@/sanity/types";
import "./LocationBlock.css";
import "../grid.css";
import { DateTime } from "luxon";

type locationBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "locationBlock" }
>;

type City = {
  name: string;
  timeZone: string;
};

const cities: City[] = [
  { name: "Auckland, New Zealand", timeZone: "Pacific/Auckland" },
  { name: "Sydney, Australia", timeZone: "Australia/Sydney" },
  { name: "Melbourne, Australia", timeZone: "Australia/Melbourne" },
  { name: "Brisbane, Australia", timeZone: "Australia/Brisbane" },
  { name: "Gold Coast, Australia", timeZone: "Australia/Brisbane" },
  { name: "London, UK", timeZone: "Europe/London" },
  { name: "Los Angeles, California", timeZone: "America/Los_Angeles" },
];

export function LocationBlock({ title, text }: locationBlockProps) {
  const [times, setTimes] = useState(() =>
    cities.map(({ timeZone }) => DateTime.now().setZone(timeZone))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimes(cities.map(({ timeZone }) => DateTime.now().setZone(timeZone)));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid mobile-padding">
      <div className="spacing-64 location-heading">
        <h2 className="type-detail-regular">{title}</h2>
        <p className="type-heading">{text}</p>
      </div>
      <ul className="location-list">
        {cities.map((city, index) => {
          const time = times[index];
          return (
            <li key={city.name} className="type-body spacing-32">
              <p>{city.name}</p>
              <p>{time.toFormat("hh:mm:ss a")}</p>
              <p className="text-grey">{time.toFormat("EEEE, dd LLLL yyyy")}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
