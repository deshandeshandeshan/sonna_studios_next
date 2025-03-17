import { defineField, defineType } from "sanity";

export const largeImageLeftType = defineType({
  name: "largeImageLeft",
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
