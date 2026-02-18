import { expect,test } from '@playwright/test';

test.describe('Site', () => {
  test('page loads with hero headline and navbar', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Vite \+ React/);
    await expect(page.locator('h1')).toContainText('We build websites that small businesses love');
    await expect(page.locator('.navbar')).toBeVisible();
  });

  test('nav link click scrolls page', async ({ page }) => {
    await page.goto('/');
    await page.click('.desktop-nav a[href="#what-we-do"]');
    await expect(page).toHaveURL(/#what-we-do/);
  });

  test('contact modal flow', async ({ page }) => {
    await page.goto('/');

    // Open modal
    await page.click('button:has-text("Contact Us")');
    await expect(page.locator('.modal-overlay')).toBeVisible();

    // Submit empty — validation errors
    await page.click('button:has-text("Submit")');
    await expect(page.locator('.form-error')).toHaveCount(3);

    // Fill form and submit
    await page.fill('#contact-name', 'Test User');
    await page.fill('#contact-email', 'test@example.com');
    await page.fill('#contact-message', 'Hello there');
    await page.click('button:has-text("Submit")');

    // Modal closes
    await expect(page.locator('.modal-overlay')).not.toBeVisible();
  });

  test('mobile nav', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const hamburger = page.locator('.mobile-menu-toggle');
    await expect(hamburger).toBeVisible();

    // Open menu
    await hamburger.click();
    await expect(page.locator('.mobile-nav.open')).toBeVisible();

    // Click link closes menu
    await page.click('.mobile-nav a[href="#what-we-do"]');
    await expect(page.locator('.mobile-nav.open')).not.toBeVisible();
  });
});
