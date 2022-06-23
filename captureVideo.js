const playwright = require('playwright');

(async () => {
    // Inside this block
    const browser = await playwright['firefox'].launch({
        headless: false,
        slowMo:50
    });


    const page = await browser.newPage({
        //videosPath: 'videos/'
        recordVideo: 
        {dir:'videos/',
        size: {width: 800, height:700}
        }
    });

    await page.goto("https://executeautomation.com");

    await page.screenshot({path: `ea-${Date.now}.png`});

    await browser.close();

})();