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
      },
      brands[] {
        name,
        image {
          asset -> { url },
          caption
        },
        description,
      },
    }
  }
`);

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
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
    },
  }
  `);
