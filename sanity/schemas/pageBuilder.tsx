import { defineType, defineArrayMember } from "sanity";

export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "array",
  of: [
    defineArrayMember({ type: "brandModule" }),
    defineArrayMember({ type: "caseStudy" }),
    defineArrayMember({ type: "fullBleed" }),
    defineArrayMember({ type: "landingModule" }),
    defineArrayMember({ type: "largeImage" }),
    defineArrayMember({ type: "largeText" }),
    defineArrayMember({ type: "offeringsModule" }),
  ],
});
