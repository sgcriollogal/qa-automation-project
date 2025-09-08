# Test Plan — Cypress Real World App

**Author:** Sara Criollo  
**Date:** 2025-09-08  

---

## 1. Selected project
**Name:** cypress-realworld-app  
**URL:** https://github.com/cypress-io/cypress-realworld-app  

**Reason for selection:**  
Full-stack app (React + Node/Express) easy to run locally, with authentication, forms, and CRUD. Designed for testing, ideal for demonstrating E2E tests, positive and negative cases without the need for an external DB.  

---

## 2. Test objectives
- Verify critical flows: registration, login, creation/editing/deletion of resources.  
- Validate messages and validations on the frontend and backend.  
- Detect and document defects with reproducible steps.  
- Deliver an automated suite for at least 3 critical flows (positive/negative).  

---

## 3. Scope
**Included:** Functional testing of the UI (http://localhost:3000) and API (http://localhost:3001), CRUD flows, authentication, and form validations in the Chrome browser (latest version).  
**Excluded:** Performance testing, in-depth security testing (penetration testing), exhaustive cross-browser compatibility testing.  

---

## 4. Testing approach
- **Automated:** Playwright with TypeScript will be used to create end-to-end test scripts, including assertions to validate expected behavior.  
- **Manual:** Initial manual exploration will be performed to familiarize ourselves with the application, as well as to check for UI/UX errors and edge cases that are difficult to automate.  
- **Support:** Backend logs and API responses (using browser developer tools) will be reviewed to obtain evidence and debug failures.  

---

## 5. Environment requirements
- **Software:** Node.js (version `22.15.0` or the one specified in `.node-version`), Yarn or npm.  
- **Network ports:** Access to `localhost:3000` for the frontend and `localhost:3001` for the backend.  
- **Execution commands:**
```bash
  git clone https://github.com/cypress-io/cypress-realworld-app
  cd cypress-realworld-app
  yarn install
  yarn dev

---

## 6. Critical Test Cases

**TC01 – User Login (valid)**  
- Preconditions: User exists in DB  
- Steps:  
  1. Go to login page  
  2. Enter valid email + password  
  3. Click login  
- Expected Result: User is redirected to dashboard  

**TC02 – User Login (invalid)**  
- Preconditions: Wrong password  
- Steps:  
  1. Go to login page  
  2. Enter valid email + wrong password  
  3. Click login  
- Expected Result: Error message "Invalid credentials" is shown  

**TC03 – User Registration (valid)**  
- Preconditions: None  
- Steps:  
  1. Go to Register page  
  2. Fill **First Name**, **Last Name**, **Username**, **Password**, **Confirm Password** with valid/unique data  
  3. Submit  
- Expected Result: New user is created, logged in, redirected to dashboard  

**TC04 – User Registration (invalid)**  
- Preconditions: None  
- Steps:  
  1. Go to Register page  
  2. Leave fields empty or use invalid email format  
  3. Submit  
- Expected Result: Error validation messages are displayed  

**TC05 – Create Contact**  
- Preconditions: User logged in  
- Steps:  
  1. Login  
  2. Go to “New Contact” page  
  3. Fill contact details (name, email, phone)  
  4. Save  
- Expected Result: Contact is added and visible in contact list  

**TC06 – Search Contact**  
- Preconditions: Contact exists  
- Steps:  
  1. Login  
  2. Use search bar to find contact by name/email  
- Expected Result: Contact appears in search results  

**TC07 – Send Payment (valid)**  
- Preconditions: User logged in + balance available  
- Steps:  
  1. Login  
  2. Select contact  
  3. Enter valid amount  
  4. Confirm  
- Expected Result: Payment is processed and balance updated  

**TC08 – Send Payment (invalid)**  
- Preconditions: User logged in + insufficient balance  
- Steps:  
  1. Login  
  2. Select contact  
  3. Enter amount greater than balance  
  4. Confirm  
- Expected Result: Error message “Insufficient funds”  

**TC09 – Transaction History**  
- Preconditions: User has transactions  
- Steps:  
  1. Login  
  2. Open “Transactions” tab  
- Expected Result: Transaction list shows correct history  

**TC10 – Logout**  
- Preconditions: User logged in  
- Steps:  
  1. Login  
  2. Click Logout  
- Expected Result: User is redirected to login page, session closed  

---

## 7. Risk Assessment and Prioritization

- **High Risk (must test first):**  
  - Login / Registration → **Justification:** Blockers; without them, no other functionality can be tested or used.  
  - Send Payment flow → **Justification:** Direct impact on the business core and user trust.  

- **Medium Risk:**  
  - Contact creation and search → **Justification:** Important for usability, but app remains usable without it.  

- **Low Risk:**  
  - Transaction history details, profile updates, logout → **Justification:** Minimal impact compared to core flows.  

---

## 8. Defect Reporting Procedure

**Tool:** Markdown document (`bugs.md`) or Jira/Azure DevOps (if available).  

**Template:**  
- **Title:** Short summary of the defect  
- **Environment:** OS, Browser, App version  
- **Steps to Reproduce:** Numbered list with detailed actions  
- **Expected Result:** What should happen  
- **Actual Result:** What actually happened  
- **Severity:** Critical / High / Medium / Low  
- **Priority:** P1 / P2 / P3  
- **Evidence:** Screenshots, logs, or video if available  

**Example:**  
- **Title:** Login accepts invalid email format  
- **Steps to Reproduce:**  
  1. Go to login page  
  2. Enter `test@` as email and valid password  
  3. Click login  
- **Expected Result:** Error message “Invalid email format”  
- **Actual Result:** User is redirected to dashboard  
- **Severity:** High  
- **Priority:** P1  
- **Evidence:** Screenshot attached
