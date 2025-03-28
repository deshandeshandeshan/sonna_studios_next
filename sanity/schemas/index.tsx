import { SchemaTypeDefinition } from "sanity";
import { fullBleedType } from "./blocks/home-blocks/fullBleed";
import { largeImageType } from "./blocks/home-blocks/largeImage";
import { largeTextType } from "./blocks/home-blocks/largeText";
import { pageBuilderType } from "./pageBuilder";
import { brandModuleType } from "./blocks/home-blocks/brandModule";
import { caseStudyType } from "./blocks/home-blocks/caseStudy";
import { landingModuleType } from "./blocks/home-blocks/landingModule";
import { offeringsModuleType } from "./blocks/home-blocks/offeringsModule";
import { pageType } from "./page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageBuilderType,
    pageType,

    fullBleedType,
    largeImageType,
    largeTextType,
    brandModuleType,
    caseStudyType,
    landingModuleType,
    offeringsModuleType,
  ],
};
