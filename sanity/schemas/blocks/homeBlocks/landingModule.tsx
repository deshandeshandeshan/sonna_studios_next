import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const landingModuleType = defineType({
  name: "landingModule",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
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
      name: "video",
      type: "file",
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
        subtitle: "Landing Module",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
