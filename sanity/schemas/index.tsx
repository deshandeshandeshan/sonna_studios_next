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
import { footerSettingsType } from "./footerSettings";
import { bookingBlockType } from "./blocks/bookBlocks/bookingBlock";
import { brandsBlockType } from "./blocks/capabilitiesBlocks/brandsBlock";
import { locationBlockType } from "./blocks/homeBlocks/locationBlock";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageBuilderType,
    pageType,
    footerSettingsType,
    siteSettings,

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
    bookingBlockType,
    brandsBlockType,
    locationBlockType,
  ],
};
