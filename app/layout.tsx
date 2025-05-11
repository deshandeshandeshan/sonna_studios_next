import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/interFont";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { getNavLinks } from "@/lib/getNavLinks";
import { SITE_SETTINGS } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity-utils";
import CookieBanner from "@/components/CookieBanner";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(SITE_SETTINGS);

  const siteTitle = settings?.siteTitle || "SONNA STUDIOS";
  const description = settings?.defaultDescription || "";
  const keywords = settings?.metaKeywords || [];
  const favicon = settings?.favicon?.asset?.url ?? "/favicon.ico";
  const ogImage = settings?.defaultImage?.asset?.url ?? "";
  const appleIcon = "/apple-icon.png";
  const manifest = "/manifest.webmanifest";

  return {
    title: {
      default: siteTitle,
      template: `%s | ${siteTitle}`,
    },
    description,
    keywords,
    icons: {
      icon: favicon,
      apple: appleIcon,
    },
    manifest,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
    other: {
      "apple-mobile-web-app-title": siteTitle,
    },
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
      <body>
        <Navbar links={navLinks} />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
