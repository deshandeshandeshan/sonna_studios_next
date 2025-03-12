import { defineField, defineType } from "sanity";

export const stickyImageType = defineType({
  name: "stickyImage",
  type: "object",
  fields: [
    defineField({
      name: "text",
      type: "blockContent",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
  ],
});
