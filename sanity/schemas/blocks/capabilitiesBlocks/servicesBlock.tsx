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
              ],
            },
            {
              name: "name",
              type: "string",
              title: "Service Name",
            },
            {
              name: "specialties",
              type: "text",
              title: "Service Specialties",
            },
            {
              name: "description",
              type: "text",
              title: "Service Description",
            },
            {
              title: "Type of Service",
              name: "typeOfService",
              type: "string",
              initialValue: "photography",
              options: {
                list: [
                  { title: "Photography", value: "photography" },
                  { title: "Videography", value: "videography" },
                  { title: "Post Production", value: "postProduction" },
                ],
              },
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
