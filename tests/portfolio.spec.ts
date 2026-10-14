import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Hero } from "../src/components/Hero";
import { profile, education, experience } from "../src/content/portfolio";

test("Hero renders identity and current resume facts from the content module", () => {
  // Synthetic changes catch hard-coded component copies that would otherwise
  // silently drift when the resume is updated. Restore the shared test imports.
  const changes = [
    [profile, "givenName", "Example"],
    [profile, "familyName", "Candidate"],
    [education, "graduationYear", 2035],
    [education, "shortDegree", "Example degree"],
    [experience[0], "headlineRole", "Example role"],
    [experience[0], "shortCompany", "Example company"],
  ] as const;
  const previous = changes.map(([object, key]) => Reflect.get(object, key));
  try {
    for (const [object, key, value] of changes) Reflect.set(object, key, value);
    const markup = renderToStaticMarkup(createElement(Hero));
    expect(markup).toContain("Example <span>Candidate.</span>");
    expect(markup).toContain("Example degree · Class of 2035");
    expect(markup).toContain("Example role");
    expect(markup).toContain("Example company");
  } finally {
    changes.forEach(([object, key], index) =>
      Reflect.set(object, key, previous[index]),
    );
  }
});

for (const theme of ["light", "dark"] as const) {
  for (const width of [375, 1440]) {
    test(`${theme} theme at ${width}px exposes all content without overflow`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.emulateMedia({ colorScheme: theme, reducedMotion: "reduce" });
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.goto("/");
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(
        "Soojan Basu.",
      );
      await expect(page.locator("#projects article")).toHaveCount(5);
      await expect(page.getByLabel("At a glance")).toContainText(
        "AI Product Intern",
      );
      await expect(page.getByLabel("At a glance")).toContainText(
        "Humanize Business Solutions",
      );
      await expect(page.getByLabel("At a glance")).toContainText(
        "BCA · Class of 2027",
      );
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      if (width < 680)
        await page.getByRole("button", { name: "Menu", exact: true }).click();
      await page
        .getByRole("navigation")
        .getByRole("link", { name: "Projects" })
        .click();
      await expect(page).toHaveURL(/#projects$/);
      await expect(page.locator("#projects")).toBeInViewport();
      expect(errors).toEqual([]);
      const accessibility = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(accessibility.violations).toEqual([]);
      await page.evaluate(() => {
        (document.activeElement as HTMLElement)?.blur();
        window.scrollTo(0, 0);
      });
      await page.screenshot({
        path: `test-results/portfolio-${theme}-${width}.png`,
        fullPage: true,
      });
    });
  }
}

test("theme choice persists and overrides the system preference", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("resume is a real PDF and keyboard skip navigation works", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
  const download = page.getByRole("link", { name: /Download resume/ }).first();
  const response = await request.get((await download.getAttribute("href"))!);
  expect(response.ok()).toBe(true);
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
});

test("mobile menu closes on Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu", exact: true });
  await menu.click();
  await page.getByRole("navigation").getByRole("link").first().focus();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
});

test("manual theme choice survives system changes when storage is blocked", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new DOMException("Denied", "SecurityError");
    };
    Storage.prototype.setItem = () => {
      throw new DOMException("Denied", "SecurityError");
    };
  });
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await page.emulateMedia({ colorScheme: "light" });
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("mobile menu supports opening and selecting a section by keyboard", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu", exact: true });
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("navigation").getByRole("link").first(),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#experience$/);
  await expect(page.locator("#experience")).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});

test("system changes apply until an explicit preference, including invalid saved values", async ({
  page,
}) => {
  await page.addInitScript(() =>
    localStorage.setItem("portfolio-theme", "invalid"),
  );
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await page.emulateMedia({ colorScheme: "light" });
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("theme changes and clearing a preference sync across actual tabs", async ({
  page,
  context,
}) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  const other = await context.newPage();
  await other.emulateMedia({ colorScheme: "dark" });
  await other.goto("/");
  await other.getByRole("button", { name: "Switch to light mode" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await other.evaluate(() => localStorage.setItem("unrelated", "value"));
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await other.evaluate(() => localStorage.removeItem("portfolio-theme"));
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await other.close();
});

test("failed theme writes do not restore the older saved preference during this visit", async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem("portfolio-theme", "dark");
    Storage.prototype.setItem = () => {
      throw new DOMException("Full", "QuotaExceededError");
    };
  });
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await page.emulateMedia({ colorScheme: "light" });
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect(
    await page.evaluate(() => localStorage.getItem("portfolio-theme")),
  ).toBe("dark");
});

test("desktop Escape does not move focus to the hidden mobile toggle", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const link = page.getByRole("navigation").getByRole("link").first();
  await link.focus();
  await page.keyboard.press("Escape");
  await expect(link).toBeFocused();
});

test("local links, crawler file and resources resolve without third-party requests", async ({
  page,
  context,
  request,
}) => {
  const external: string[] = [];
  const errors: string[] = [];
  await context.route("**/*", (route) => {
    if (new URL(route.request().url()).origin !== "http://127.0.0.1:4173") {
      external.push(route.request().url());
      return route.abort();
    }
    return route.continue();
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const hrefs = await page
    .locator("a[href]")
    .evaluateAll((anchors) =>
      anchors.map((anchor) => anchor.getAttribute("href")!),
    );
  for (const href of new Set(hrefs)) {
    if (href.startsWith("#")) await expect(page.locator(href)).toHaveCount(1);
    else if (href.startsWith("/")) {
      const response = await request.get(href);
      expect(response.ok()).toBe(true);
    } else expect(href).toMatch(/^(https:\/\/|mailto:)/);
  }
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toBe("User-agent: *\nAllow: /\n");
  const favicon = await request.get("/favicon.svg");
  expect(favicon.ok()).toBe(true);
  expect(await favicon.text()).toContain("<svg");
  expect(external).toEqual([]);
  expect(errors).toEqual([]);
  if (process.env.PLAYWRIGHT_USE_PRODUCTION === "true") {
    const assets = await page.evaluate(() =>
      performance
        .getEntriesByType("resource")
        .map((entry) => entry.name)
        .filter((url) => /\/assets\/.*\.(js|css)$/.test(url)),
    );
    let scriptBytes = 0;
    let styleBytes = 0;
    for (const url of new Set(assets)) {
      const response = await request.get(url);
      expect(response.ok()).toBe(true);
      if (url.endsWith(".js")) scriptBytes += (await response.body()).length;
      else styleBytes += (await response.body()).length;
    }
    expect(scriptBytes).toBeGreaterThan(0);
    expect(styleBytes).toBeGreaterThan(0);
    expect(scriptBytes).toBeLessThanOrEqual(250 * 1024);
    expect(styleBytes).toBeLessThanOrEqual(30 * 1024);
  }
});

test("the resume remains reachable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:4173/");
    await expect(
      page.getByRole("link", { name: "download Soojan Basu's resume" }),
    ).toBeVisible();
    const response = await context.request.get(
      "http://127.0.0.1:4173/Soojan_Basu_Resume.pdf",
    );
    expect(response.ok()).toBe(true);
    expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  } finally {
    await context.close();
  }
});

for (const theme of ["light", "dark"] as const) {
  test(`${theme} preference applies before the React bundle runs`, async ({
    page,
  }) => {
    await page.addInitScript(
      (value) => localStorage.setItem("portfolio-theme", value),
      theme,
    );
    await page.emulateMedia({
      colorScheme: theme === "light" ? "dark" : "light",
    });
    await page.route("**/*", (route) =>
      route.request().resourceType() === "script"
        ? route.abort()
        : route.continue(),
    );
    await page.goto("/");
    await expect(page.locator("#root")).toBeEmpty();
    await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
  });
}
