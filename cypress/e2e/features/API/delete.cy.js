describe('Delete user', () => {
    context('DELETE /public/v2/users/${userId}', () => {
        it('Test DELETE request', () => {
            cy.request({
                method: 'DELETE',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
                }
            }).then((response) => {
                expect(response).to.have.property('status').to.equal(204)
                expect(response.body).to.be.empty
                cy.task('log', 'Deleted user with id: ' + userId)
            })
        })
    })
})