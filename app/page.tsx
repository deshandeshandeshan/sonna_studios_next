import { HOME_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity-utils";
import { PageBuilder } from "@/components/PageBuilder";
import { notFound } from "next/navigation";

export const revalidate = 10;

export default async function Home() {
  const page = await client.fetch(HOME_QUERY);

  if (!page) {
    notFound();
  }

  return page?.content ? <PageBuilder content={page.content} /> : null;
}
