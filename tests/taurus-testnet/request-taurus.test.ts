import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://scan.taurus.axiomesh.io");
});

const CHECK_URLS = [
  "https://scan.taurus.axiomesh.io/home",
  "https://scan.taurus.axiomesh.io/txs",
  "https://scan.taurus.axiomesh.io/blocks",
  "https://scan.taurus.axiomesh.io/accounts",
  "https://scan.taurus.axiomesh.io/tokens",
  "https://scan.taurus.axiomesh.io/stats",
  "https://scan.taurus.axiomesh.io/governance",
];

test.describe("Accessibility checks", () => {
  test("test request Level 1 page", async ({ page }) => {
    for (const url of CHECK_URLS) {
      console.log("test request url : ", url);
      await expect(async () => {
        const response = await page.request.get(url);
        expect(response.status()).toBe(200);
      }).toPass();
    }
  });
});
