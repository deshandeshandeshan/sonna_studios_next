import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const imageLargeLeftType = defineType({
  name: "imageLargeLeft",
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
        subtitle: "Image Large Left",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
