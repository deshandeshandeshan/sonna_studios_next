import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
    *[_type == "page" && slug.current == "home"][0]{
    ...,
    content[] {
      _key,
      _type,
      ...,
      video {
        asset -> { url }
      },
      services[] { 
        name,
        description,
        image {
          asset -> { url },
          caption
        }
      },
      caseStudies[] {
        client,
        services,
        industry,
        location,
        image {
          asset -> { url },
          caption
        }
      }
    }
  }
`);

export const query = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    ...,
    content[] {
      _key,
      _type,
      ...,
      video {
        asset -> { url }
      }
    },
    services[] { 
        name,
        "imageUrl": image.asset->url,
        description
      }
  }
  `);
