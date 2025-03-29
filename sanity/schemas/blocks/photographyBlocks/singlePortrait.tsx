import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const singlePortraitType = defineType({
  name: "singlePortrait",
  type: "object",
  fields: [
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
        subtitle: "Single Portrait",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
