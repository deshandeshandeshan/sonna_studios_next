import { defineField, defineType } from "sanity";

export const largeTextType = defineType({
  name: "largeText",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "text",
      type: "blockContent",
    }),
  ],
});
