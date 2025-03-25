import { defineField, defineType } from "sanity";

export const brandModuleType = defineType({
  name: "brandModule",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
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
