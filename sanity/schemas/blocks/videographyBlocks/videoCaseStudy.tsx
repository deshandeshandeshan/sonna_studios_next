import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const videoCaseStudyType = defineType({
  name: "videoCaseStudy",
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
      name: "client",
      type: "string",
    }),
    defineField({
      name: "Industry",
      type: "string",
    }),
    defineField({
      name: "Location",
      type: "string",
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
        subtitle: "Video Case Study",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
