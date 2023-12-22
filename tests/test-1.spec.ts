import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://172.16.13.131/");
  await page.goto("http://172.16.13.131/home");
  await page.getByRole("button", { name: "View all transactions" }).click();
  await page.getByText("Governance").click();
  await page.getByRole("button", { name: "Connect wallet" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page
    .getByRole("dialog")
    .locator("div")
    .filter({ hasText: "MetaMaskPopularDear friend," })
    .nth(3)
    .click();
  const page1 = await page1Promise;
  await page.getByLabel("Close").click();
});
