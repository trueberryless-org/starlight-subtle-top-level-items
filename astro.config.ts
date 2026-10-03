import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightSidebarTopics from "starlight-sidebar-topics";

const site = "https://starlight-subtle-top-level-items.netlify.app";

const topics = ["56d1ace", "1b4d5fe", "fd53616"];

const folder = (topic: string, number: number) => ({
  label: `Lorem Folder ${number}`,
  items: [{ autogenerate: { directory: `${topic}/lorem-folder-${number}` } }],
});

export default defineConfig({
  integrations: [
    starlight({
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
