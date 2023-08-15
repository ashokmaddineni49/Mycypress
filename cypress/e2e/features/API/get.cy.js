describe('Get user details', () => {
    context('GET /public/v2/users/${userId}', () => {
        it('Test GET request', () => {
            cy.request({
                method: 'GET',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
                }
            }).then((response) => {
                expect(response).to.have.property('status').to.equal(200)
                expect(response.body).to.have.property('name').to.equal(userName)
                expect(response.body).to.have.property('email').to.equal(emailId)
                cy.task('log', 'Retrieved user with id: ' + userId)
            })
        })
    })
})