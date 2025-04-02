import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const brandModuleType = defineType({
  name: "brandModule",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
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
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "text",
      type: "text",
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
