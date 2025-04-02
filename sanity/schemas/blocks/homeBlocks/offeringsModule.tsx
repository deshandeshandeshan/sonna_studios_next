import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const offeringsModuleType = defineType({
  name: "offeringsModule",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    {
      name: "services",
      type: "array",
      title: "Services",
      of: [
        {
          type: "object",
          name: "service",
          title: "Service",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Service Name",
            },
            {
              name: "image",
              type: "image",
              title: "Service Image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "caption",
                  type: "string",
                }),
              ],
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
        subtitle: "Offerings Module",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
