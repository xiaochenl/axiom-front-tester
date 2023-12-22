import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://172.16.13.131/home");
});

test.describe("Home page checks", () => {
  test("should have the correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/AXMScan/);
  });
});
