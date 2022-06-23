const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://demosite.executeautomation.com/
  await page.goto('https://demosite.executeautomation.com/');

  // Click input[name="UserName"]
  await page.locator('input[name="UserName"]').click();

  // Fill input[name="UserName"]
  await page.locator('input[name="UserName"]').fill('admin');

  // Press Tab
  await page.locator('input[name="UserName"]').press('Tab');

  // Fill input[name="Password"]
  await page.locator('input[name="Password"]').fill('password');

  // Click input:has-text("Login")
  await page.locator('input:has-text("Login")').click();
  // assert.equal(page.url(), 'https://demosite.executeautomation.com/index.html?UserName=admin&Password=password&Login=Login');

  // Hover the element
  await page.hover('span[id="Automation Tools"]');

  // ---------------------
  //await context.close();
  //await browser.close();
})();