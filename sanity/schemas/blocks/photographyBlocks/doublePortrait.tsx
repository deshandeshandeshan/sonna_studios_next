import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const doublePortraitType = defineType({
  name: "doublePortrait",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
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
        subtitle: "Double Portrait",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
