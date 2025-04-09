"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <nav className="flex gap-6 p-4">
      <Link href="/">
        <Image
          src="/NavLogo.png"
          alt="Home"
          width={100}
          height={40}
          className=""
        />
      </Link>
      {links.map((link) => (
        <Link key={link.slug} href={`/${link.slug}`}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
