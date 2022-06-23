const playwright = require('playwright');

(async () => {
    // Inside this block
    for(const browserType of ['chromium', 'firefox', 'webkit']){

        const browser = await playwright[browserType].launch({
            headless: false,
            slowMo:50
        });
    
        const page = await browser.newPage();
    
        await page.goto("https://executeautomation.com");
    
        await page.screenshot({path: `example-${browserType}.png`});
    
        await browser.close();


    }


})();