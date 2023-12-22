import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://172.16.13.131");
});

const CHECK_URLS = [
  "http://172.16.13.131/home",
  "http://172.16.13.131/txs",
  "http://172.16.13.131/blocks",
  "http://172.16.13.131/accounts",
  "http://172.16.13.131/tokens",
  "http://172.16.13.131/stats",
  "http://172.16.13.131/governance",
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
