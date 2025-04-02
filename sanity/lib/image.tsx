import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity-utils";

const builder = imageUrlBuilder(client);

export function urlFor(source: object) {
  return builder.image(source);
}
