import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightSidebarTopics from "starlight-sidebar-topics";

const site = "https://starlight-subtle-top-level-items.netlify.app";
const ogImage = `${site}/og-image.png`;

const topics = ["56d1ace", "1b4d5fe", "fd53616"];

const folder = (topic: string, number: number) => ({
  label: `Lorem Folder ${number}`,
  items: [{ autogenerate: { directory: `${topic}/lorem-folder-${number}` } }],
});

export default defineConfig({
  integrations: [
    starlight({
      head: [
        { attrs: { content: ogImage, property: "og:image" }, tag: "meta" },
        { attrs: { content: "1200", property: "og:image:width" }, tag: "meta" },
        { attrs: { content: "630", property: "og:image:height" }, tag: "meta" },
        {
          attrs: {
            content:
              "Starlight Subtle Top-Level Items: Quieter top-level items in your sidebar.",
            property: "og:image:alt",
          },
          tag: "meta",
        },
        {
          attrs: { content: "summary_large_image", name: "twitter:card" },
          tag: "meta",
        },
        { attrs: { content: ogImage, name: "twitter:image" }, tag: "meta" },
      ],
      plugins: [
        starlightSidebarTopics(
          topics.map((topic) => ({
            id: topic,
            items: [
              { slug: `${topic}/styles` },
              folder(topic, 1),
              folder(topic, 2),
              { slug: `${topic}/lorem-ipsum-2` },
              { slug: `${topic}/lorem-ipsum-3` },
              folder(topic, 3),
            ],
            label: topic,
            link: `/${topic}/styles/`,
          }))
        ),
      ],
      routeMiddleware: "./src/routeData.ts",
      social: [
        {
          href: "https://github.com/trueberryless-org/starlight-subtle-top-level-items",
          icon: "github",
          label: "GitHub",
        },
      ],
      title: "Subtle Top-Level Items",
    }),
  ],
  site,
});
