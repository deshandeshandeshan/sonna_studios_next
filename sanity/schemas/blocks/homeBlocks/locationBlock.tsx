import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export const locationBlockType = defineType({
  name: "locationBlock",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Location Description",
      type: "text",
    }),
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: "Location Block",
        media: TextIcon,
      };
    },
  },
});
