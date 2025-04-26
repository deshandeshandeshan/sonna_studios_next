import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const videoCaseStudyType = defineType({
  name: "videoCaseStudy",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    defineField({
      name: "projectName",
      title: "Project Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Video Description",
      type: "text",
    }),
    defineField({
      name: "client",
      type: "string",
    }),
    defineField({
      name: "industry",
      type: "string",
    }),
    defineField({
      name: "location",
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
