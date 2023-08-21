import { faker } from "@faker-js/faker";

const Name = faker.person.firstName(); // Use faker.name.firstName() instead of faker.person.fullName()
const emailid = faker.internet.email();
const password = faker.internet.password();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const randomIndex = Math.floor(Math.random() * months.length);
const randomMonth = months[randomIndex];



describe('Page Validations (smoke)', { tags: '@regression' }, () => {

    it('Valid user Login (smoke)', () => {
        //cy.PageElements();
        cy.Launching_Automation_Site();
    });

    it('Signup/SignIn', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').contains(' Signup / Login').should('be.visible').click();
        cy.get('.signup-form > h2').contains('New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type(Name);
        cy.get('[data-qa="signup-email"]').type(emailid);
        cy.get('[data-qa="signup-button"]').click();
    });

    it('Validating the Given Name and Email', () => {
        cy.get('#id_gender1').check().should('be.visible');

        cy.get('[data-qa="name"]').invoke('val').then((givenName) => {
            expect(givenName).to.equal(Name); // Use expect to assert the equality

            cy.get('[data-qa="email"]').invoke('val').then((givenMail) => {
                expect(givenMail).to.equal(emailid);
                cy.get('[data-qa="password"]').type(password);

            });
        })
    })

    it('Date of Birth', () => {
        const minYear = 1900;
        const maxYear = 2021;
        const min = 1;
        const max = 31;
        const randomDay = Math.floor(Math.random() * (max - min + 1)) + min;
        const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
        const randomMonth = Math.floor(Math.random() * 12) + 1;
        cy.get('[data-qa="days"]').select(randomDay)
        cy.get('[data-qa="months"]').select(randomMonth)
        cy.get('[data-qa="years"]').select(randomYear.toString())
    })

    it('Add the checkboxes', () => {
        cy.get('#newsletter').check()
        cy.get('#optin').check().should('be.checked').uncheck()
    })

    it('Additional Information', () => {
        const lastName = faker.person.lastName();
        const CompanyName = faker.company.name();
        const Address = faker.location.streetAddress();
        const city = faker.location.city();
        const state = faker.location.state();
        const zipcode = faker.location.zipCode();
        const mobilenumber = faker.phone.number();

        cy.get('[data-qa="first_name"]').type(Name)
        cy.get('[data-qa="last_name"]').type(lastName)
        cy.get('[data-qa="company"]').type(CompanyName)
        cy.get('[data-qa="address"]').type(Address)
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type(state)
        cy.get('[data-qa="city"]').type(city)
        cy.get('[data-qa="zipcode"]').type(zipcode)
        cy.get('[data-qa="mobile_number"]').type(mobilenumber)



    })


})
