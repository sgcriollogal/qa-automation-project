# Bug Report #1: Duplicate usernames are allowed
**Title:** Validation failure: The system allows multiple users to register with the same username.
*Steps to Reproduce:*

1. Navigate to the registration page (/signup).
2. Create a new user with a unique username (e.g., uniqueusername123). Complete the registration.
3. Log out.
4. Navigate back to the registration page (/signup).
5. Fill out the form using a different first and last name, but with the same username from step 2 (uniqueusername123).
6. Click on the “Sign Up” button.

**Expected Result:**
The system should display a clear error message, indicating that the username is already in use and registration should not be allowed.

**Actual Result:**
The system allows the new user to register without any error. There are now two different accounts with the same username.

**Severity:** Critical

**Justification:** It can cause data corruption, login issues, and is a major security risk.

**Priority:** High

*Justification: It must be fixed urgently as it affects a core functionality and the integrity of user data.*

# Bug Report #2: Numbers are accepted in name fields
**Title:** Incorrect input validation: The “First Name” and “Last Name” fields accept numeric characters.
*Steps to Reproduce:*

1. Navigate to the registration page (/signup).
2. In the “First Name” field, enter a numeric value (e.g., 152).
3. In the “Last Name” field, enter a numeric value (e.g., 125).
4. Fill in the other fields with valid data.
5. Click the “Sign Up” button.

**Expected Result:**
The form should display a validation error below the name fields, such as “The name can only contain letters,” and user creation should be blocked.

**Actual Result:**
The user is successfully created with a numeric first and/or last name.

**Severity:** Low

**Justification:** Does not block functionality or pose a security risk. Affects the quality and integrity of the data in the database.

**Priority**: Low

*Justification: This is a cosmetic and data quality issue that can be resolved after more critical bugs.*

# Bug Report #3: Password can be identical to username
**Title:** Weak password policy: The system allows a user's password to be identical to their username.
*Steps to Reproduce:*

1. Navigate to the registration page (/signup).
2. Fill in the “First Name” and “Last Name” fields.
3. Enter a value in the “Username” field (e.g., password123).
4. Enter the same value (password123) in the “Password” and “Confirm Password” fields.
5. Click the “Sign Up” button.

**Expected Result:**
The system should display a validation error, such as “Password cannot be the same as username,” to enforce a more secure password policy.

**Actual Result:**
The account is successfully created without any security warnings.

**Severity: **Medium

**Justification:** Encourages poor security practices by the user, making the account vulnerable to simple dictionary or guessing attacks.

**Priority:** Medium

*Justification: Improving user security is important. It should be fixed after critical bugs.*