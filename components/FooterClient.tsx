"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import WhiteLogo from "@/public/White-Logo.svg";
import { FooterSettings } from "@/sanity/types";

import "./Footer.css";
import "./grid.css";

type Props = {
  footerSettings: FooterSettings;
};

type SocialLink = NonNullable<FooterSettings["socialLinks"]>[number];

export default function FooterClient({ footerSettings }: Props) {
  const [isClient, setIsClient] = useState(false);
  const [routerPath, setRouterPath] = useState("");

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
            {/* <li className="spacing-16">
              <p>Auckland, New Zealand</p>
              <p>12:49:03</p>
              <p className="text-grey">Friday, 10 January 2025</p>
            </li>
            <li>
              <p>Sydney, Australia</p>
              <p>8:49:03</p>
              <p className="text-grey">Friday, 10 January 2025</p>
            </li> */}
            <li className="spacing-16">
              <p>Auckland</p>
              <p className="text-grey">New Zealand</p>
            </li>
            <li>
              <p>Sydney</p>
              <p className="text-grey">Australia</p>
            </li>
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
