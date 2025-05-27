import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
  *[_type == "page" && slug.current == "home"][0]{
    title,
    slug,
    seo {
      title,
      description
    },
    content[] {
      _key,
      _type,
      ...,
      video {
        asset-> {
          playbackId,
          assetId,
          filename
        }
      },
      services[] { 
        name,
        description,
        image {
          asset-> { url },
          caption,
          alt
        },
        video {
          asset-> {
          playbackId,
          assetId,
          filename
          }
        }
      },
      caseStudies[] {
        client,
        services,
        industry,
        location,
        image {
          asset-> { url },
          caption,
          alt
        }
      },
      brands[] {
        name,
        image {
          asset-> { url },
          caption,
          alt
        },
        description
      },
      capabilities[] {
        _type,
        ...,
        image {
          asset-> { url },
          caption,
          alt
        },
        name,
        specialties,
        description
      }
    }
  }
`);

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    slug,
    seo {
      title,
      description
    },
    content[] {
      _key,
      _type,
      ...,
      video {
        asset-> {
          playbackId,
          assetId,
          filename
        }
      },
      services[] { 
        name,
        description,
        image {
          asset-> { url },
          caption,
          alt
        },
        video {
          asset-> {
          playbackId,
          assetId,
          filename
          }
        }
      },
      caseStudies[] {
        client,
        services,
        industry,
        location,
        image {
          asset-> { url },
          caption,
          alt
        }
      },
      brands[] {
        name,
        image {
          asset-> { url },
          caption,
          alt
        },
        description
      },
      capabilities[] {
        _type,
        ...,
        image {
          asset-> { url },
          caption,
          alt
        },
        name,
        specialties,
        description
      }
    }
  }
`);

export const NAVIGATION_QUERY = defineQuery(`
  *[_type == "page" && defined(slug.current)]{
    "title": title,
    "slug": slug.current
  }
`);

export const FOOTER_SETTINGS = defineQuery(`
  *[_type == "footerSettings"][0]{
    email,
    phoneNumber,
    socialLinks,
    copyright
  }
`);

export const SITE_SETTINGS = defineQuery(`
  *[_type == "siteSettings"][0]{
    siteTitle,
    defaultDescription
  }
`);
