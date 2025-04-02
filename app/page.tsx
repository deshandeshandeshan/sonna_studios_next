import { HOME_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity-utils";
import { PageBuilder } from "@/components/PageBuilder";
import { notFound } from "next/navigation";

export default async function Home() {
  const page = await client.fetch(HOME_QUERY);

  if (!page) {
    notFound();
  }

  console.log("Page data:", page); // Log the fetched page data

  return page?.content ? <PageBuilder content={page.content} /> : null;
}
