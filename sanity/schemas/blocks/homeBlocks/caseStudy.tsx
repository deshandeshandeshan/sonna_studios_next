import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const caseStudyType = defineType({
  name: "caseStudy",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    {
      name: "caseStudies",
      type: "array",
      title: "Case Studies",
      validation: (rule) =>
        rule
          .min(1)
          .max(3)
          .error("You must add at least 1 case study and no more than 3."),
      of: [
        {
          type: "object",
          name: "caseStudies",
          title: "Case Studies",
          fields: [
            {
              name: "client",
              type: "string",
              title: "Client",
            },
            {
              name: "services",
              type: "string",
              title: "Services",
            },
            {
              name: "industry",
              type: "string",
              title: "Industry",
            },
            {
              name: "location",
              type: "string",
              title: "Location",
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
        subtitle: "Case Study",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
