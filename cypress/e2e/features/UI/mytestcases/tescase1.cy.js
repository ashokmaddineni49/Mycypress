import { login } from './logincsv.cy.js';

describe('Registration <home>', () => {
  it('Login Calling', () => {
    login();
  });

  /*it('Welcome Message', () => {
    cy.get('.row.title').invoke('text').then((text) => {
      // Use the 'text' variable that contains the element's text
      // You can perform assertions or further actions with the text
      cy.log(`Element text: ${text}`);

    });
  });

  it('Bike Image Available', () => {
    cy.get('.col-6.bike-home').should('exist');
  })

  it('Image Not Available', () => {
    cy.get('.col-6.car-home').should('not.exist');
  })

  it('Logout button not available', () => {
    cy.get('a').contains('Logout').should('not.exist');
  })

  it('List the Bike Types', () => {
    cy.get('.col-6.bike-home').click();
    cy.get('.col-4.vehicletypes-home')
      .its('length')
      .then((count) => {
        // Use the count value as needed
        cy.log(`The count of items is: ${count}`);
      });

  })*/
});
