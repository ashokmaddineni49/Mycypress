const userName = "Maddineni"+Math.random().toString(36).substring(2, 15)
const emailId = userName + "@domain.com"
let userId

describe('Create a new user', () => {
    context('POST /public/v2/users', () => {
        it('Test POST request', () => {
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
                },
                body: {
                    "name": userName,
                    "gender": "male",
                    "email": emailId,
                    "status": "active"
                }
            }).then((response) => {
                expect(response).to.have.property('status').to.equal(201)
                expect(response.body).to.have.property('id').to.not.be.oneOf([null, ""])
                expect(response.body).to.have.property('name').to.equal(userName)
                expect(response.body).to.have.property('email').to.equal(emailId)
                userId = response.body.id;
                cy.task('log', 'Created a new user with id: ' + userId)
            })
        })
    })
})