import { defineType, defineArrayMember } from "sanity";

export const homePageBuilderType = defineType({
  name: "homePageBuilder",
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
