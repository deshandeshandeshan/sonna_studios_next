import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const fullScreenHeaderImageType = defineType({
  name: "fullScreenHeaderImage",
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
        subtitle: "Full Screen Header Image",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
