import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('The user opens the login page', () => {
    cy.visit('https://www.saucedemo.com/')
})

When('The user enters standard_user as the username', () => {
    cy.get('#user-name').type("standard_user")
})

When('The user enters the correct password', () => {
    cy.get('#password').type("secret_sauce")
})

When('The user clicks the login button', () => {
    cy.get('#login-button').click()
})

Then('The user should see the homepage', () => {
    cy.url().should('include', 'inventory.html')
})

When('The user enters locked_out_user as the username', () => {
    cy.get('#user-name').type("locked_out_user")
})

Then('The user should see an error message stating the user has been locked out', () => {
    cy.get('h3[data-test="error"')
        .should('be.visible')
        .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
})

When('The user enters problem_user as the username', () => {
    cy.get('#user-name').type("problem_user")
})

When('The user enters performance_glitch_user as the username', () => {
    cy.get('#user-name').type("performance_glitch_user")
})

When('The user enters error_user as the username', () => {
    cy.get('#user-name').type("error_user")
})

When('The user enters visual_user as the username', () => {
    cy.get('#user-name').type("visual_user")
})

When('The user enters eduwork_user as the username', () => {
    cy.get('#user-name').type("eduwork_user")
})

When('The user enters the wrong password', () => {
    cy.get('#password').type("eduwork_sauce")
})

Then('The user should see an error message stating the username and password not match', () => {
     cy.get('h3[data-test="error"')
        .should('be.visible')
        .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
})