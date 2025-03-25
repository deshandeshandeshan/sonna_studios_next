import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { structure } from "@/sanity/structure";
import { schema } from "../sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "qzoemo7f",
  dataset: "production",
  title: "SONNA Studios Website",
  apiVersion: "2025-03-11",
  basePath: "/admin",
  schema,
  plugins: [structureTool({ structure }), visionTool()],
});

export default config;
