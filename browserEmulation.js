const {chromium, devices} = require('playwright');

(async () => {
    // Inside this block
    const iPhone = devices['iPhone 12 Pro Max'];
    const browser = await chromium.launch({
        headless: false,
        slowMo:50
    });

    const context = await browser.newContext({
        ...iPhone,
        videosPath: 'videos/'
    })

    const page = await context.newPage();

    await page.goto("https://executeautomation.com");

    //await page.screenshot({path: `ea-${Date.now}.png`});

    await browser.close();

})();