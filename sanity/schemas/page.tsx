import { defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    {
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "content",
      type: "pageBuilder",
      options: {
        layout: "grid",
        insertMenu: {
          filter: true,
          groups: [
            {
              name: "home",
              title: "Home Page",
              of: [
                "brandModule",
                "caseStudy",
                "fullBleed",
                "landingModule",
                "largeImage",
                "largeText",
                "offeringsModule",
              ],
            },
            {
              name: "photography",
              title: "Photography",
              of: [
                "doublePortrait",
                "imageLargeLeft",
                "imageLargeRight",
                "landscape",
                "servicesBlock",
                "singlePortrait",
              ],
            },
            {
              name: "videography",
              title: "Videography",
              of: ["videoCaseStudy"],
            },
          ],
        },
      },
    },
    {
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});
