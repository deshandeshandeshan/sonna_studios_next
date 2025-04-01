import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const brandModuleType = defineType({
  name: "brandModule",
  type: "object",
  fields: [
    defineField({
      name: "clientName",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "caption",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "text",
      type: "string",
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
        subtitle: "Brand Module",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
