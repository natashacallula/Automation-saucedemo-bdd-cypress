Feature: User login validation on SauceDemo website

This feature tests the login functionality 
using different user accounts provided by SauceDemo, 
including valid and invalid credentials. 

Scenario: User login using a registered username (standard_user).
    Given The user opens the login page
    When The user enters standard_user as the username
    And The user enters the correct password
    And The user clicks the login button
    Then The user should see the homepage

Scenario: User login using a registered username (locked_out_user).
    Given The user opens the login page
    When The user enters locked_out_user as the username
    And The user enters the correct password
    And The user clicks the login button
    Then The user should see an error message stating the user has been locked out

Scenario: User login using a registered username (problem_user).
    Given The user opens the login page
    When The user enters problem_user as the username
    And The user enters the correct password
    And The user clicks the login button
    Then The user should see the homepage

Scenario: User login using a registered username (performance_glitch_user).
    Given The user opens the login page
    When The user enters performance_glitch_user as the username
    And The user enters the correct password
    And The user clicks the login button
    Then The user should see the homepage

Scenario: User login using a registered username (error_user).
    Given The user opens the login page
    When The user enters error_user as the username
    And The user enters the correct password
    And The user clicks the login button
    Then The user should see the homepage

Scenario: User login using a registered username (visual_user).
    Given The user opens the login page
    When The user enters visual_user as the username
    And The user enters the correct password
    And The user clicks the login button
    Then The user should see the homepage

Scenario: User login using an unregistered username (eduwork_user).
    Given The user opens the login page
    When The user enters eduwork_user as the username
    And The user enters the correct password
    And The user clicks the login button
    Then The user should see an error message stating the username and password not match

Scenario: User login using a wrong password (eduwork_sauce).
    Given The user opens the login page
    When The user enters standard_user as the username
    And The user enters the wrong password
    And The user clicks the login button
    Then The user should see an error message stating the username and password not match

Scenario: User login using an unregistered sername and wrong password.
    Given The user opens the login page
    When The user enters eduwork_user as the username
    And The user enters the wrong password
    And The user clicks the login button
    Then The user should see an error message stating the username and password not match