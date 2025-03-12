import { defineField, defineType } from "sanity";

export const utilityTextLeftType = defineType({
  name: "utilityTextLeft",
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
