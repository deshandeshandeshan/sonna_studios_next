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
      name: "servicesBlock",
      type: "array",
      title: "Services",
      of: [
        {
          type: "object",
          name: "services",
          title: "Services",
          fields: [
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
              name: "Service",
              type: "string",
              title: "Client",
            },
            {
              name: "serviceSpecialties",
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
