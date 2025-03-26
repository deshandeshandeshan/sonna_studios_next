import { SchemaTypeDefinition } from "sanity";
import { fullBleedType } from "./blocks/home-blocks/fullBleed";
import { largeImageType } from "./blocks/home-blocks/largeImage";
import { largeTextType } from "./blocks/home-blocks/largeText";
import { homePageType } from "./pages/home-page/homePage";
import { homePageBuilderType } from "./pages/home-page/homePageBuilder";
import { brandModuleType } from "./blocks/home-blocks/brandModule";
import { caseStudyType } from "./blocks/home-blocks/caseStudy";
import { landingModuleType } from "./blocks/home-blocks/landingModule";
import { offeringsModuleType } from "./blocks/home-blocks/offeringsModule";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePageType,
    homePageBuilderType,
    fullBleedType,
    largeImageType,
    largeTextType,
    brandModuleType,
    caseStudyType,
    landingModuleType,
    offeringsModuleType,
  ],
};
