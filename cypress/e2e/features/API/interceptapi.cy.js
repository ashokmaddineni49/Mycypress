describe('Working with Intercepts', () => {
   it('Intercept by Url', () => {
     cy.visit('https://reqres.in/');
     cy.intercept('https://reqres.in/api/users/').as('posts')
     cy.get("[data-id=users]").click()
     cy.wait('@posts').its('response.body.data').should('have.length', 6)
   })
 
 
   it('Intercept by use pattern-matching to match URLs', () => {
     cy.visit('https://reqres.in/');
     cy.intercept('/api/users/').as('posts')
     cy.get("[data-id=users]").click()
     cy.wait('@posts').its('response.body.data').should('have.length', 6)
   })
 
 
   it('Intercept by matching POST method', () => {
     cy.visit('https://reqres.in/');
     cy.intercept('POST', 'api/users', (req) => {
       req.reply({
         status: 200,
         body: {
           "name": "John",
           "job": "QA Manager",
         }
       })
     }).as('updateuser')
     cy.get("[data-id=post]").click()
     cy.wait('@updateuser')
   })
 


  it('intercept the create', () => {
    cy.visit('https://reqres.in/')

    cy.intercept('DELETE', 'api/users/2', {
      statusCode: 208,
      body: {
        name: 'Ashok'
      }
    }).as('deleteuser');

    cy.wait('@deleteuser').then((interception) => {
      expect(interception.response.body.name).to.eq('Ashok');
      
    });
  });

})