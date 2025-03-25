import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const landingModuleType = defineType({
  name: "landingModule",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
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
