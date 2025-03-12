import { SchemaTypeDefinition } from "sanity";
import { fullBleedType } from "./blocks/fullBleed";
import { horizontalImageScrollType } from "./blocks/horizontalImageScroll";
import { largeImageLeftType } from "./blocks/largeImageLeft";
import { largeTextType } from "./blocks/largeText";
import { stickyImageType } from "./blocks/stickyImage";
import { utilityTextLeftType } from "./blocks/utilityTextLeft";
import { pageType } from "./page";
import { pageBuilderType } from "./pageBuilder";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    pageBuilderType,
    fullBleedType,
    horizontalImageScrollType,
    largeImageLeftType,
    largeTextType,
    stickyImageType,
    utilityTextLeftType,
  ],
};
