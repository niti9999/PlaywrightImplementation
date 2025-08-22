import { test, expect } from '@playwright/test';

test('should open Google.com', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');
  
  // Verify we're on Google by checking the title
  await expect(page).toHaveTitle(/Google/);
});
