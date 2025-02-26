import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import { sidebarStylesPerTopic } from "./styles";

export const onRequest = defineRouteMiddleware((context, next) => {
  try {
    const { entry } = context.locals.starlightRoute;

    // Find the first matching key in sidebarStylesPerTopic
    const matchingKey = Object.keys(sidebarStylesPerTopic).find((key) =>
      entry.id.includes(key)
    )!;

    var headStyleConfig = {
      tag: "style",
      content: sidebarStylesPerTopic[matchingKey]!,
      attrs: {},
    } satisfies HeadConfig;
    entry.data.head.push(headStyleConfig);
  } catch (e) {}
  return next();
});

interface HeadConfig {
  tag:
    | "style"
    | "title"
    | "base"
    | "link"
    | "meta"
    | "script"
    | "noscript"
    | "template";
  attrs?: Record<string, string | boolean | undefined>;
  content?: string;
}
