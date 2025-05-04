"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import WhiteLogo from "@/public/White-Logo.svg";
import { client } from "@/sanity/sanity-utils";
import { FOOTER_SETTINGS } from "@/sanity/lib/queries";

import "./Footer.css";
import "./grid.css";

interface SocialLink {
  platform: string;
  url: string;
}

interface FooterSettings {
  email: string;
  phoneNumber: string;
  socialLinks: SocialLink[];
  copyright: string;
}

export default function Footer() {
  const [isClient, setIsClient] = useState(false);
  const [routerPath, setRouterPath] = useState<string>("");
  const [footerSettings, setFooterSettings] = useState<FooterSettings | null>(
    null
  );

  // Check if we are on the client-side by using typeof window
  useEffect(() => {
    setIsClient(true);
    setRouterPath(window.location.pathname);

    // Fetch footer settings from Sanity
    client
      .fetch(FOOTER_SETTINGS) // Sanity query to fetch the first document of type "footerSettings"
      .then((data) => setFooterSettings(data))
      .catch(console.error); // Log any errors for debugging
  }, []);

  // Skip rendering the footer if it's the Sanity Studio admin page
  if (!isClient || routerPath.includes("/admin")) return null;

  if (!footerSettings) return <footer>Loading...</footer>;

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
            {footerSettings.socialLinks.map((social, index) => {
              if (!social.url) return null; // Skip invalid links
              return (
                <li key={index}>
                  <a href={social.url}>{social.platform}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-timezone spacing-120">
          <ul className="type-detail-regular">
            <li className="spacing-16">
              <p>Auckland, New Zealand</p>
              <p>12:49:03</p>
              <p className="text-grey">Friday, 10 Janruary 2025</p>
            </li>
            <li>
              <p>Sydney, Australia</p>
              <p>8:49:03</p>
              <p className="text-grey">Friday, 10 Janruary 2025</p>
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
