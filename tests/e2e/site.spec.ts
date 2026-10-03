import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const topics = ["56d1ace", "1b4d5fe", "fd53616"];

test("serves the landing page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Sidebar Styling Experiment");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /starlight-subtle-top-level-items\.netlify\.app/);
});

test("shows a 404 page", async ({ page }) => {
  const response = await page.goto("/does-not-exist/");

  expect(response?.status()).toBe(404);
});

for (const topic of topics) {
  test(`${topic} applies its own sidebar styles`, async ({ page }) => {
    await page.goto(`/${topic}/styles/`);

    const styles = await page.evaluate(() =>
      [...document.head.querySelectorAll("style")].map((style) => style.textContent ?? ""),
    );

    expect(styles.filter((style) => style.includes("ul.top-level > li"))).toHaveLength(1);
  });
}

test.describe("accessibility", () => {
  for (const path of ["/", ...topics.map((topic) => `/${topic}/styles/`)]) {
    for (const colorScheme of ["dark", "light"] as const) {
      test(`${path} has no violations in ${colorScheme} mode`, async ({ page }) => {
        await page.emulateMedia({ colorScheme });
        await page.goto(path);

        const { violations } = await new AxeBuilder({ page })
          .disableRules(["scrollable-region-focusable"])
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();

        expect(violations.map(({ id, nodes }) => `${id}: ${nodes.map(({ target }) => target.join(" ")).join(", ")}`)).toEqual([]);
      });
    }
  }
});
