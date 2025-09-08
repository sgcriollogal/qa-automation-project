# Cypress Real World App – QA Test Project

**Author:** Sara Criollo
**Date:** 2025-09-08

This repository contains the test plan, automated tests, and bug reports for the Cypress Real World App. It demonstrates both manual and automated QA workflows using Playwright with TypeScript.

## 1. Project Overview

Name: Cypress Real World App
GitHub URL: https://github.com/cypress-io/cypress-realworld-app

**Reason for Selection:** 
1. Full-stack web app (React + Node/Express)
2. Includes authentication, forms, and CRUD operations
3. Easy to run locally and test critical user flows

## 2. Prerequisites / Environment Setup

1. Node.js (>=22.15.0)
2. npm or Yarn
3. Chrome, Firefox, or Webkit browser

## Installation Steps
# 1. Clone the repository
git clone https://github.com/cypress-io/cypress-realworld-app
cd cypress-realworld-app

# 2. Install dependencies
npm install
# or
yarn install

# 3. Start the application
npm run dev
# or
yarn dev

*Frontend:* http://localhost:3000
*Backend:* http://localhost:3001

## 3. Test Plan

*Refer to TEST_PLAN.md for full details. Highlights include:*

**Critical Test Cases:**

1. User Login (valid/invalid)
2. User Registration (valid/invalid)
3. Create/Search Contact
4. Send Payment (valid/invalid)
5. Transaction History
6. Logout

**Testing Approach:**

1. **Manual:** Explore application flows, identify edge cases, validate UI/UX
2. **Automated:** Playwright with TypeScript for end-to-end tests, including assertions for expected behavior

**Risk Assessment:**

1. **High:** Login, Registration, Payment
2. **Medium:** Contact creation/search
3. **Low:** Transaction history, profile updates, logout

**Defect Reporting Procedure:**

1. Document bugs in BUG_REPORT.md
2. Include steps to reproduce, expected vs actual, severity, priority, evidence

## 4. Automated Tests

*Automated tests are implemented in playwright_tests/:*

1. login.spec.ts → Positive and negative login scenarios
2. new-transaction.spec.ts → Creating new transactions

**Run Tests:**
npx playwright test

**View Test Report:**
npx playwright show-report

**Notes:**

1. Handles optional onboarding pop-ups
2. Comments are in English
3. Frontend runs on http://localhost:3000
4. Backend API runs on http://localhost:3001

## 5. Bug Reports

*Refer to BUG_REPORT.md for complete details. Highlights include:*
1. Duplicate usernames allowed
2. Severity: Critical | Priority: High
3. Numbers accepted in name fields
4. Severity: Low | Priority: Low
5. Password identical to username allowed
6. Severity: Medium | Priority: Medium
7. Each bug includes: title, steps to reproduce, expected vs actual results, severity, priority, and suggested fix.

## 6. Deliverables

1. playwright_tests/ → Automated tests
2. TEST_PLAN.md → Test plan document
3. BUG_REPORT.md → Bug report document
4. README.md → Setup instructions, test overview, and execution guidance

## 7. Execution Instructions

1. Ensure Node.js and Yarn/npm are installed.
2. Start frontend (yarn dev) and backend (http://localhost:3001).
3. Run automated tests: npx playwright test.
4. Open HTML report: npx playwright show-report.
5. Review BUG_REPORT.md and TEST_PLAN.md for test evidence and steps.