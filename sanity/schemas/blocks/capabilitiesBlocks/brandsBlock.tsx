import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const brandsBlockType = defineType({
  name: "brandsBlock",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "brandLabel",
      type: "array",
      title: "Brand Labels",
      of: [
        {
          type: "object",
          name: "brandLabel",
          title: "Brand Label",
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
              title: "Brand Name",
            },
          ],
        },
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
        subtitle: "Brands Block",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
