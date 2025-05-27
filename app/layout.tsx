import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/interFont";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { getNavLinks } from "@/lib/getNavLinks";
import { SITE_SETTINGS } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity-utils";
import CookieBanner from "@/components/CookieBanner";
import { GoogleTagManager } from "@next/third-parties/google";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(SITE_SETTINGS);

  if (!settings) {
    return {
      title: "Home | Your Site Name",
      description: "Welcome to our website.",
    };
  }

  return {
    title: settings?.siteTitle ?? "SONNA STUDIOS",
    description:
      settings?.defaultDescription ??
      "Sonna Studios is a global events photography and videography company specializing in bespoke brand, corporate, and institutional coverage. With agile, high-quality production across Australia, New Zealand, Los Angeles, and London, we deliver premium visuals for launches, activations, and experiences.",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = await getNavLinks();

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-KRGFGW5Z" />
      <body>
        <Navbar links={navLinks} />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
