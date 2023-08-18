const faker = require("@faker-js/faker");

let url = 'localhost:8080/register';

describe('Update users through API Post', () => {

    it('Users Details POST', () => {
        for (let i = 0; i < 10; i++) {
            const fname = faker.person.firstName();
            const lname = faker.person.lastName();
            const emailId = faker.internet.email();
            const password = faker.internet.password();
            const licenseId = "DLR" + Math.floor(100000 + Math.random() * 900000);

            cy.request({
                method: 'POST',
                url: url,
                body: {
                    "fname": fname,
                    "lname": lname,
                    "email": emailId,
                    "password": password,
                    "licenseId": licenseId
                }
            }).then((response) => {
                expect(response).to.have.property('status').to.equal(200);
                expect(response.body).to.have.property('firstname').to.eq(fname);
            });

            cy.log('User_Details' + '   ', fname);
            cy.log(fname);
            cy.log(lname);
            cy.log(emailId);
            cy.log(password);
            cy.log(licenseId);
        }
    });

});
