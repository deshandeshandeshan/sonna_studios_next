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
    defineArrayMember({ type: "doublePortrait" }),
    defineArrayMember({ type: "imageLargeLeft" }),
    defineArrayMember({ type: "imageLargeRight" }),
    defineArrayMember({ type: "landscape" }),
    defineArrayMember({ type: "singlePortrait" }),
    defineArrayMember({ type: "videoCaseStudy" }),
  ],
});
