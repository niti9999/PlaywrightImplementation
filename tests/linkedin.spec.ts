import { test, expect } from '@playwright/test';

test('should open LinkedIn.com', async ({ page }) => {
  // Navigate to LinkedIn
  await page.goto('https://www.linkedin.com');
  
  // Verify we're on LinkedIn by checking the title
  await expect(page).toHaveTitle(/LinkedIn/);
  
  // Verify sign in section is present
  await expect(page.locator('.sign-in-form')).toBeVisible();
});
