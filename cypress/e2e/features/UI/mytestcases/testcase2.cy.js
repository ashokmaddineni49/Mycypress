const url = 'http://localhost:3000/';
const username = 'ashok@gmail.com';
const password = 'ashok';
const username2 ='asho@gmail.com'

describe('Thulasi Login <home> <smoke>', () => {
    it('Able to Login', () => {
        cy.visit(url);
        cy.get('#userId').type(username);
        cy.get('#loginPwd').type(password);
        cy.get('.loginButton').click();
        cy.get('.col.welcomeUser').should('exist');
    })

    it('unable to login', () => {
        cy.visit(url);
        cy.get('#userId').type(username2);
        cy.get('#loginPwd').type(password);
        cy.get('.loginButton').click();
        cy.on('window:confirm', (confirmMsg) => {
            // Perform assertions or actions based on the confirm message
            expect(confirmMsg).to.equal('Userid or password is incorrect');
            // Click the "OK" button on the alert
            return true;
          });
        
          // Trigger the action that generates the alert
          cy.confirm
        
    })

    

})