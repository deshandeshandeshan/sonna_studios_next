import { client } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const query = `*[_type == "page" && slug.current == $slug][0]`;
  const page = await client.fetch(query, { slug: slug });

  if (!page) {
    notFound(); // Returns a 404 page if no content is found
  }
  console.log(page); // Log the fetched page data for debugging
  return (
    <div>
      <h1>{page.title}</h1>
      <PortableText value={page.content} />
    </div>
  );
}
