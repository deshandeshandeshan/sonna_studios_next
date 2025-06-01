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
    defineField({
      name: "capabilities",
      type: "array",
      title: "Capabilities",
      of: [
        defineField({
          type: "object",
          name: "capability",
          title: "Capability",
          fields: [
            defineField({
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
            }),
            defineField({
              name: "video",
              title: "Video",
              type: "mux.video",
            }),
            defineField({
              name: "name",
              type: "string",
              title: "Service Name",
            }),
            defineField({
              name: "specialties",
              type: "array",
              title: "Service Specialties",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Service Description",
            }),
          ],
          validation: (Rule) =>
            Rule.custom((value) => {
              const hasImage = !!value?.image;
              const hasVideo = !!value?.video;

              if (hasImage && hasVideo) {
                return "Only one of Image or Video should be set";
              }

              if (!hasImage && !hasVideo) {
                return "Please add either an Image or a Video";
              }

              return true;
            }),
        }),
      ],
    }),
  ],
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "title",
      media: "capabilities.0.image",
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
