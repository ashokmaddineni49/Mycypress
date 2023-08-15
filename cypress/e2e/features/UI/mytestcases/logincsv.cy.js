const neatCSV = require('neat-csv');

const url = 'http://localhost:3000/';
let table;

describe('MultiLogins', () => {
    before(() => {
        // Load data from the CSV file and store it in the 'table' variable
        cy.fixture('usersdata.csv')
            .then((data) => neatCSV(data))
            .then((data) => {
                table = data;
                console.table(table); // Logging the table to the console for verification
            });
    });

    it('Logins', () => {
        cy.visit(url);
        
        // Make sure the data is available before using it in the test
        if (table) {
            table.forEach((user)=>{
                cy.get('#userId').clear().type(user['email']);
                cy.get('#loginPwd').clear().type(user['pass_word']);
                cy.get('.loginButton').click();
                cy.get('#logoutButton').click();
                cy.contains('Login').click();

            })
            
        } else {
            throw new Error('Test data not available');
        }
    });
});
