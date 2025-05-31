import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('The user is on the products page', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type("standard_user")
    cy.get('#password').type("secret_sauce")
    cy.get('#login-button').click()
})

When('The user selects option price high to low', () => {
    cy.get('.product_sort_container').select('Price (high to low)')
})

Then('The products sorted by highest price', () => {
    cy.get('option[value="hilo"]').should('have.value','hilo')
})


When('The user selects option price low to high', () => {
   cy.get('.product_sort_container').select('Price (low to high)')
})

Then('The products sorted by lowest price', () => {
    cy.get('option[value="lohi"]').should('have.value','lohi')
})

When('The user selects option name Z to A', () => {
    cy.get('.product_sort_container').select('Name (Z to A)')
})

Then('The products sorted by alphabetically from Z', () => {
    cy.get('option[value="za"]').should('have.value','za')
})

When('The user selects option name A to Z', () => {
    cy.get('.product_sort_container').select('Name (A to Z)')
})

Then('The products sorted by alphabetically from A', () => {
    cy.get('option[value="az"]').should('have.value','az')
})