import { defineField, defineType } from "sanity";

export const landingModuleType = defineType({
  name: "landingModule",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "video",
      type: "file",
    }),
  ],
});
