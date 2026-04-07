import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, 'cedric_marcellin_cv.html');
const outPath = resolve(__dirname, 'cedric_marcellin_cv.pdf');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

// Set dark mode (default) — page already inits to dark+EN
// Wait for Google Fonts to load
await new Promise(r => setTimeout(r, 1500));

await page.pdf({
  path: outPath,
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  pageRanges: '',
});

await browser.close();
console.log(`PDF saved to: ${outPath}`);
