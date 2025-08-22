import { test, expect } from '@playwright/test';

test('should open YouTube.com', async ({ page }) => {
  // Navigate to YouTube
  await page.goto('https://www.youtube.com');
  
  // Verify we're on YouTube by checking the title
  await expect(page).toHaveTitle(/YouTube/);
  
  // Verify search box is present
  await expect(page.locator('input#search')).toBeVisible();
});
