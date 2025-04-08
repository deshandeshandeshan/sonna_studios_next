import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Pages")
    .items([
      S.listItem()
        .title("Pages")
        .child(S.documentTypeList("page").title("Pages")),
      S.listItem()
        .id("siteSettings")
        .schemaType("siteSettings")
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
    ]);
