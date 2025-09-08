import { test, expect } from '@playwright/test';

test.describe('Transactions', () => {

  // This block runs BEFORE each test to ensure the user is logged in.
  test.beforeEach(async ({ page }) => {
    // 1. Log in
    await page.goto('/signin');
    await page.locator('[data-test="signin-username"] input').fill('saratest');
    await page.locator('[data-test="signin-password"] input').fill('password123');
    await page.locator('[data-test="signin-submit"]').click();

    // 2. Wait for the URL to change to the dashboard.
    await expect(page).toHaveURL('http://localhost:3000/');

    // 3. Complete the onboarding tutorial if it appears
    const onboardingLocator = page.locator('[data-test="user-onboarding-next"]');
    try {
      await onboardingLocator.waitFor({ timeout: 2000 }); // Wait up to 2 seconds
      await onboardingLocator.click();

      await page.locator('[data-test="bankaccount-bankName-input"] input').fill('My Test Bank');
      await page.locator('[data-test="bankaccount-routingNumber-input"] input').fill('987654321');
      await page.locator('[data-test="bankaccount-accountNumber-input"] input').fill('123456789');
      await page.locator('[data-test="bankaccount-submit"]').click();

      await page.locator('[data-test="user-onboarding-next"]').click();
    } catch (error) {
      // If the element doesn't appear, continue without error
      console.log("Onboarding pop-up not found, skipping.");
    }
  });

  // TEST 3: CREATE A NEW TRANSACTION (Positive Case)
  test('TC-006: Create a new transaction (Positive Case)', async ({ page }) => {
    // 4. Navigate to the new transaction page
    await page.locator('[data-test="nav-top-new-transaction"]').click();

    // 5. Select a user from the list
    await page.locator('[data-test="user-list-search-input"]').click();
    await page.locator('[data-test^="user-list-item"]').first().click();

    // 6. Fill in the amount and description
    await page.locator('#amount').fill('100');
    await page.locator('#transaction-create-description-input').fill('Test transaction from Playwright');

    // 7. Click the "Pay" button
    await page.locator('[data-test="transaction-create-submit-payment"]').click();

    // 8. Return to the transactions list from the confirmation screen
    await page.locator('[data-test="new-transaction-return-to-transactions"]').click();

    // 9. Click on the "Mine" tab to see our transaction
    await page.locator('[data-test="nav-personal-tab"]').click();

    // 10. Verification (Assertion) - We check for the FIRST matching element
    const newTransaction = page.locator('[data-test^="transaction-item"]')
      .filter({ hasText: 'Test transaction from Playwright' })
      .first();
    await expect(newTransaction).toBeVisible();
  });

});
