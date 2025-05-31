Feature: Validate the product sorting feature on the SauceDemo website

Scenario: User sorts products by price from high to low
    Given The user is on the products page
    When The user selects option price high to low
    Then The products sorted by highest price

Scenario: User sorts products by price from low to high
    Given The user is on the products page
    When The user selects option price low to high
    Then The products sorted by lowest price

Scenario: User sorts products by name from Z to A
    Given The user is on the products page
    When The user selects option name Z to A
    Then The products sorted by alphabetically from Z

Scenario: User sorts products by name from A to Z
    Given The user is on the products page
    When The user selects option name Z to A
    And The user selects option name A to Z
    Then The products sorted by alphabetically from A
