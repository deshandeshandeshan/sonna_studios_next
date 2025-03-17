import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("SONNA Studios")
    .items([
      S.documentTypeListItem("page").title("Pages"),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["page"].includes(item.getId()!)
      ),
    ]);
