import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {

  // TEST 1: SUCCESSFUL LOGIN (Positive Case)
  test('TC-004: Successful login (Positive Case)', async ({ page }) => {
    // STEP 1: Navigate to the login page
    await page.goto('/signin');

    // STEP 2: Fill in the form with valid credentials
    await page.locator('[data-test="signin-username"] input').fill('saratest');
    await page.locator('[data-test="signin-password"] input').fill('password123');

    // STEP 3: Click the "Sign In" button
    await page.locator('[data-test="signin-submit"]').click();

    // STEP 4: Verification (Assertion)
    // The best way to confirm login is to see the "Sign Out" button.
    const logoutButton = page.locator('[data-test="sidenav-signout"]');
    await expect(logoutButton).toBeVisible();
  });

  // TEST 2: FAILED LOGIN (Negative Case)
  test('TC-005: Login fails with incorrect password (Negative Case)', async ({ page }) => {
    // STEP 1: Navigate to the login page
    await page.goto('/signin');

    // STEP 2: Fill in the form with an INVALID password
    await page.locator('[data-test="signin-username"] input').fill('saratest');
    await page.locator('[data-test="signin-password"] input').fill('incorrectpassword');

    // STEP 3: Click the "Sign In" button
    await page.locator('[data-test="signin-submit"]').click();

    // STEP 4: Verification (Assertion)
    // We expect the login error message to be visible.
    const errorMessage = page.locator('[data-test="signin-error"]');
    await expect(errorMessage).toBeVisible();
  });

});
