const {faker} =require("@faker-js/faker")


const fname = faker.person.firstName();
const lname = faker.person.lastName();
const emailId = faker.internet.email();
const password = faker.internet.password();
const licenseId = "DLR" + Math.floor(100000 + Math.random() * 900000);



const url = 'http://localhost:3000/'
describe('Registration <home>', () => {
    it('Registers the Page', () => {
        cy.visit(url);
        cy.contains('Register').click();
    })

    it('Fill the Registration Form', () => {
        cy.get('#firstName').clear().type(fname);
        cy.get('#lastName').clear().type(lname);
        cy.get('#emailId').clear().type(emailId);
        cy.get('#license').clear().type(licenseId);
        cy.get('#password').clear().type(password);
        cy.get('#confirmPassword').clear().type(password);
        cy.get('.btn.btn-primary').should('be.visible');
        cy.get('.btn.btn-primary').invoke('text').then((text) => {
            cy.log(`Button Name is : ${text}`)
        },

        cy.contains('Submit').click()

    )})
})
