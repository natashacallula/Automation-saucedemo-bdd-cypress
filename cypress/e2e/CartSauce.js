import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('The user is on the products page', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type("standard_user")
    cy.get('#password').type("secret_sauce")
    cy.get('#login-button').click()
})

When('The user add a product to cart', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
})

When('The user clicks the cart icon', () => {
    cy.get('.shopping_cart_link').click()
})

When('The user clicks the checkout button', () => {
    cy.get('#checkout').click()
})

Then('The user should be navigated to the shipping information page', () => {
    cy.url().should('include', 'one.html')
})
