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
      }
    }
  }
`);
