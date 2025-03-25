import { defineField, defineType } from "sanity";

export const largeImageType = defineType({
  name: "largeImage",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "text",
      type: "string",
    }),
  ],
});
