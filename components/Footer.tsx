"use client";

// import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./Footer.css";
import "./grid.css";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);
  const [routerPath, setRouterPath] = useState<string>("");

  // Check if we are on the client-side by using typeof window
  useEffect(() => {
    setIsClient(true);
    // After mounting, we can safely access the router
    setRouterPath(window.location.pathname);
  }, []);

  // Skip rendering the footer if it's the Sanity Studio admin page
  if (!isClient || routerPath.includes("/admin")) return null;

  return (
    <footer className="footer-container grid section-padding-top">
      {/* <div className="footer-logo">
        <Image
          src="/FooterNav.png"
          alt="Footer Logo"
          width={600}
          height={100}
          className="footer-logo-img"
        />
      </div> */}
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
            <li>hello@sonnastudios.com</li>
            <li>(+64) 27 376 9490</li>
          </ul>
          <ul className="type-body text-grey">
            <li>
              <Link href="/">Instagram</Link>
            </li>
            <li>
              <Link href="/">Facebook</Link>
            </li>
            <li>
              <Link href="/">LinkedIn</Link>
            </li>
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
          <p className="text-grey spacing-80">2024 © All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
