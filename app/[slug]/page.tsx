import { PageBuilder } from "@/components/PageBuilder";
import { PAGE_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity-utils";
import { notFound } from "next/navigation";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { type Metadata } from "next";

export const revalidate = 5;
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const page = await client.fetch(PAGE_QUERY, { slug });

  if (!page) {
    return {
      title: "Home | SONNA STUDIOS",
      description: "Welcome to SONNA STUDIOS.",
    };
  }

  return {
    title: page.seo?.title ?? `${page.title} | SONNA STUDIOS`,
    description: page.seo?.description ?? "Welcome to SONNA STUDIOS.",
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const slug = params.slug;
  const page = await client.fetch(PAGE_QUERY, { slug });

  if (!page) {
    notFound();
  }

  const firstModule = page?.content?.[0]?._type;
  const hasLandingSpacing = firstModule !== "fullScreenHeaderImage";
  const wrapperClass = hasLandingSpacing ? "landing-content-spacing" : "";

  const isPhotography = slug === "photography";

  return page?.content ? (
    <div className={wrapperClass}>
      <GoogleTagManager gtmId="GTM-KRGFGW5Z" />
      <Script
        id="hubspot-script"
        src="//js-ap1.hs-scripts.com/441814948.js"
        strategy="afterInteractive"
      />
      <PageBuilder
        content={page.content}
        className={`page-builder${isPhotography ? " photography" : ""}`}
      />
    </div>
  ) : null;
}
