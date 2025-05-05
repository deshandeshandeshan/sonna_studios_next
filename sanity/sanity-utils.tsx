import { createClient, defineQuery } from "next-sanity";

export async function getPages() {
  const client = createClient({
    projectId: "qzoemo7f",
    dataset: "production",
    apiVersion: "2025-03-11",
    useCdn: process.env.NODE_ENV === "production",
  });

  return client.fetch(
    defineQuery(`*[_type == "page" && slug.current == "/"]{...}`)
  );
}

export const client = createClient({
  projectId: "qzoemo7f",
  dataset: "production",
  apiVersion: "2025-03-11",
  useCdn: true,
});
