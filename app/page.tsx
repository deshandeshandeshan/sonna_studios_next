import { client } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export default async function Home() {
  const query = `*[_type == "page" && slug.current == "home"][0]`;
  const page = await client.fetch(query);

  if (!page) {
    notFound();
  }

  return (
    <div>
      <h1>{page.title}</h1>
      <PortableText value={page.content} />
    </div>
  );
}
