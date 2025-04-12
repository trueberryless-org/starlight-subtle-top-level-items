// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Subtle Top-Level Items",
      social: {
        github:
          "https://github.com/trueberryless-org/starlight-subtle-top-level-items",
      },
      plugins: [
        starlightSidebarTopics([
          {
            id: "56d1ace",
            label: "56d1ace",
            link: "/56d1ace/styles/",
            items: [
              {
                slug: "56d1ace/styles",
              },
              {
                label: "Lorem Folder 1",
                autogenerate: { directory: "56d1ace/lorem-folder-1" },
              },
              {
                label: "Lorem Folder 2",
                autogenerate: { directory: "56d1ace/lorem-folder-2" },
              },
              {
                slug: "56d1ace/lorem-ipsum-2",
              },
              {
                slug: "56d1ace/lorem-ipsum-3",
              },
              {
                label: "Lorem Folder 3",
                autogenerate: { directory: "56d1ace/lorem-folder-3" },
              },
            ],
          },
          {
            label: "1b4d5fe",
            link: "/1b4d5fe/styles/",
            items: [
              {
                slug: "1b4d5fe/styles",
              },
              {
                label: "Lorem Folder 1",
                autogenerate: { directory: "1b4d5fe/lorem-folder-1" },
              },
              {
                label: "Lorem Folder 2",
                autogenerate: { directory: "1b4d5fe/lorem-folder-2" },
              },
              {
                slug: "1b4d5fe/lorem-ipsum-2",
              },
              {
                slug: "1b4d5fe/lorem-ipsum-3",
              },
              {
                label: "Lorem Folder 3",
                autogenerate: { directory: "1b4d5fe/lorem-folder-3" },
              },
            ],
          },
          {
            label: "fd53616",
            link: "/fd53616/styles/",
            items: [
              {
                slug: "fd53616/styles",
              },
              {
                label: "Lorem Folder 1",
                autogenerate: { directory: "fd53616/lorem-folder-1" },
              },
              {
                label: "Lorem Folder 2",
                autogenerate: { directory: "fd53616/lorem-folder-2" },
              },
              {
                slug: "fd53616/lorem-ipsum-2",
              },
              {
                slug: "fd53616/lorem-ipsum-3",
              },
              {
                label: "Lorem Folder 3",
                autogenerate: { directory: "fd53616/lorem-folder-3" },
              },
            ],
          },
        ]),
      ],
      routeMiddleware: "./src/middleware.ts",
    }),
  ],
});
