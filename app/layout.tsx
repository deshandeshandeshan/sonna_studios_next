import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Nav";
import { getNavLinks } from "@/lib/getNavLinks";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SONNA STUDIOS",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = await getNavLinks();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar links={navLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
