import { HOME_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity-utils";
import { PageBuilder } from "@/components/PageBuilder";
import { notFound } from "next/navigation";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export const revalidate = 5;

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
      <PageBuilder content={page.content} />
    </>
  ) : null;
}
