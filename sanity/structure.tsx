import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Pages")
    .items([
      S.listItem()
        .title("Pages")
        .child(S.documentTypeList("page").title("Pages")),
    ]);
