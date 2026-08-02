const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/#/tools/piano');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'piano-studio-full.png', fullPage: true });
  console.log('Screenshot saved as piano-studio-full.png');
  await browser.close();
})();
