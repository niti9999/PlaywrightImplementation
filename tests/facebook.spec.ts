import { test, expect } from '@playwright/test';

test('should open Facebook.com', async ({ page }) => {
  // Navigate to Facebook
  await page.goto('https://www.facebook.com');
  
  // Verify we're on Facebook by checking the title
  await expect(page).toHaveTitle(/Facebook/);
  
  // Verify login form is present
  await expect(page.locator('form')).toBeVisible();
});
