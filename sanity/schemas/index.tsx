import { SchemaTypeDefinition } from "sanity";
import { fullBleedType } from "./blocks/fullBleed";
import { largeImageType } from "./blocks/largeImage";
import { largeTextType } from "./blocks/largeText";
import { pageType } from "./page";
import { pageBuilderType } from "./pageBuilder";
import { brandModuleType } from "./blocks/brandModule";
import { caseStudyType } from "./blocks/caseStudy";
import { landingModuleType } from "./blocks/landingModule";
import { offeringsModuleType } from "./blocks/offeringsModule";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    pageBuilderType,
    fullBleedType,
    largeImageType,
    largeTextType,
    brandModuleType,
    caseStudyType,
    landingModuleType,
    offeringsModuleType,
  ],
};
