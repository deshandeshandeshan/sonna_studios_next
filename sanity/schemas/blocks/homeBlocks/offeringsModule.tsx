import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const offeringsModuleType = defineType({
  name: "offeringsModule",
  type: "object",
  fields: [
    defineField({
      name: "service",
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
      name: "description",
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
        subtitle: "Offerings Module",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
