import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

import { sidebarStylesPerTopic } from "./styles";

export const onRequest = defineRouteMiddleware((context, next) => {
  const { entry, head } = context.locals.starlightRoute;
  const topic = Object.keys(sidebarStylesPerTopic).find((key) =>
    entry.id.includes(key)
  );

  if (topic) {
    head.push({
      attrs: {},
      content: sidebarStylesPerTopic[topic],
      tag: "style",
    });
  }

  return next();
});
