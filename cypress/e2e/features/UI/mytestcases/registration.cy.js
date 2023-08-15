
const url = 'http://localhost:3000/'
describe('Registration <home>', () => {
    it('Registers the Page', () => {
        cy.visit(url);
        cy.contains('Register').click();
    })

    it('Fill the Registration Form', () => {
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Maddineni');
        cy.get('#emailId').type('ashokkumartest@gmail.com');
        cy.get('#license').type('123456');
        cy.get('#password').type('Test@123');
        cy.get('#confirmPassword').type('Test@123');
        cy.get('.btn.btn-primary').should('be.visible')
        cy.get('.btn.btn-primary').invoke('text').then((text) => {
            cy.log(`Button Name is : ${text}`)
        }
    )})
})
