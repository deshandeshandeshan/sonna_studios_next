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
          caption,
          alt
        }
      },
      caseStudies[] {
        client,
        services,
        industry,
        location,
        image {
          asset -> { url },
          caption,
          alt
        }
      },
      brands[] {
        name,
        image {
          asset -> { url },
          caption,
          alt
        },
        description,
      },
        capabilities[] {
          _type,
          ...,
          image {
            asset -> { url },
            caption,
            alt
          },
          name,
          specialties,
          description,
      }
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
          caption,
          alt
        }
      },
      caseStudies[] {
        client,
        services,
        industry,
        location,
        image {
          asset -> { url },
          caption,
          alt
        }
      },
      brands[] {
        name,
        image {
          asset -> { url },
          caption,
          alt
        },
        description,
      },
        capabilities[] {
          _type,
          ...,
          image {
            asset -> { url },
            caption,
            alt
          },
          name,
          specialties,
          description,
      }
    },
  }
  `);

export const NAVIGATION_QUERY = defineQuery(`
  *[_type == "page" && defined(slug.current)]{
    "title": title,
    "slug": slug.current
  }
`);
