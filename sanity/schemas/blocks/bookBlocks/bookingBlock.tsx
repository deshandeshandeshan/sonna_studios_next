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
          type: "string",
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
      title: "Social Links",
      type: "object",
      fields: [
        defineField({
          name: "instagram",
          title: "Instagram URL",
          type: "url",
        }),
        defineField({
          name: "tiktok",
          title: "TikTok URL",
          type: "url",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn URL",
          type: "url",
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
        subtitle: "Booking Block",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
