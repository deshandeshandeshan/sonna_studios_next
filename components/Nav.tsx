"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./Nav.css";

interface NavLink {
  title: string;
  slug: string;
}

export default function Navbar({ links }: { links: NavLink[] }) {
  const [isClient, setIsClient] = useState(false);
  const [routerPath, setRouterPath] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setRouterPath(window.location.pathname);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  if (!isClient || routerPath.includes("/admin")) return null;

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <Link href="/">
            <Image
              src="/NavLogo.png"
              alt="Home"
              width={100}
              height={40}
              className="nav-logo"
            />
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
                className="type-body"
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
          <div className="overlay-contact">
            <ul className="type-detail-regular text-grey">
              <li>hello@sonnastudios.com</li>
              <li>(+64) 27 376 9490</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
