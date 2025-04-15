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

  useEffect(() => {
    setIsClient(true);

    setRouterPath(window.location.pathname);
  }, []);

  if (!isClient || routerPath.includes("/admin")) return null;

  return (
    <nav className="nav">
      <Link href="/">
        <Image
          src="/NavLogo.png"
          alt="Home"
          width={100}
          height={40}
          className="nav-logo"
        />
      </Link>
      {links.map((link) => (
        <Link className="type-body" key={link.slug} href={`/${link.slug}`}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
