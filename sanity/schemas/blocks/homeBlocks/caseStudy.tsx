import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const caseStudyType = defineType({
  name: "caseStudy",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
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
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: "Case Study",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
