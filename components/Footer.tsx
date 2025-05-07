import { client } from "@/sanity/sanity-utils";
import { FOOTER_SETTINGS } from "@/sanity/lib/queries";
import { FooterSettings } from "@/sanity/types";
import FooterClient from "./FooterClient";

export default async function Footer() {
  const footerSettings = await client.fetch<FooterSettings>(FOOTER_SETTINGS);

  return <FooterClient footerSettings={footerSettings} />;
}
