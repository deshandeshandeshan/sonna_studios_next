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
    defineField({
      name: "services",
      type: "array",
      title: "Services",
      validation: (rule) =>
        rule.min(1).max(3).error("You can only add up to 3 services."),
      of: [
        defineField({
          type: "object",
          name: "service",
          title: "Service",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Service Name",
            }),
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
