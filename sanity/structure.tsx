import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Sonna Website")
    .items([
      S.listItem()
        .title("Pages")
        .child(S.documentTypeList("page").title("Pages")),
      S.listItem()
        .id("navSettings")
        .schemaType("navSettings")
        .title("Navigation Settings")
        .child(
          S.editor()
            .id("navSettings")
            .schemaType("navSettings")
            .documentId("navSettings")
        ),
      S.listItem()
        .id("footerSettings")
        .schemaType("footerSettings")
        .title("Footer Settings")
        .child(
          S.editor()
            .id("footerSettings")
            .schemaType("footerSettings")
            .documentId("footerSettings")
        ),
    ]);
