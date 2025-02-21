// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Subtle Top-Level Items",
      social: {
        github: "https://github.com/trueberryless-org/starlight-subtle-top-level-items",
      },
      sidebar: [
        {
          slug: "lorem-ipsum-1",
        },
        {
          label: "Lorem Folder 1",
          autogenerate: { directory: "lorem-folder-1" },
        },
        {
          label: "Lorem Folder 2",
          autogenerate: { directory: "lorem-folder-2" },
        },
        {
          slug: "lorem-ipsum-2",
        },
        {
          slug: "lorem-ipsum-3",
        },
        {
          label: "Lorem Folder 3",
          autogenerate: { directory: "lorem-folder-3" },
        },
      ],
      customCss: ["./src/styles/subtle-top-level-items.css"],
    }),
  ],
});
