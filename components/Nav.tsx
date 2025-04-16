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
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="menu-overlay">
          <button
            className="close-button type-body"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>
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
        </div>
      )}
    </>
  );
}
