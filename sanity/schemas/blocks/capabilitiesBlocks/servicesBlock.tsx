import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const servicesBlockType = defineType({
  name: "servicesBlock",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    {
      name: "capabilities",
      type: "array",
      title: "Capabilities",
      of: [
        {
          type: "object",
          name: "capabilities",
          title: "Capabilities",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "caption",
                  type: "string",
                }),
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  description: "Important for SEO and accessibility.",
                }),
              ],
            },
            {
              name: "name",
              type: "string",
              title: "Service Name",
            },
            {
              name: "specialties",
              type: "array",
              title: "Service Specialties",
              of: [{ type: "string" }],
            },
            {
              name: "description",
              type: "text",
              title: "Service Description",
            },
          ],
        },
      ],
    },
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
        subtitle: "Services Block",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
