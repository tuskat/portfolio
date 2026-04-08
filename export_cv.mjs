import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, 'resume/index.html');

const mode = process.argv[2] === 'dark' ? 'dark' : 'light';
const outPath = resolve(__dirname, `cedric_marcellin_cv_${mode}.pdf`);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1500));

if (mode === 'dark') {
  await page.evaluate(() => setMode('dark'));
} else {
  await page.evaluate(() => setMode('light'));
}

await page.pdf({
  path: outPath,
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
console.log(`PDF saved to: ${outPath}`);
