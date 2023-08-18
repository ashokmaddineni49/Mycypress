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

const baseUrl = "https://ultimateqa.com/"
Cypress.Commands.add('PageElements', () => {
    cy.visit(baseUrl); // Navigate to the login page
    cy.get('h1').first().should('be.visible').then(($txt)=>{
        const orgtext =$txt.text()
        const text="Master test Automation, Faster."
        expect(orgtext).to.be.equal(text)
        cy.log('From the Tool',orgtext)

    })
});

