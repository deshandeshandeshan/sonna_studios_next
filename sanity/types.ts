/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type VideoCaseStudy = {
  _type: "videoCaseStudy";
  title?: string;
  projectName?: string;
  description?: string;
  client?: string;
  industry?: string;
  location?: string;
  video?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
};

export type SinglePortrait = {
  _type: "singlePortrait";
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    _type: "image";
  };
};

export type Landscape = {
  _type: "landscape";
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    _type: "image";
  };
};

export type ImageLargeRight = {
  _type: "imageLargeRight";
  title?: string;
  leftImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    _type: "image";
  };
  rightImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    _type: "image";
  };
};

export type ImageLargeLeft = {
  _type: "imageLargeLeft";
  title?: string;
  leftImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    _type: "image";
  };
  rightImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    _type: "image";
  };
};

export type DoublePortrait = {
  _type: "doublePortrait";
  title?: string;
  leftImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    _type: "image";
  };
  rightImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    _type: "image";
  };
};

export type OfferingsModule = {
  _type: "offeringsModule";
  title?: string;
  service?: Array<{
    name?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    description?: string;
    _type: "services";
    _key: string;
  }>;
};

export type LandingModule = {
  _type: "landingModule";
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    _type: "image";
  };
  video?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
};

export type CaseStudy = {
  _type: "caseStudy";
  title?: string;
  caseStudies?: Array<{
    client?: string;
    services?: string;
    industry?: string;
    location?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    description?: string;
    _type: "caseStudies";
    _key: string;
  }>;
};

export type BrandModule = {
  _type: "brandModule";
  title?: string;
  brands?: Array<{
    name?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    description?: string;
    _type: "brands";
    _key: string;
  }>;
};

export type LargeText = {
  _type: "largeText";
  title?: string;
  text?: string;
};

export type LargeImage = {
  _type: "largeImage";
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    _type: "image";
  };
  text?: string;
};

export type FullBleed = {
  _type: "fullBleed";
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    _type: "image";
  };
  text?: string;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content?: Array<{
    _key: string;
  } & BrandModule | {
    _key: string;
  } & CaseStudy | {
    _key: string;
  } & FullBleed | {
    _key: string;
  } & LandingModule | {
    _key: string;
  } & LargeImage | {
    _key: string;
  } & LargeText | {
    _key: string;
  } & OfferingsModule | {
    _key: string;
  } & DoublePortrait | {
    _key: string;
  } & ImageLargeLeft | {
    _key: string;
  } & ImageLargeRight | {
    _key: string;
  } & Landscape | {
    _key: string;
  } & SinglePortrait | {
    _key: string;
  } & VideoCaseStudy>;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type PageBuilder = Array<{
  _key: string;
} & BrandModule | {
  _key: string;
} & CaseStudy | {
  _key: string;
} & FullBleed | {
  _key: string;
} & LandingModule | {
  _key: string;
} & LargeImage | {
  _key: string;
} & LargeText | {
  _key: string;
} & OfferingsModule | {
  _key: string;
} & DoublePortrait | {
  _key: string;
} & ImageLargeLeft | {
  _key: string;
} & ImageLargeRight | {
  _key: string;
} & Landscape | {
  _key: string;
} & SinglePortrait | {
  _key: string;
} & VideoCaseStudy>;

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | Geopoint | VideoCaseStudy | SinglePortrait | Landscape | ImageLargeRight | ImageLargeLeft | DoublePortrait | OfferingsModule | LandingModule | CaseStudy | BrandModule | LargeText | LargeImage | FullBleed | Page | Slug | PageBuilder | SanityFileAsset | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/queries.tsx
// Variable: HOME_QUERY
// Query: *[_type == "page" && slug.current == "home"][0]{    ...,    content[] {      _key,      _type,      ...,      video {        asset -> { url }      },      services[] {         name,        description,        image {          asset -> { url },          caption        }      },      caseStudies[] {        client,        services,        industry,        location,        image {          asset -> { url },          caption        }      },      brands[] {        name,        image {          asset -> { url },          caption        },        description,      },    }  }
export type HOME_QUERYResult = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content: Array<{
    _key: string;
    _type: "brandModule";
    title?: string;
    brands: Array<{
      name: string | null;
      image: {
        asset: {
          url: string | null;
        } | null;
        caption: string | null;
      } | null;
      description: string | null;
    }> | null;
    video: null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "caseStudy";
    title?: string;
    caseStudies: Array<{
      client: string | null;
      services: string | null;
      industry: string | null;
      location: string | null;
      image: {
        asset: {
          url: string | null;
        } | null;
        caption: string | null;
      } | null;
    }> | null;
    video: null;
    services: null;
    brands: null;
  } | {
    _key: string;
    _type: "doublePortrait";
    title?: string;
    leftImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    rightImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: null;
    services: null;
    caseStudies: null;
    brands: null;
  } | {
    _key: string;
    _type: "fullBleed";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    text?: string;
    video: null;
    services: null;
    caseStudies: null;
    brands: null;
  } | {
    _key: string;
    _type: "imageLargeLeft";
    title?: string;
    leftImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    rightImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: null;
    services: null;
    caseStudies: null;
    brands: null;
  } | {
    _key: string;
    _type: "imageLargeRight";
    title?: string;
    leftImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    rightImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: null;
    services: null;
    caseStudies: null;
    brands: null;
  } | {
    _key: string;
    _type: "landingModule";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: {
      asset: {
        url: string | null;
      } | null;
    } | null;
    services: null;
    caseStudies: null;
    brands: null;
  } | {
    _key: string;
    _type: "landscape";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: null;
    services: null;
    caseStudies: null;
    brands: null;
  } | {
    _key: string;
    _type: "largeImage";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    text?: string;
    video: null;
    services: null;
    caseStudies: null;
    brands: null;
  } | {
    _key: string;
    _type: "largeText";
    title?: string;
    text?: string;
    video: null;
    services: null;
    caseStudies: null;
    brands: null;
  } | {
    _key: string;
    _type: "offeringsModule";
    title?: string;
    service?: Array<{
      name?: string;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        caption?: string;
        _type: "image";
      };
      description?: string;
      _type: "services";
      _key: string;
    }>;
    video: null;
    services: null;
    caseStudies: null;
    brands: null;
  } | {
    _key: string;
    _type: "singlePortrait";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: null;
    services: null;
    caseStudies: null;
    brands: null;
  } | {
    _key: string;
    _type: "videoCaseStudy";
    title?: string;
    projectName?: string;
    description?: string;
    client?: string;
    industry?: string;
    location?: string;
    video: {
      asset: {
        url: string | null;
      } | null;
    } | null;
    services: null;
    caseStudies: null;
    brands: null;
  }> | null;
} | null;
// Variable: PAGE_QUERY
// Query: *[_type == "page" && slug.current == $slug][0]{    ...,    content[] {      _key,      _type,      ...,      video {        asset -> { url }      },      services[] {         name,        description,        image {          asset -> { url },          caption        }      },      caseStudies[] {        client,        services,        industry,        location,        image {          asset -> { url },          caption        }      }    },  }
export type PAGE_QUERYResult = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content: Array<{
    _key: string;
    _type: "brandModule";
    title?: string;
    brands?: Array<{
      name?: string;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        caption?: string;
        _type: "image";
      };
      description?: string;
      _type: "brands";
      _key: string;
    }>;
    video: null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "caseStudy";
    title?: string;
    caseStudies: Array<{
      client: string | null;
      services: string | null;
      industry: string | null;
      location: string | null;
      image: {
        asset: {
          url: string | null;
        } | null;
        caption: string | null;
      } | null;
    }> | null;
    video: null;
    services: null;
  } | {
    _key: string;
    _type: "doublePortrait";
    title?: string;
    leftImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    rightImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "fullBleed";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    text?: string;
    video: null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "imageLargeLeft";
    title?: string;
    leftImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    rightImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "imageLargeRight";
    title?: string;
    leftImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    rightImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "landingModule";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: {
      asset: {
        url: string | null;
      } | null;
    } | null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "landscape";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "largeImage";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    text?: string;
    video: null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "largeText";
    title?: string;
    text?: string;
    video: null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "offeringsModule";
    title?: string;
    service?: Array<{
      name?: string;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        caption?: string;
        _type: "image";
      };
      description?: string;
      _type: "services";
      _key: string;
    }>;
    video: null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "singlePortrait";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      _type: "image";
    };
    video: null;
    services: null;
    caseStudies: null;
  } | {
    _key: string;
    _type: "videoCaseStudy";
    title?: string;
    projectName?: string;
    description?: string;
    client?: string;
    industry?: string;
    location?: string;
    video: {
      asset: {
        url: string | null;
      } | null;
    } | null;
    services: null;
    caseStudies: null;
  }> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n    *[_type == \"page\" && slug.current == \"home\"][0]{\n    ...,\n    content[] {\n      _key,\n      _type,\n      ...,\n      video {\n        asset -> { url }\n      },\n      services[] { \n        name,\n        description,\n        image {\n          asset -> { url },\n          caption\n        }\n      },\n      caseStudies[] {\n        client,\n        services,\n        industry,\n        location,\n        image {\n          asset -> { url },\n          caption\n        }\n      },\n      brands[] {\n        name,\n        image {\n          asset -> { url },\n          caption\n        },\n        description,\n      },\n    }\n  }\n": HOME_QUERYResult;
    "\n  *[_type == \"page\" && slug.current == $slug][0]{\n    ...,\n    content[] {\n      _key,\n      _type,\n      ...,\n      video {\n        asset -> { url }\n      },\n      services[] { \n        name,\n        description,\n        image {\n          asset -> { url },\n          caption\n        }\n      },\n      caseStudies[] {\n        client,\n        services,\n        industry,\n        location,\n        image {\n          asset -> { url },\n          caption\n        }\n      }\n    },\n  }\n  ": PAGE_QUERYResult;
  }
}
