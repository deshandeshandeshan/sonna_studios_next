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
                "locationBlock",
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
              name: "capabilities",
              title: "Capabilities",
              of: ["fullScreenHeaderImage", "servicesBlock", "brandsBlock"],
            },
            {
              name: "book",
              title: "Book",
              of: ["bookingBlock"],
            },
          ],
        },
      },
    },
    defineField({
      name: "seo",
      title: "SEO & Social",
      type: "object",
      fieldset: "seo",
      fields: [
        defineField({
          name: "title",
          title: "Title for SEO & social sharing",
          type: "string",
          description:
            "Make it as enticing as possible to convert users in social feeds and Google searches. Ideally between 15 and 70 characters.",
          validation: (Rule) =>
            Rule.required()
              .min(15)
              .max(70)
              .warning("Should be between 15–70 characters."),
        }),
        defineField({
          name: "description",
          title: "Short paragraph for SEO & social sharing (meta description)",
          type: "text",
          rows: 3,
          description:
            "⚡ Optional but highly encouraged as it helps convert more visitors from Google & social. Ideally between 70 and 160 characters.",
          validation: (Rule) =>
            Rule.max(160).warning("Should be under 160 characters."),
        }),
      ],
    }),
  ],
  fieldsets: [
    {
      name: "seo",
      title: "SEO & social",
      options: { collapsible: true, collapsed: false },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});
