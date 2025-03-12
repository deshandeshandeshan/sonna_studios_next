import { defineType, defineArrayMember } from "sanity";

export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "array",
  of: [
    defineArrayMember({ type: "fullBleed" }),
    defineArrayMember({ type: "horizontalImageScroll" }),
    defineArrayMember({ type: "largeImageLeft" }),
    defineArrayMember({ type: "largeText" }),
    defineArrayMember({ type: "stickyImage" }),
    defineArrayMember({ type: "utilityText" }),
  ],
});
