"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <footer className="">
      <Image
        src="/FooterNav.png"
        alt="Footer Logo"
        width={600}
        height={100}
        className=""
      />
      <div>
        <div>
          <h2>Contact</h2>
          <p>
            Tell us about your project. For all enquiries, collaborations and
            commissions get in touch.
          </p>
          <Link href="/book">Book Now</Link>
        </div>
        <div>
          <p>hello@sonnastudios.com</p>
          <p>(+64) 27 376 9490</p>
          <Link href="/">Instagram</Link>
          <Link href="/">Facebook</Link>
          <Link href="/">LinkedIn</Link>
        </div>
        <div className="timezone"></div>
        <div>
          <h3>Site Credits</h3>
          <p>Design by Aitken Hawkins</p>
          <p>Build by Deshan McLachlan</p>
        </div>
        <div>
          <p>Privacy Policy</p>
          <p>2024 © All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
