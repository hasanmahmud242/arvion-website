const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (error, data) => {
    if (error) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', ({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.svg':'image/svg+xml'})[path.extname(file)] || 'application/octet-stream');
    res.end(data);
  });
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const base = `http://127.0.0.1:${server.address().port}`;
    await page.goto(base + '/index.html');
    await page.locator('[data-language="bn"]').click();
    assert.equal(await page.locator('html').getAttribute('lang'), 'bn');
    assert.equal(await page.locator('#siteSearch').getAttribute('placeholder'), 'পণ্য, ব্র্যান্ড বা মডেল খুঁজুন');
    for (const name of ['products','product','about','contact']) {
      await page.goto(base + '/' + name + '.html' + (name === 'product' ? '?product=0' : ''));
      assert.equal(await page.locator('html').getAttribute('lang'), 'bn');
      assert.equal(await page.locator('[data-language="bn"]').getAttribute('aria-pressed'), 'true');
    }
    await page.locator('#contactName').fill('Test Customer');
    await page.locator('[data-language="en"]').click();
    assert.equal(await page.locator('#contactName').inputValue(), 'Test Customer');
    assert.equal(await page.locator('#siteSearch').getAttribute('placeholder'), 'Search products, brands or models');
    for (const query of ['Miyako kettle','kettle Miyako','V937','V-৯৩৭','কেটলি','মিয়াকো কেটলি','ট্রিমার','JAIPAN']) {
      await page.goto(base + '/products.html?search=' + encodeURIComponent(query));
      const count = await page.locator('.product-column:not([hidden])').count();
      assert.ok(count > 0, `No results for ${query}`);
      console.log(query + ': ' + count + ' matches');
    }
    await page.goto(base + '/products.html?search=not-a-real-product-xyz');
    assert.equal(await page.locator('.product-column:not([hidden])').count(), 0);
    await page.locator('[data-language="bn"]').click();
    assert.equal(await page.locator('#emptyCategoryTitle').textContent(), 'আপনার অনুসন্ধানের সঙ্গে কোনো পণ্য মেলেনি।');
    await page.goto(base + '/products.html');
    await page.locator('[data-filter="shoes"]').click();
    await page.waitForFunction(() => document.querySelector('#emptyCategoryTitle').textContent.includes('শীঘ্রই'));
    for (const width of [320,390,768,1440]) {
      await page.setViewportSize({width, height:900});
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `Horizontal overflow at ${width}`);
      const controls = await page.locator('[data-language-control]').boundingBox();
      assert.ok(controls && controls.x >= 0 && controls.x + controls.width <= width);
    }
    assert.deepEqual(errors, []);
    console.log('Language persistence, restoration, dynamic translations, mobile widths and search passed.');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
