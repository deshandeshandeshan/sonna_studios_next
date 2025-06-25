import { HOME_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity-utils";
import { PageBuilder } from "@/components/PageBuilder";
import { notFound } from "next/navigation";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { type Metadata } from "next";

export const revalidate = 5;

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch(HOME_QUERY);

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

export default async function Home() {
  const page = await client.fetch(HOME_QUERY);

  if (!page) {
    notFound();
  }

  return page?.content ? (
    <>
      <GoogleTagManager gtmId="GTM-KRGFGW5Z" />
      <Script
        id="hubspot-script"
        src="//js-ap1.hs-scripts.com/441814948.js"
        strategy="afterInteractive"
      />
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "ruhveaz6s0");
    `,
        }}
      />
      <PageBuilder content={page.content} />
    </>
  ) : null;
}
