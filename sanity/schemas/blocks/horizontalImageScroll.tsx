import { defineField, defineType } from "sanity";

export const horizontalImageScrollType = defineType({
  name: "horizontalImageScroll",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "string",
    }),
  ],
});
