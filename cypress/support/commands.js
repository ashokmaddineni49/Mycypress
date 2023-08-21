// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('PageElements', () => {

    cy.log("Command Getting here ")
    cy.visit('https://www.saucedemo.com/'); // Navigate to the login page
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.contains('Login').click()
    /*cy.get('h1').first().should('be.visible').then(($txt)=>{
        const orgtext =$txt.text()
        const text="Master test Automation, Faster."
        expect(orgtext).to.be.equal(text)
        cy.log('From the Tool',orgtext)

    })*/
});

Cypress.Commands.add('Launching_Automation_Site', () => {
    
    cy.visit('https://www.automationexercise.com/'); // Navigate to the login page

});



