"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./Nav.css";
import BlackLogo from "@/public/Black-Logo.svg";
import { DateTime } from "luxon";

interface NavLink {
  title: string;
  slug: string;
}

type City = {
  name: string;
  timeZone: string;
};

const cities: City[] = [
  { name: "Auckland, New Zealand", timeZone: "Pacific/Auckland" },
  { name: "Sydney, Australia", timeZone: "Australia/Sydney" },
];

export default function Navbar({ links }: { links: NavLink[] }) {
  const [isClient, setIsClient] = useState(false);
  const [routerPath, setRouterPath] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [times, setTimes] = useState(() =>
    cities.map(({ timeZone }) => DateTime.now().setZone(timeZone))
  );

  useEffect(() => {
    setIsClient(true);
    setRouterPath(window.location.pathname);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const interval = setInterval(() => {
      setTimes(cities.map(({ timeZone }) => DateTime.now().setZone(timeZone)));
    }, 1000);

    return () => clearInterval(interval);
  }, [menuOpen]);

  if (!isClient || routerPath.includes("/admin")) return null;

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <Link href="/">
            <BlackLogo className="nav-logo" aria-label="Company Logo" />
          </Link>
          <div className="nav-links">
            {links.map((link) => (
              <Link
                className="type-body"
                key={link.slug}
                href={`/${link.slug}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <button
            className="menu-button type-body"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="menu-overlay">
          <div className="overlay-links">
            {links.map((link) => (
              <Link
                className="type-heading"
                key={link.slug}
                href={`/${link.slug}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="overlay-time-zone">
            <ul className="type-detail-regular">
              {cities.map((city, index) => {
                const time = times[index];
                return (
                  <li key={city.name} className="spacing-16">
                    <p>{city.name}</p>
                    <p>{time.toFormat("hh:mm:ss a")}</p>
                    <p className="text-grey">
                      {time.toFormat("EEEE, dd LLLL yyyy")}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="overlay-contact">
            <ul className="type-detail-regular text-grey">
              <li>
                <a href="mailto:hello@sonnastudios.com">
                  hello@sonnastudios.com
                </a>
              </li>
              <li>
                <a href="tel:+64212301922">(+64) 21 230 1922</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
