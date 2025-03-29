import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const doublePortraitType = defineType({
  name: "doublePortrait",
  type: "object",
  fields: [
    defineField({
      name: "leftImage",
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
      name: "rightImage",
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
        subtitle: "Double Portrait",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
