import { test, expect } from '@playwright/test';

test('should open Amazon.com', async ({ page }) => {
  // Navigate to Amazon
  await page.goto('https://www.amazon.com');
  
  // Verify we're on Amazon by checking the title
  await expect(page).toHaveTitle(/Amazon/);
  
  // Verify the search box is present
  await expect(page.locator('#twotabsearchtextbox')).toBeVisible();
});
