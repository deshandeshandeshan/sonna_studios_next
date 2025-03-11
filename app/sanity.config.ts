import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "qzoemo7f",
  dataset: "production",
  title: "SONNA Studios Website",
  apiVersion: "2025-03-11",
  basePath: "/admin",
  plugins: [structureTool()],
});

export default config;
