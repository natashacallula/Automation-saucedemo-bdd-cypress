Feature: Validate the shipping information feature on the SauceDemo website

Scenario: User fills out all required shipping information
  Given The user is on the shipping information page
  When The user enters their first name
  And The user enters their last name
  And The user enters their postal code
  And The user clicks the continue button
  Then The user should be navigated to the final checkout page

Scenario: User does not fill out the postal code
  Given The user is on the shipping information page
  When The user enters their first name
  And The user enters their last name
  And The user clicks the continue button
  Then The user should see an error message indicating the postal code is required

Scenario: User does not fill out the first name
  Given The user is on the shipping information page
  When The user enters their last name
  And The user enters their postal code
  And The user clicks the continue button
  Then The user should see an error message indicating the first name is required

Scenario: User does not fill out the last name
  Given The user is on the shipping information page
  When The user enters their first name
  And The user enters their postal code
  And The user clicks the continue button
  Then The user should see an error message indicating the last name is required