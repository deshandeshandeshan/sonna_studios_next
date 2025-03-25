import { defineField, defineType } from "sanity";

export const caseStudyType = defineType({
  name: "caseStudy",
  type: "object",
  fields: [
    defineField({
      name: "client",
      type: "string",
    }),
    defineField({
      name: "services",
      type: "string",
    }),
    defineField({
      name: "industry",
      type: "string",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
