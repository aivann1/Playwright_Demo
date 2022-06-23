import { test, expect } from '@playwright/test'



test.describe('BI Login Test', async () => {

    test.skip('ConfigTest @slow', async ({ page, browserName }) => {

        await test.step('Step 1: Open EAApp Site', async () => {
            await page.goto('https://10.200.122.206/WebConsole////#!/dashboard')
        });

        await test.step('Step 2: Perform Login', async () => {
            await page.type('input[name="username"]', 'administrator');
            await page.type('input[name="password"]', 'eEye2010');
            await page.locator('[aria-label="Log In"]').click();
            
            // Click text=AssetsView and manage assets.
            await Promise.all([
                page.waitForNavigation(/*{ url: 'https://10.200.122.206/WebConsole////#!/app/assets-grid?t=1655946295101' }*/),
                page.locator('text=AssetsView and manage assets.').click()
            ]);

        });

        await test.step('Step 3: Taking Screenshot', async () => {
            await page.screenshot({ path: 'BILogin.png', fullPage: true });
        });

    });

})


