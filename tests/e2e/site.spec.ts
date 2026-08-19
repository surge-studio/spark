import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const publicPages = [
  '/',
  '/docs',
  '/components',
  '/components/surge-logo',
  '/components/pixel-loader',
] as const;

for (const path of publicPages) {
  test(`${path} has no automatically detectable accessibility violations`, async ({
    page,
  }) => {
    await page.goto(path);
    await expect(page.locator('h1, h2').first()).toBeVisible();

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}

test('component install commands switch package managers and copy', async ({
  page,
}) => {
  await page.goto('/components/pixel-loader');

  const packageManagerGroup = page.getByRole('group', {
    name: 'Package manager',
  });
  await packageManagerGroup
    .getByRole('button', { name: 'npm', exact: true })
    .click();
  await expect(page.locator('code')).toContainText('npx shadcn@latest add');

  await page.getByRole('button', { name: 'Copy command' }).click();
  await expect(
    page.getByRole('button', { name: 'Command copied' })
  ).toBeVisible();
});

test('registry and discovery endpoints are published', async ({ request }) => {
  const registryResponse = await request.get('/r/registry.json');
  const sitemapResponse = await request.get('/sitemap.xml');
  const robotsResponse = await request.get('/robots.txt');

  expect(registryResponse.ok()).toBe(true);
  expect((await registryResponse.json()).items).toHaveLength(2);
  expect(sitemapResponse.ok()).toBe(true);
  expect(await sitemapResponse.text()).toContain('/components/pixel-loader');
  expect(robotsResponse.ok()).toBe(true);
  expect(await robotsResponse.text()).toContain('/sitemap.xml');
});

test('legacy docs component routes redirect permanently', async ({
  request,
}) => {
  const response = await request.get('/docs/components/pixel-loader', {
    maxRedirects: 0,
  });

  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe('/components/pixel-loader');
});
