import { defineField, defineType } from "sanity";

export const fullBleedType = defineType({
  name: "fullBleed",
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
