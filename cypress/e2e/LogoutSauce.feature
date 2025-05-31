Feature: User Validates the logout feature on the SauceDemo website

Scenario: User logs out from the website
    Given The user is on the products page
    When The user clicks the menu button in the upper left corner
    And The user clicks the logout button
    Then The user should be navigated to the login page