import { SchemaTypeDefinition } from "sanity";
import { fullBleedType } from "./blocks/homeBlocks/fullBleed";
import { largeImageType } from "./blocks/homeBlocks/largeImage";
import { largeTextType } from "./blocks/homeBlocks/largeText";
import { pageBuilderType } from "./pageBuilder";
import { brandModuleType } from "./blocks/homeBlocks/brandModule";
import { caseStudyType } from "./blocks/homeBlocks/caseStudy";
import { landingModuleType } from "./blocks/homeBlocks/landingModule";
import { pageType } from "./page";
import { offeringsModuleType } from "./blocks/homeBlocks/offeringsModule";
import { doublePortraitType } from "./blocks/photographyBlocks/doublePortrait";
import { imageLargeLeftType } from "./blocks/photographyBlocks/imageLargeLeft";
import { imageLargeRightType } from "./blocks/photographyBlocks/imageLargeRight";
import { landscapeType } from "./blocks/photographyBlocks/landscape";
import { singlePortraitType } from "./blocks/photographyBlocks/singlePortrait";
import { videoCaseStudyType } from "./blocks/videographyBlocks/videoCaseStudy";
import { fullScreenHeaderImageType } from "./blocks/capabilitiesBlocks/fullScreenHeaderImage";
import { servicesBlockType } from "./blocks/capabilitiesBlocks/servicesBlock";
import { siteSettingsType } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageBuilderType,
    pageType,
    siteSettingsType,

    fullBleedType,
    largeImageType,
    largeTextType,
    brandModuleType,
    caseStudyType,
    landingModuleType,
    offeringsModuleType,
    doublePortraitType,
    imageLargeLeftType,
    imageLargeRightType,
    landscapeType,
    singlePortraitType,
    videoCaseStudyType,
    fullScreenHeaderImageType,
    servicesBlockType,
  ],
};
