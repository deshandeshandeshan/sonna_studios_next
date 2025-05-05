import Link from "next/link";
import WhiteLogo from "@/public/White-Logo.svg";
import { client } from "@/sanity/sanity-utils";
import { FOOTER_SETTINGS } from "@/sanity/lib/queries";
import { FooterSettings } from "@/sanity/types";

import "./Footer.css";
import "./grid.css";

export default async function Footer() {
  const footerSettings = await client.fetch<FooterSettings>(FOOTER_SETTINGS);
  type SocialLink = NonNullable<FooterSettings["socialLinks"]>[number];

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
