import { chromium } from '/usr/local/lib/node_modules/gsd-pi/node_modules/playwright/index.mjs';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCREENSHOT_DIR = __dirname;
const PROJECT_DIR = path.resolve(__dirname, '..');

// ── Standalone routes ──
const STANDALONE_ROUTES = [
  { name: '01-home', path: '/' },
];

function startServer() {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['astro', 'dev', '--port', '4321'], {
      cwd: PROJECT_DIR,
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true,
    });

    let output = '';
    const timeout = setTimeout(() => {
      reject(new Error('Server start timeout. Output:\n' + output));
    }, 30000);

    server.stdout.on('data', (data) => {
      const text = data.toString();
      output += text;
      process.stdout.write(`[astro] ${text}`);

      // Astro prints "Local    http://localhost:PORT/"
      const match = text.match(/Local\s+(https?:\/\/[^\s]+)/);
      if (match) {
        clearTimeout(timeout);
        resolve({ server, url: match[1].replace(/\/$/, '') });
      }
    });

    server.stderr.on('data', (data) => {
      process.stderr.write(`[astro:err] ${data}`);
    });

    server.on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });

    server.on('exit', (code) => {
      clearTimeout(timeout);
      reject(new Error(`Server exited with code ${code} before ready`));
    });
  });
}

async function main() {
  console.log('🚀 Starting Astro dev server...');
  const { server, url: BASE_URL } = await startServer();
  console.log(`✅ Server ready at ${BASE_URL}\n`);

  // Clean old screenshots
  const oldFiles = fs.readdirSync(SCREENSHOT_DIR).filter(f => f.endsWith('.png'));
  for (const f of oldFiles) fs.unlinkSync(path.join(SCREENSHOT_DIR, f));
  console.log(`🧹 Cleaned ${oldFiles.length} old screenshots\n`);

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    // ── Screenshot standalone routes ──
    console.log('📸 Screenshotting standalone routes...');
    for (const route of STANDALONE_ROUTES) {
      console.log(`  → ${route.name} (${route.path})`);
      await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2000); // fonts, i18n

      // Scroll down in steps to trigger IntersectionObserver on all .reveal elements
      const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
      const step = 400;
      for (let y = 0; y < bodyHeight; y += step) {
        await page.evaluate((y) => window.scrollTo(0, y), y);
        await page.waitForTimeout(80);
      }
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);

      // Force-observe any remaining reveal elements
      await page.evaluate(() => {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
      });
      await page.waitForTimeout(300);

      // Scroll to top
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);

      const filePath = path.join(SCREENSHOT_DIR, `${route.name}.png`);
      await page.screenshot({ path: filePath, fullPage: true });
      console.log(`    ✅ saved: ${route.name}.png`);
    }

    console.log('\n🎉 All done!');
  } finally {
    if (browser) await browser.close();
    server.kill('SIGTERM');
    console.log('🛑 Server stopped');
  }
}

main().catch(err => {
  console.error('❌ Fatal:', err);
  process.exit(1);
});
