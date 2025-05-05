import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const brandModuleType = defineType({
  name: "brandModule",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    {
      name: "brands",
      type: "array",
      title: "Brands",
      validation: (rule) =>
        rule
          .min(1)
          .max(10)
          .error("You must add at least 1 brand and no more than 10."),
      of: [
        {
          type: "object",
          name: "brands",
          title: "Brands",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Brand Name",
            },
            {
              name: "image",
              type: "image",
              title: "Brand Image",
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
              name: "description",
              type: "text",
              title: "Description",
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
        subtitle: "Brand Module",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
