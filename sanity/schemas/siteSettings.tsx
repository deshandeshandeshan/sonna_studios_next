import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Website Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
    }),
    defineField({
      name: "defaultDescription",
      title: "Default Description",
      type: "text",
    }),
    defineField({
      name: "defaultImage",
      title: "Default Open Graph Image",
      type: "image",
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
    }),
    defineField({
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
