import { describe, expect, test } from "vitest";

import { sidebarStylesPerTopic } from "../../src/styles";

describe("sidebarStylesPerTopic", () => {
  const topics = Object.keys(sidebarStylesPerTopic);

  test("defines the three experiments", () => {
    expect(topics).toEqual(["56d1ace", "1b4d5fe", "fd53616"]);
  });

  test.each(topics)("%s styles the top-level items", (topic) => {
    expect(sidebarStylesPerTopic[topic]).toContain("ul.top-level > li");
  });

  test("each experiment differs from the others", () => {
    expect(new Set(Object.values(sidebarStylesPerTopic)).size).toBe(topics.length);
  });
});
