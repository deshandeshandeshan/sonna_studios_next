import { defineField, defineType } from "sanity";
import { ControlsIcon } from "@sanity/icons";

export const navSettingsType = defineType({
  name: "navSettings",
  title: "Navigation Settings",
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
  ],
  preview: {
    prepare() {
      return {
        title: "Navigation Settings",
      };
    },
  },
});
