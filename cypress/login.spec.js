const { test, expect } = require('@playwright/test');

test('Login with invalid credentials', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://sdet.solutechlabs.com/login');

  // Enter invalid credentials
  await page.fill('input#email', 'invalid@test.com');
  await page.fill('input#password', 'wrongpassword');
  await page.click('button[type="submit"]');

  // Assert error message
  const errorMessage = await page.waitForSelector('.alert-error');
  await expect(errorMessage).toContainText('Invalid credentials');
});