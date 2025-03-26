import { defineQuery } from "next-sanity";

export const HOME_QUERY =
  defineQuery(`*[_type == "page" && slug.current == "home-page-test"]
{...}`);
