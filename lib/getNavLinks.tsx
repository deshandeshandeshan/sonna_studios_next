import { client } from "@/sanity/sanity-utils";
import { NAVIGATION_QUERY } from "@/sanity/lib/queries";

export type NavLink = {
  title: string;
  slug: string;
};

export async function getNavLinks(): Promise<NavLink[]> {
  const rawLinks: { title: string | null; slug: string | null }[] =
    await client.fetch(NAVIGATION_QUERY);

  const filtered = rawLinks.filter(
    (link): link is NavLink =>
      typeof link.title === "string" && typeof link.slug === "string"
  );

  // Remove "Home" link (assuming slug = 'home')
  const linksWithoutHome = filtered.filter((link) => link.slug !== "home");

  // Define the desired order for the remaining links
  const order = ["photography", "videography", "capabilities", "book"];

  return linksWithoutHome.sort((a, b) => {
    const indexA = order.indexOf(a.slug);
    const indexB = order.indexOf(b.slug);

    // Default to alphabetical if not in the order list
    if (indexA === -1 && indexB === -1) return a.title.localeCompare(b.title);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  });
}
