describe('Update user details', () => {
    context('PUT /public/v2/users/${userId}', () => {
        it('Test PUT request', () => {
            cy.request({
                method: 'PUT',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    'authorization': 'Misterios Person ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
                },
                body: {
                    "name": "Updated Name",
                    "gender": "male",
                    "email": "updatedemail@domain.com",
                    "status": "active"
                }
            }).then((response) => {
                expect(response).to.have.property('status').to.equal(200)
                expect(response.body).to.have.property('name').to.equal("Updated Name")
                expect(response.body).to.have.property('email').to.equal("updatedemail@domain.com")
                cy.task('log', 'Updated user with id: ' + userId)
            })
        })
    })
})