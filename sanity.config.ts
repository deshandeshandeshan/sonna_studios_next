import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { structure } from "@/sanity/structure";
import { schema } from "./sanity/schemas";
import { visionTool } from "@sanity/vision";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { muxInput } from "sanity-plugin-mux-input";
import { seoMetaFields } from "sanity-plugin-seo";

const config = defineConfig({
  projectId: "qzoemo7f",
  dataset: "production",
  title: "SONNA Studios Website",
  apiVersion: "2025-03-11",
  basePath: "/admin",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool(),
    unsplashImageAsset(),
    muxInput(),
    seoMetaFields(),
  ],
});

export default config;
