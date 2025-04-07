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
            {
              name: "offerings",
              title: "Offerings",
              of: ["fullScreenHeaderImage", "servicesBlock"],
            },
          ],
        },
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
