import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('The user is on the shipping information page', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type("standard_user")
    cy.get('#password').type("secret_sauce")
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
    cy.url().should('include', 'one.html')
})

When('The user enters their first name', () => {
    cy.get('#first-name').clear()
    cy.get('#first-name').type("Natasha")
})

When('The user enters their last name', () => {
    cy.get('#last-name').clear()
    cy.get('#last-name').type("Callula")
})

When('The user enters their postal code', () => {
    cy.get('#postal-code').clear()
    cy.get('#postal-code').type("15132")
})

When('The user clicks the continue button', () => {
    cy.get('#continue').click()
})


Then('The user should be navigated to the final checkout page', () => {
    cy.url().should('include', 'checkout-step-two.html') 
})

Then('The user should see an error message indicating the postal code is required', () => {
    cy.get('h3[data-test="error"')
    .should('be.visible')
    .and('contain.text', 'Error: Postal Code is required') 
})

Then('The user should see an error message indicating the first name is required', () => {
    cy.get('h3[data-test="error"')
    .should('be.visible')
    .and('contain.text', 'Error: First Name is required') 
})

Then('The user should see an error message indicating the last name is required', () => {
     cy.get('h3[data-test="error"')
    .should('be.visible')
    .and('contain.text', 'Error: Last Name is required') 
})