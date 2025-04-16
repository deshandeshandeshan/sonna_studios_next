import { PageBuilder } from "@/components/PageBuilder";
import { PAGE_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity-utils";
import { notFound } from "next/navigation";

export const revalidate = 5;
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const page = await client.fetch(PAGE_QUERY, { slug: params.slug });

  if (!page) {
    notFound();
  }

  return page?.content ? <PageBuilder content={page.content} /> : null;
}
