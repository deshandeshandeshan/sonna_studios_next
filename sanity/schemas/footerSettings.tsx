import { defineField, defineType } from "sanity";
import { ControlsIcon } from "@sanity/icons";

export const footerSettingsType = defineType({
  name: "footerSettings",
  title: "Footer Settings",
  type: "document",
  icon: ControlsIcon,
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Logo",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "caption",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      title: "Social Links",
      of: [
        {
          type: "object",
          name: "socialLink",
          title: "Social Link",
          fields: [
            {
              name: "platform",
              type: "string",
              title: "Platform",
            },
            {
              name: "url",
              type: "url",
              title: "URL",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "copyright",
      type: "string",
      title: "Copyright",
      description: "Copyright text for the footer",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Footer Settings",
      };
    },
  },
});
