import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  // S.list()
  //   .title("SONNA Studios")
  //   .items([
  //     S.documentTypeListItem("page").title("Pages"),
  //     ...S.documentTypeListItems().filter(
  //       (item) => item.getId() && !["page"].includes(item.getId()!)
  //     ),
  //   ]);

  // S.list()
  //   .title("Pages")
  //   .items([
  //     S.documentTypeListItem("homePage").title("Home Page"),
  //     S.documentTypeListItem("photographyPage").title("Photography Page"),
  //     S.documentTypeListItem("videographyPage").title("Videography Page"),
  //     S.documentTypeListItem("capabilitiesPage").title("Capabilities Page"),
  //     S.documentTypeListItem("bookPage").title("Book Page"),
  //   ]);

  S.list()
    .title("Pages")
    .items([
      S.listItem()
        .title("Pages")
        .child(S.documentTypeList("page").title("Pages")),
    ]);
