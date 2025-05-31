Feature: Validate the cart management feature on the SauceDemo website

Scenario: User adds a product to cart and chcks out
    Given The user is on the products page
    When The user add a product to cart
    And The user clicks the cart icon
    And The user clicks the checkout button
    Then The user should be navigated to the shipping information page

Scenario: User checks out with an empty cart
    Given The user is on the products page
    When The user clicks the cart icon
    And The user clicks the checkout button
    Then The user should be navigated to the shipping information page