import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const bookingBlockType = defineType({
  name: "bookingBlock",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
    }),
    defineField({
      name: "enquiryDescription",
      title: "Enquiry Description",
      type: "text",
    }),
    defineField({
      name: "contactDescription",
      title: "Contact Description",
      type: "text",
    }),
    defineField({
      name: "pricingDescription",
      title: "Pricing Description",
      type: "text",
    }),
    defineField({
      name: "generalEnquiries",
      title: "General Enquiries",
      type: "object",
      fields: [
        defineField({
          name: "email",
          title: "Email",
          type: "email",
        }),
        defineField({
          name: "phone",
          title: "Phone",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      title: "Social Links",
      validation: (rule) =>
        rule
          .min(1)
          .max(3)
          .error("You must add at least 1 social link and no more than 3."),
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
        subtitle: "Booking Block",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
