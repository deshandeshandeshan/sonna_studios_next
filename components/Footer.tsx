"use client";

// import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./Footer.css";
import "./grid.css";
import { FaArrowRight } from "react-icons/fa";

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
      <h2 className="footer-contact-heading mobile-type-detail-regular">
        Contact
      </h2>
      <div className="footer-contact">
        <div className="footer-contact-description medium-padding-bottom">
          <p className="mobile-type-body small-padding-bottom">
            Tell us about your project. For all enquiries, collaborations and
            commissions get in touch.
          </p>
          <Link href="/book" className="mobile-type-sub">
            Book Now <FaArrowRight />
          </Link>
        </div>
        <ul className="medium-padding-bottom mobile-type-sub text-grey">
          <li>hello@sonnastudios.com</li>
          <li>(+64) 27 376 9490</li>
        </ul>
        <ul className="mobile-type-sub text-grey">
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
      <div className="footer-timezone large-padding-top">
        <ul className="mobile-type-detail-regular">
          <li className="small-padding-bottom">
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
      <div className="footer-site-credits large-padding-top mobile-type-detail-regular">
        <p>Site Credits</p>
        <p>Design by Aitken Hawkins</p>
        <p>Build by Deshan McLachlan</p>
      </div>
      <div className="footer-privacy-policy mobile-type-detail-regular large-padding-top">
        <p>Privacy Policy</p>
        <p className="text-grey medium-padding-bottom">
          2024 © All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
