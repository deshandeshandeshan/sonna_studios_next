import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const offeringsModuleType = defineType({
  name: "offeringsModule",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
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
