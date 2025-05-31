import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('The user is on the products page', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type("standard_user")
    cy.get('#password').type("secret_sauce")
    cy.get('#login-button').click()
    cy.url().should('include', 'inventory.html')

})

When('The user clicks the menu button in the upper left corner', () => {
    cy.get('.bm-burger-button').click()
})

When('The user clicks the logout button', () => {
    cy.get('#logout_sidebar_link').click()
})


Then('The user should be navigated to the login page', () => {
     cy.url().should('include', 'saucedemo.com')
})