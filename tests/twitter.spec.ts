import { test, expect } from '@playwright/test';

test('should open Twitter.com', async ({ page }) => {
  // Navigate to Twitter
  await page.goto('https://www.twitter.com');
  
  // Verify we're on Twitter by checking the URL
  await expect(page).toHaveURL(/twitter.com/);
  
  // Wait for and verify that the main content area loads
  await expect(page.locator('main')).toBeVisible();
});
