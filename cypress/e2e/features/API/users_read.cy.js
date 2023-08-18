describe('Update users through API Post', () => {

    it('Users Details POST', () => {

        cy.request(
            {
                'method': 'GET',
                'url': "http://localhost:8080/users",
            }).then(response => {

                expect(response).to.have.property('status').to.equal(200)
               // expect(response.body.firstName).to.have.property('firstname').to.eq(fname)

            })

    })

})