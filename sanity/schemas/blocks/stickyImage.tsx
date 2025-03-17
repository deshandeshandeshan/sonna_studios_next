import { defineField, defineType } from "sanity";

export const stickyImageType = defineType({
  name: "stickyImage",
  type: "object",
  fields: [
    defineField({
      name: "text",
      type: "string",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
  ],
});
