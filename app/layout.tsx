import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/interFont";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { getNavLinks } from "@/lib/getNavLinks";
import { SITE_SETTINGS } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity-utils";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(SITE_SETTINGS);

  if (!settings) {
    return {
      title: {
        default: "SONNA STUDIOS",
        template: `%s | SONNA STUDIOS`,
      },
      description: "",
      keywords: [],
      icons: {
        icon: "/favicon.ico",
      },
      openGraph: {
        images: [],
      },
    };
  }

  return {
    title: {
      default: settings.siteTitle || "SONNA STUDIOS",
      template: `%s | ${settings.siteTitle || "SONNA STUDIOS"}`,
    },
    description: settings.defaultDescription || "",
    keywords: settings.metaKeywords || [],
    icons: {
      icon: settings.favicon?.asset?.url ?? "/favicon.ico",
    },
    openGraph: {
      images: settings.defaultImage?.asset?.url
        ? [settings.defaultImage.asset.url]
        : [],
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
      </body>
    </html>
  );
}
