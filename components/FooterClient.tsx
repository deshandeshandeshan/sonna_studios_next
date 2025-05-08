"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import WhiteLogo from "@/public/White-Logo.svg";
import { FooterSettings } from "@/sanity/types";
import { DateTime } from "luxon";

import "./Footer.css";
import "./grid.css";

type Props = {
  footerSettings: FooterSettings;
};

type City = {
  name: string;
  timeZone: string;
};

const cities: City[] = [
  { name: "Auckland, New Zealand", timeZone: "Pacific/Auckland" },
  { name: "Sydney, Australia", timeZone: "Australia/Sydney" },
];

type SocialLink = NonNullable<FooterSettings["socialLinks"]>[number];

export default function FooterClient({ footerSettings }: Props) {
  const [isClient, setIsClient] = useState(false);
  const [routerPath, setRouterPath] = useState("");
  const [times, setTimes] = useState(() =>
    cities.map(({ timeZone }) => DateTime.now().setZone(timeZone))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimes(cities.map(({ timeZone }) => DateTime.now().setZone(timeZone)));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsClient(true);
    setRouterPath(window.location.pathname);
  }, []);

  if (!isClient || routerPath.includes("/admin")) return null;

  return (
    <footer className="footer-container grid section-padding-top">
      <div className="footer-logo">
        <WhiteLogo className="footer-logo-svg" aria-label="Company Logo" />
      </div>
      <h2 className="footer-contact-heading type-detail-regular">Contact</h2>
      <div className="footer-details">
        <div className="footer-contact spacing-64">
          <div className="footer-contact-description spacing-40">
            <p className="type-body spacing-16">
              Tell us about your project. For all enquiries, collaborations and
              commissions get in touch.
            </p>
            <Link href="/book" className="type-body">
              Book Now →
            </Link>
          </div>
          <ul className="spacing-40 type-body text-grey">
            <li>{footerSettings.email}</li>
            <li>{footerSettings.phoneNumber}</li>
          </ul>
          <ul className="type-body text-grey">
            {footerSettings.socialLinks?.map((social: SocialLink) => {
              if (!social.url) return null;
              return (
                <li key={social._key}>
                  <a href={social.url}>{social.platform}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-timezone spacing-120">
          <ul className="type-detail-regular">
            {cities.map((city, index) => {
              const time = times[index];
              return (
                <li key={city.name} className="spacing-16">
                  <p>{city.name}</p>
                  <p>{time.toFormat("HH:mm:ss")}</p>
                  <p className="text-grey">
                    {time.toFormat("EEEE, dd LLLL yyyy")}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-site-credits type-detail-regular spacing-64">
          <p>Site Credits</p>
          <p>Design by Aitken Hawkins</p>
          <p>Build by Deshan McLachlan</p>
        </div>
        <div className="footer-privacy-policy type-detail-regular">
          <p>Privacy Policy</p>
          <p className="text-grey">{footerSettings.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
